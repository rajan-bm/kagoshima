// import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Privacy() {
    return (
        <>
            <Header />
            <div className="breadcrumb">
                <div className="breadcrumb__wrapper">
                    <ul className="breadcrumb__list">
                        <li className="breadcrumb__item">
                            <a href="./home" className="breadcrumb__link">お福分け青汁</a>
                        </li>
                        <li className="breadcrumb__item">個人情報保護方針</li>
                    </ul>
                </div>
            </div>
            <main id="main">
                <section className="privacy" id="privacy">
                    <div className="container -md">
                        <p className="privacy__txt">
                            個人情報保護方針
                        </p>
                        <p className="privacy__txt mt">
                            hoip合同会社（以下「当社」といいます）は、個人情報保護の重要性に鑑み、個人情報の保護に関する法律(個人情報保護法)その他の関連法令に遵守して、個人情報を適正に取り扱うとともに、安全管理について適切な措置を講じます。<br />
                            当社は、個人情報の取扱いが適正に行われるよう従業員への教育・指導を徹底し、適正な取扱いが行われるよう取り組んでまいります。また、個人情報の取扱いに関する苦情・相談に迅速に対応し、当社の個人情報の取扱い及び安全管理にかかる適切な措置については、適宜見直し、改善いたします。<br />
                            <br />
                            （1）個人情報の取得。<br />
                            当社は、お客様により良い商品やサービスを提供するために、業務上必要な範囲内かつ、適法で公正な手段により個人情報を取得します。<br />
                            （2）個人情報の利用目的。<br />
                            取得する個人情報の利用目的をできるだけ特定し明らかにします。<br />
                            個人情報の利用は、利用目的の範囲内で、具体的な業務に応じて権限を有する者が、業務上必要な範囲内で行います。<br />
                            （3）個人データの安全管理措置<br />
                            当社は、取り扱う個人データの漏洩、滅失または棄損の防止その他の個人データの安全管理のため、安全管理に関する取扱い規定等の整備および実地体制の整備等、十分なセキュリティ対策を講じるとともに、利用目的の達成に必要とされる正確性・再申請を確保するために適切な措置を講じています。<br />
                            （4）個人データの第三者への提供<br />
                            以下の場合を除き、ご本人の同意を得ることなく個人情報を第三者に開示・提供することはいたしません。<br />
                            1. 個人を識別することができない状態（統計資料等）で開示・提供する場合<br />
                            2.業務上必要な範囲内で、業務委託先に開示・提供する場合<br />
                            3.法令等によって開示・提供が求められた場合<br />
                            （5）個人情報の開示・訂正・削除<br />
                            当社は、お客様ご本人の個人情報の開示、訂正等、利用停止等のお申し出があった場合、ご本人様であることを確認させていた だいた上で、個人情報保護法に基づき、速やかに対応させていただきます。<br />
                            （6）当社に対するご照会<br />
                            下記お問い合わせ窓口にお問い合せください。<br />
                            <br />
                            お問い合わせ先<br />
                            hoip合同会社<br />
                            〒222-0037 神奈川県横浜市港北区大倉山3-16-19<br />
                            <br />
                            2024年11月25日　制定<br />
                            hoip合同会社　代表 安藤美紀
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Privacy;
