import { useContext, useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DataContext } from "@/context/DataContext";

function Contact() {
    const { pages, loadPages } = useContext(DataContext);
    useEffect(() => {
        loadPages({ per_page: 1, slug: "contact" });
    }, []);

    return (
        <>
            <Header />
            <main id="main">
                {/* <Breadcrumb
                    posttype = {pages[0].posttype}
                    title = {pages[0].title}
                    slug = {pages[0].slug}
                /> */}
                <section className="contact">
                    <div className="contact-form" id="contact-form">
                        <div className="form-group">
                            <div className="form-label">
                                <label for="name">お名前 (必須)</label>
                            </div>
                            <div className="form-input">
                                <input type="text" name="name" id="name" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-label">
                                <label for="name">会社名</label>
                            </div>
                            <div className="form-input">
                                <input type="text" name="company" id="company" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-label">
                                <label for="name">メールアドレス (必須)</label>
                            </div>
                            <div className="form-input">
                                <input type="email" name="mail" id="mail" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-label">
                                <label for="name">電話番号</label>
                            </div>
                            <div className="form-input">
                                <input type="number" name="phone" id="phone" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-label">
                                <label for="name">お問い合わせ内容</label>
                            </div>
                            <div className="form-input">
                                <textarea id="message" name="message"></textarea>
                            </div>
                        </div>
                        <div className="btn-grp">
                            <button type="submit" className="btn-submit">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="31px" height="23px">
                                    <image x="0px" y="0px" width="31px" height="23px"
                                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAXCAQAAABZ9FzfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfpAwYMNxeFmhlxAAABLUlEQVQ4y+3UOy+DURjA8f/7tovF4JJ0MHXBKDGYSYpECBEjn0LiE0jTmEQaNrtR4kOgSheXXUOkxVCJuvwNbbShSt/ZOdvJ88tzyZMTCMuME0c6OwFFtgJXyVDihaBDLgmuAs8pk+K1Qwwwzl6cGGUqETBc8xTyTjwShhgh5qyYsVc6vLMWfMRjH3313rQ9f6YLFtSiN3jhvkmzatl1+3+l856pOScc8xYvPBBx0B31wYx9P9I58+qJKUNxxLsGRxxyU7033WIWS56qeSeN1V9Gv/JaFVv1RhqzWLSg5p3+pD/yWhVZteSGiXqvh01Zf+WIw26rVfXIKcMWEW15rZE1Z75lbeLtN+6SdPvFCyMu7D8nJOQton3BOM8M0EU1wl+XpDtwhV1KkXiC3Afe4ny+DPKoEAAAAABJRU5ErkJggg==" />
                                </svg>
                                <span>お問い合わせをする</span>
                            </button>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}

export default Contact;
