import { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DataContext } from "@/context/DataContext";

// Normalize Contact Form 7 response
const normalizeContactForm7Response = (response) => {
    const isSuccess = response.status === "mail_sent";
    const message = response.message;
    const validationError = isSuccess
        ? {}
        : Object.fromEntries(
            response.invalid_fields?.map((error) => {
                const key = /cf7[-a-z]*\.(.*)/.exec(error.into)?.[1] || error.into;
                return [key, error.message];
            }) || []
        );
    return { isSuccess, message, validationError };
};

function Contact() {
    const { pages, loadPages } = useContext(DataContext);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        mail: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});
    const counter = useRef(0); // For dynamic _wpcf7_unit_tag

    useEffect(() => {
        loadPages({ per_page: 1, slug: "contact" });
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("");
        setErrors({});
        const wordpressUrl = "https://cms.aozora-test.info/neta";
        const formId = "115";
        counter.current += 1; // Increment counter for unique unit tag
        const unitTag = `wpcf7-f${formId}-o${counter.current}`;
        const formBody = new FormData();
        formBody.append("name", formData.name);
        formBody.append("company-name", formData.company);
        formBody.append("email", formData.mail);
        formBody.append("phone-number", formData.phone);
        formBody.append("textarea", formData.message);
        formBody.append("_wpcf7_unit_tag", unitTag); // Add unit tag
        try {
            const url = `${wordpressUrl}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;
            const response = await fetch(url, {
                method: "POST",
                body: formBody,
            });
            const result = await response.json();
            const normalized = normalizeContactForm7Response(result);
            setStatus(normalized.message);
            setErrors(normalized.validationError);
            if (normalized.isSuccess) {
                setFormData({ name: "", company: "", mail: "", phone: "", message: "" });
            }
        } catch (error) {
            setStatus("送信中にエラーが発生しました。");
        }
    };
    return (
        <>
            <Header />
            <main id="main">
                <div className="breadcrumb">
                    <div className="breadcrumb__wrapper">
                        <ul className="breadcrumb__list">
                            <li className="breadcrumb__item">
                                <Link to="/" className="breadcrumb__link">
                                    お福分け青汁
                                </Link>
                            </li>
                            <li className="breadcrumb__item">お問い合わせ</li>
                        </ul>
                    </div>
                </div>
                <section className="contact">
                    <div className="contact-form" id="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className="form-label">
                                    <label htmlFor="name">お名前 (必須)</label>
                                </div>
                                <div className="form-input">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.name && <p className="error">{errors.name}</p>}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label">
                                    <label htmlFor="company">会社名</label>
                                </div>
                                <div className="form-input">
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                    {errors["company-name"] && (
                                        <p className="error">{errors["company-name"]}</p>
                                    )}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label">
                                    <label htmlFor="mail">メールアドレス (必須)</label>
                                </div>
                                <div className="form-input">
                                    <input
                                        type="email"
                                        name="mail"
                                        id="mail"
                                        value={formData.mail}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.email && <p className="error">{errors.email}</p>}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label">
                                    <label htmlFor="phone">電話番号</label>
                                </div>
                                <div className="form-input">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    {errors["phone-number"] && (
                                        <p className="error">{errors["phone-number"]}</p>
                                    )}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label">
                                    <label htmlFor="message">お問い合わせ内容</label>
                                </div>
                                <div className="form-input">
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                    {errors.textarea && <p className="error">{errors.textarea}</p>}
                                </div>
                            </div>
                            <div className="btn-grp">
                                <button type="submit" className="btn-submit">
                                    <img src="./assets/img/common/mail-white.png" alt="Contact" width="31" height="23" loading="lazy" className="img-fluid" />
                                    <span>お問い合わせをする</span>
                                </button>
                            </div>
                            {status && <p className="error">{status}</p>}
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Contact;