import React from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/footer";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const linkToSub = (sub) => {
    navigate("/business/product/" + sub);
  };

  return (
    <>
      <Header></Header>
      <div id="smooth-wrapper" className="body-bg">
        <div>
          <main>
            <section className="subTop_product">
              <div className="container">
                <div className="subTop">
                  <div className="w80 centerH3">
                    <div className="centerH3_inner">
                      <p className="f36 fw400 lh100 f_pp text-left grayn1 mt80">
                        믿고 맡길 수 있는 ASEPTIC 음료 파트너
                      </p>
                      <p className="f90 fw600 lh140 mt40 mb100 text-left grayn1">
                        자연과사람들의
                        <br />
                        제품유형
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

                <div className="row">
                  <div className="col-md-6">
                    {/* 01 두유액 */}
                    <div className="project-section__item margin-bottom margin-right">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">01</span>
                        <h3 className="project-section__title _split_text">
                          <a href="/business/product/soy">두유액</a>
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
                        <a href="/business/product/soy" className="title-btn rr-btn">
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
                          <a href="/business/product/balance">균형영양식</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
                        <img src="/common/imgs/main/main_p03.jpg" alt="유리잔에 두유액이 따르는 모습" />
                      </div>
                      <div className="project-section__btn">
                        <a href="/business/product/balance" className="title-btn rr-btn">
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
                          <a href="/business/product/sikhye">식혜</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
                        <img src="/common/imgs/main/main_p05.jpg" alt="도자기 잔에 잣이 띄워져 있는 식혜" />
                      </div>
                      <div className="project-section__btn">
                        <a href="/business/product/sikhye" className="title-btn rr-btn">
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
                          <a href="/business/product/sterilized">멸균유</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
                        <img src="/common/imgs/main/main_p07.jpg" alt="도자기 잔에 잣이 띄워져 있는 식혜" />
                      </div>
                      <div className="project-section__btn">
                        <a href="/business/product/sterilized" className="title-btn rr-btn">
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
                        자연과사람들은 파티클 음료부터 두유,
                        <br />
                        식혜에 이르기까지 다양한 음료를 생산하며,
                        <br />
                        폭넓은 제조 역량과 기술력을 갖춘 신뢰받는
                        <br />
                        식음료 제조 파트너입니다.
                      </p>
                    </div>
                  </div>

                  {/* 오른쪽 컬럼 */}
                  <div className="col-md-6">
                    {/* 02 단백질 음료 */}
                    <div className="project-section__item margin-top margin-left">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">02</span>
                        <h3 className="project-section__title _split_text">
                          <a href="/business/product/protein">단백질 음료</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
                        <img src="/common/imgs/main/main_p02.jpg" alt="단배질팩" />
                      </div>
                      <div className="project-section__btn">
                        <a href="/business/product/protein" className="title-btn rr-btn">
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
                          <a href="/business/product/particle">파티클</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
                        <img src="/common/imgs/main/main_p04.jpg" alt="유리잔에 파티클이 있는 모습" />
                      </div>
                      <div className="project-section__btn">
                        <a href="/business/product/particle" className="title-btn rr-btn">
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
                          <a href="/business/product/sauce">소스</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
                        <img src="/common/imgs/main/main_p06.jpg" alt="육수" />
                      </div>
                      <div className="project-section__btn">
                        <a href="/business/product/sauce" className="title-btn rr-btn">
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
                          <a href="/business/product/juice">주스</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
                        <img src="/common/imgs/main/main_p08.jpg" alt="육수" />
                      </div>
                      <div className="project-section__btn">
                        <a href="/business/product/juice" className="title-btn rr-btn">
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
                          <a href="/business/product/coffee">커피</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
                        <img src="/common/imgs/main/main_p09.jpg" alt="육수" />
                      </div>
                      <div className="project-section__btn">
                        <a href="/business/product/coffee" className="title-btn rr-btn">
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
      <Footer></Footer>
    </>
  );
};

export default Product;
