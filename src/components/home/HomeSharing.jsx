function HomeSharing() {
    return (
        <>

            <section className="sharing" id="sharing">
                <div className="container -sm">
                    <div className="section-header -white">
                        <h2 className="section-header__top">幸せのおすそ分け</h2>
                        <h3 className="section-header__btm">お福分け青汁</h3>
                    </div>

                    <div className="sharing__block">
                        <p className="sharing__text">
                            鹿児島のフードクリエイターの渡辺千佳子さんが20年飲み続けている青汁をパッケージ化しました。<br />
                            ご自身とご家族が毎日飲み続けられる、安心でシンプルな素材だけを配合した、こだわりの青汁です。健康な身体とつやつやのお肌は、幸せのベースになります。幸せのお福分けになりますよう、願いをこめてお届けします。喜界島の信頼なる農園の素材を使用してます。材料が入手した場合のみの限定販売となります。３つの成分を1:1:1の割合で配合しています。
                        </p>

                        <div className="sharing__row">
                            <div className="sharing__col">
                                <p className="sharing__circle">
                                    桑の葉
                                </p>
                                <p className="sharing__text">
                                    血糖値上昇抑制効果や高血圧抑制、血中脂質抑制、便通改善などの健康効果があります。中でも鹿児島の有機栽培されている桑葉には、体を内側からキレイにする働きがある成分、たんぱく質、ミネラルや食物繊維、カルシウム、鉄分、カロテンが豊富に含まれています。ダイエット中の方、甘い物が好きな方は食前に飲むのがおすすめです。
                                </p>
                            </div>
                            <div className="sharing__col">
                                <p className="sharing__circle">
                                    コラーゲン
                                </p>
                                <p className="sharing__text">
                                    コラーゲンとはたんぱく質の一種で、身体の皮膚や筋肉・内臓・骨・関節・目・髪等あらゆる全身
                                    の組織に含まれており主にそれらの細胞をつなぎとめる働きをしています。Halal認証を取得した安全なフィッシュコラーゲンパウダーです。超低分子ペプチドは、平均分子量1000とナノサイズなので、吸収性が高く美肌効果が高いコラーゲンです。
                                </p>
                            </div>
                            <div className="sharing__col">
                                <p className="sharing__circle">
                                    大麦若葉
                                </p>
                                <p className="sharing__text">
                                    大麦若葉は、ビタミン、ミネラル酵素などの栄養素を多く含んでいます。鹿児島の良質な土壌で育った大麦若葉の中でもさらに厳選した若い部分のみを使用して味にこだわっています。自然の甘みを活かしたまま殺菌、新鮮さを生かして微粉砕加工していますので匂いや味にくせがありません。
                                </p>
                            </div>
                        </div>

                        <div className="sharing__btn">
                            <a href="#">
                                お福分け青汁とは
                            </a>
                            <a href="#">
                                お福分け青汁誕生物語
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="sharing-downwave">
                <svg className="onde" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="onda" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352Z" />
                    </defs>
                    <g className="parallaxonde">
                        <use xlinkHref="#onda" x="48" y="0" fill="#009944" />
                    </g>
                </svg>
            </div>
        </>
    );
}

export default HomeSharing;
