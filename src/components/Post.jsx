import { useState, useEffect } from 'react';
import Toc from "@/components/TableOfContents";

function Post({ post }) {
    const [modifiedContent, setModifiedContent] = useState('');

    useEffect(() => {
        if (!post.content?.rendered) {
            setModifiedContent('');
            return;
        }

        // Parse the content and add IDs to headings
        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content.rendered, 'text/html');
        const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');

        headings.forEach((heading, index) => {
            const id = heading.id || `heading-${index}`;
            heading.setAttribute('id', id);
        });

        // Serialize back to HTML string
        setModifiedContent(doc.body.innerHTML);
    }, [post.content?.rendered]);

    return (
        <div>            
            <Toc content={modifiedContent} />
            <div className="category__products wp-content">
                <div dangerouslySetInnerHTML={{ __html: modifiedContent }} />
            </div>
        </div>
    );
}

export default Post;