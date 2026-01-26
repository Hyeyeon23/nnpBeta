import React, { useEffect } from "react";
import Header from "../../../../components/common/Header";

import { useNavigate, useLocation } from "react-router-dom";
import MetaEN from "../../../../components/common/MetaEN";

import FooterReactEN from "../../../../components/common/FooterReactEN";
import HeaderEN from "../../../../components/common/HeaderEN";

const ProductEN = ({ lang, setLang }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const linkToSub = (sub) => {
    navigate("/business/product/" + sub);
  };

  useEffect(() => {
    // <main.js 재실행>라우트 변경 시마다
    const reloadMainScript = () => {
      const mainScript = document.createElement("script");
      mainScript.src = "/common/js/main.js";
      mainScript.async = false;
      document.body.appendChild(mainScript);

      return () => {
        if (mainScript && document.body.contains(mainScript)) {
          document.body.removeChild(mainScript);
        }
      };
    };

    // main.js 재로드
    const cleanup = reloadMainScript();

    // <main.js 재실행>

    return cleanup;
  }, [location]);

  return (
    <>
      <MetaEN
        title={"Korea's No.1 OEM, Nature & People"}
        description={
          "Specialized in beverage OEM, ODM, Private Label, and B2B manufacturing, including exports. We expertly produce Aseptic Cartons, Gable Tops, and Cans."
        }></MetaEN>
      <HeaderEN lang={lang} setLang={setLang}></HeaderEN>
      <div id="smooth-wrapper" className="body-bg">
        <div>
          <main>
            <section className="subTop_product">
              <div className="container">
                <div className="subTop">
                  <div className="w80 centerH3">
                    <div className="centerH3_inner">
                      <p className="f36 fw400 lh100  f_pp text-left grayn1 mt80">
                        Your Trusted Aseptic Beverage Partner
                      </p>
                      <p className="f90 fw600 lh140 mt40 mb100 text-left grayn1">
                        Products of <br />
                        Nature & People
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="project-section__area tp-btn-trigger-2 project-section body-bg section-space-bottom-160 section-space-top-110"
              style={{ border: "1px solid #e7e7e7" }}>
              <div className="container">
                <div className="project-section__shape__wrap">
                  <div className="project-section__border__shape"></div>
                  <div className="project-section__border__shape"></div>
                  <div className="project-section__border__shape"></div>
                  <div className="project-section__border__shape"></div>
                </div>

                <div className="row nnpPro_list">
                  {" "}
                  {/* 2025-09-29 nnpPro_list 추가 - */}
                  <div className="col-md- col-6">
                    {/* 2025-09-29 col-6 추가 */}
                    {/* 01 두유액 */}
                    <div className="project-section__item margin-bottom margin-right">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">01</span>
                        <h3 className="project-section__title _split_text_">
                          <a href="#!" onClick={() => linkToSub("soy")}>
                            Soy Beverages
                          </a>
                        </h3>
                      </div>
                      <div className="breadcrumb-section__text breadcrumb-text-2">
                        <span className="author-img">
                          <img
                            src="/common/imgs/thum/SIG-Combibloc-mini_달콤한베지밀비-검은콩두유.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                          <img
                            src="/common/imgs/thum/TetraPack-200ml-mid_서울우유-협동조합(검은깨검은콩).jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                          <img
                            src="/common/imgs/thum/TetraPack-200ml-mid_자연과사람들두유-플레인.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                        </span>
                      </div>
                      <div className="project-section__thumb mt20">
                        <img src="/common/imgs/main/main_p01.jpg" alt="유리잔에 두유액이 따르는 모습" />
                      </div>
                      <div className="project-section__btn">
                        <a href="#!" onClick={() => linkToSub("soy")} className="title-btn rr-btn">
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                          More Details
                        </a>
                      </div>
                    </div>

                    {/* 03 균형영양식 */}
                    <div className="project-section__item margin-bottom margin-right">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">03</span>
                        <h3 className="project-section__title _split_text">
                          <a href="#!" onClick={() => linkToSub("balance")}>
                            Balanced Nutrition Meals
                          </a>
                        </h3>
                      </div>
                      {/* <!-- 20250929 수정--> */}
                      <div className="breadcrumb-section__text breadcrumb-text-2">
                        <span className="author-img">
                          <img
                            src="/common/imgs/thum/200-DIA_그린비아-마일드케어.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                          <img
                            src="/common/imgs/thum/TetraPack-1000ml-edge_그린비아-디엠.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                          <img
                            src="/common/imgs/thum/200-DIA_케어웰-구수한맛.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                        </span>
                      </div>
                      <div className="project-section__thumb">
                        <img src="/common/imgs/main/main_p03.jpg" alt="유리잔에 두유액이 따르는 모습" />
                      </div>
                      <div className="project-section__btn">
                        <a href="#!" onClick={() => linkToSub("balance")} className="title-btn rr-btn">
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                          More Details
                        </a>
                      </div>
                    </div>

                    {/* 05 식혜 */}
                    <div className="project-section__item margin-bottom margin-right">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">05</span>
                        <h3 className="project-section__title _split_text">
                          <a href="#!" onClick={() => linkToSub("sikhye")}>
                            Sikhye
                          </a>
                        </h3>
                      </div>
                      {/* <!-- 20250929 수정--> */}
                      <div className="breadcrumb-section__text breadcrumb-text-2">
                        <span className="author-img">
                          <img
                            src="/common/imgs/thum/202-DIA_Oh!-우리집-식혜.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                          <img
                            src="/common/imgs/thum/202-DIA_노브랜드식혜.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                          <img
                            src="/common/imgs/thum/202-DIA_큰집식혜.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                        </span>
                      </div>
                      <div className="project-section__thumb">
                        <img src="/common/imgs/main/main_p05.jpg" alt="도자기 잔에 잣이 띄워져 있는 식혜" />
                      </div>
                      <div className="project-section__btn">
                        <a href="#!" onClick={() => linkToSub("sikhye")} className="title-btn rr-btn">
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                          More Details
                        </a>
                      </div>
                    </div>

                    {/* 07 멸균유 */}
                    <div className="project-section__item margin-right">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">07</span>
                        <h3 className="project-section__title _split_text">
                          <a href="#!" onClick={() => linkToSub("sterilized")}>
                            Sterilized Milk
                          </a>
                        </h3>
                      </div>
                      {/* 	<!-- 20250929 수정--> */}
                      <div className="breadcrumb-section__text breadcrumb-text-2">
                        <span className="author-img">
                          <img
                            src="/common/imgs/thum/TetraPack-200ml-mid_파스퇴르.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                        </span>
                      </div>
                      <div className="project-section__thumb">
                        <img src="/common/imgs/main/main_p07.jpg" alt="도자기 잔에 잣이 띄워져 있는 식혜" />
                      </div>
                      <div className="project-section__btn">
                        <a href="#!" onClick={() => linkToSub("sterilized")} className="title-btn rr-btn">
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                          More Details
                        </a>
                      </div>
                    </div>

                    {/* 설명 텍스트 */}
                    <div className="project-section__content margin-top margin-left">
                      <p className="project-section__dec rr_title_anim f22 fw400 lh160">
                        Nature & People is a trusted beverage manufacturer with broad production capabilities,
                        <br />
                        offering products ranging from particle drinks to soy beverages and Sikhye (Korean traditional
                        rice drink), <br />
                        supported by advanced technology and reliable expertise.
                      </p>
                    </div>
                  </div>
                  {/* 오른쪽 컬럼 */}
                  <div className="col-md-6 col-6">
                    {/* 02 단백질 음료 */}
                    <div className="project-section__item margin-top margin-left">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">02</span>
                        <h3 className="project-section__title _split_text">
                          <a href="#!" onClick={() => linkToSub("protein")}>
                            Protein Drinks
                          </a>
                        </h3>
                      </div>
                      {/* <!-- 20250929 수정--> */}
                      <div className="breadcrumb-section__text breadcrumb-text-2">
                        <span className="author-img">
                          <img
                            src="/common/imgs/thum/200250mL-A3-Compact-Flex_더단백초코.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                          <img
                            src="/common/imgs/thum/200250mL-A3-Compact-Flex_그린비아-프로틴밀-아호.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                          <img
                            src="/common/imgs/thum/200250mL-A3-Compact-Flex_그린비아-프로틴밀-초코.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                        </span>
                      </div>
                      <div className="project-section__thumb mt20">
                        <img src="/common/imgs/main/main_p02.jpg" alt="단백질팩" />
                      </div>
                      <div className="project-section__btn">
                        <a href="#!" onClick={() => linkToSub("protein")} className="title-btn rr-btn">
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                          More Details
                        </a>
                      </div>
                    </div>

                    {/* 04 파티클 */}
                    <div className="project-section__item margin-top margin-left">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">04</span>
                        <h3 className="project-section__title _split_text">
                          <a href="#!" onClick={() => linkToSub("particle")}>
                            Particle Drinks
                          </a>
                        </h3>
                      </div>
                      {/* 20250929 수정 */}
                      <div className="breadcrumb-section__text breadcrumb-text-2">
                        <span className="author-img">
                          <img
                            src="/common/imgs/thum/SIG-Combibloc-mid_과일이꼭꼭씹히는애플망고두유.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                        </span>
                      </div>
                      <div className="project-section__thumb mt20">
                        <img src="/common/imgs/main/main_p04.jpg" alt="유리잔에 파티클이 있는 모습" />
                      </div>
                      {/* //20250929 수정 */}

                      <div className="project-section__btn">
                        <a href="#!" onClick={() => linkToSub("particle")} className="title-btn rr-btn">
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                          More Details
                        </a>
                      </div>
                    </div>

                    {/* 06 소스 */}
                    <div className="project-section__item margin-top margin-left">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">06</span>
                        <h3 className="project-section__title _split_text">
                          <a href="#!" onClick={() => linkToSub("sauce")}>
                            Sauces
                          </a>
                        </h3>
                      </div>
                      {/* <!-- 20250929 수정--> */}
                      <div className="breadcrumb-section__text breadcrumb-text-2">
                        <span className="author-img">
                          <img
                            src="/common/imgs/thum/TetraPack-1000ml-edge_구수한사골육수.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                          <img
                            src="/common/imgs/thum/TetraPack-1000ml-edge_담백한채소육수.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                          <img
                            src="/common/imgs/thum/TetraPack-1000ml-edge_풀무원-요리육수-해물.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                        </span>
                      </div>
                      <div className="project-section__thumb mt20">
                        <img src="/common/imgs/main/main_p06.jpg" alt="육수" />
                      </div>
                      {/* 	<!-- //20250929 수정--> */}

                      <div className="project-section__btn">
                        <a href="#!" onClick={() => linkToSub("sauce")} className="title-btn rr-btn">
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                          More Details
                        </a>
                      </div>
                    </div>

                    {/* 08 주스 */}
                    <div className="project-section__item margin-top margin-left">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">08</span>
                        <h3 className="project-section__title _split_text">
                          <a href="#!" onClick={() => linkToSub("juice")}>
                            Juice
                          </a>
                        </h3>
                      </div>
                      {/* 20250929 수정 */}
                      <div className="breadcrumb-section__text breadcrumb-text-2">
                        <span className="author-img">
                          <img
                            src="/common/imgs/thum/200-DIA_자연과사람들-사과드링크.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                          <img
                            src="/common/imgs/thum/SIG-Combibloc-mini_야채가득V19.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                          <img
                            src="/common/imgs/thum/200-DIA_미닛메이드-조이오렌지-240ml.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                        </span>
                      </div>
                      <div className="project-section__thumb mt20">
                        <img src="/common/imgs/main/main_p08.jpg" alt="주스" />
                      </div>
                      {/* //20250929 수정 */}

                      <div className="project-section__btn">
                        <a href="#!" onClick={() => linkToSub("juice")} className="title-btn rr-btn">
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                          More Details
                        </a>
                      </div>
                    </div>

                    {/* 09 커피 */}
                    <div className="project-section__item margin-top margin-left">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">09</span>
                        <h3 className="project-section__title _split_text">
                          <a href="#!" onClick={() => linkToSub("coffee")}>
                            Coffee
                          </a>
                        </h3>
                      </div>
                      {/* 20250929 수정 */}
                      <div className="breadcrumb-section__text breadcrumb-text-2">
                        <span className="author-img">
                          <img
                            src="/common/imgs/thum/200250mL-A3-Compact-Flex_닥터바리스타-버터커피.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                          <img
                            src="/common/imgs/thum/200-DIA_조지아-오리지날.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                          <img
                            src="/common/imgs/thum/200-DIA_싼타페-헤이즐넛향.jpg"
                            alt="image not found"
                            style={{ border: "5px solid #ececec" }}
                          />
                        </span>
                      </div>
                      <div className="project-section__thumb mt20">
                        <img src="/common/imgs/main/main_p09.jpg" alt="커피" />
                      </div>
                      {/* //20250929 수정 */}

                      <div className="project-section__btn">
                        <a href="#!" onClick={() => linkToSub("coffee")} className="title-btn rr-btn">
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                          More Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <FooterReactEN></FooterReactEN>
    </>
  );
};

export default ProductEN;
