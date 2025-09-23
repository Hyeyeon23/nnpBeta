import React from "react";
import Footer from "../../../components/common/footer";

const Soy = () => {
  return (
    <>
      <Header></Header>
      <div id="smooth-wrapper" className="body-bg">
        <main>
          {/* breadcrumb area start */}
          <section className="breadcrumb-section__area breadcrumb-section breadcrumb-section-3 breadcrumb-section__space body-bg">
            <div className="container">
              <div className="breadcrumb__item">
                <a href="product.html">제품유형</a>
                <a href="product01.html">
                  <span>
                    <span className="clash">/</span> 두유액
                  </span>
                </a>
              </div>
              <div className="breadcrumb-section__text">
                <h3 className="breadcrumb-section__title grayn1">두유액 생산</h3>
              </div>
            </div>
          </section>

          <div className="project-client-details__area body-bg section-space-top">
            <div className="container">
              <div className="project-client-details__list">
                <ul className="project-client-details__list__item">
                  <li>콩의 영양을 담은 핵심 원료</li>
                  <li>맞춤형 두유액 솔루션</li>
                  <li>영양소 손실을 최소화</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="about-section__area about-section service-details body-bg overflow-hidden">
            <div className="about-section__thumb__wrapper">
              <div
                className="about-section__thumb__wrapper-img jarallax"
                data-background="common/imgs/business/pro01_01.jpg"
                alt="대두와 두유"
              />
            </div>
          </section>

          <section className="brandshiping__area body-bg section-space-top">
            <div className="contant1160">
              <div className="row">
                <div className="col-md-7 col-12">
                  <p className="f40 fw600 lh170 grayn1">
                    오랜 시간 사랑받은 식물성음료
                    <br />
                    국내 원조의 기술을 그대로
                    <br />
                    고형분 함량 최대 10%
                  </p>
                </div>
                <div className="col-md-5 col-12 d-flex align-items-center justify-content-end">
                  <p className="f22 fw400 lh150 grayn1 mt30m">
                    콩 본연의 맛과 영양을 살려내는 두유액 제조 기술을 보유하고 있습니다. 철저한 원재료 선별과 위생적인
                    공정, 차별화된 레시피 개발을 통해 식물성 영양의 가치를 담아 전합니다.
                  </p>
                </div>
              </div>

              <div className="row mb-minus-30 mt50 mt30m">
                <div className="col-lg-12">
                  <div className="mb-30">
                    <img className="img100" src="common/imgs/business/pro01_02.jpg" alt="두유병과 곡물들" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-30">
                    <img className="img100" src="common/imgs/business/pro01_03.jpg" alt="정식품 베지밀 에이,비 제품" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-30">
                    <img className="img100" src="common/imgs/business/pro01_04.jpg" alt="메일두유" />
                  </div>
                </div>
                <div className="col-md-12 mt70">
                  <p className="f27 fw500 grayn1 lh180 center">
                    자연과사람들은 오랜 경험과 기술력을 바탕으로 <br className="wView" />
                    파트너사에는 새로운 기획의 기회를, 소비자에게는 다양한 식물성 음료를 제공합니다.
                    <br className="wView" />
                    안전성과 신뢰를 바탕으로 식물성 음료 시장을 선도해 나가겠습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="testimonial2__area section-space mt100 mb50 cardWrap">
            <div className="swiper testmonial2-slide-active">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="product02.html">
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">단백질 음료 생산</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          빠른 흡수부터 느린 소화까지 <br />
                          맞춤형 고단백 음료 <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#고단백</span> <span className="keyword">#운동전후</span>{" "}
                          <span className="keyword">#맞춤형</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="common/imgs/business/proT_02.jpg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="product03.html">
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">균형영양식 생산</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          환자식&middot;시니어용 음료
                          <br />
                          균형 잡힌 영양설계 <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#균형영양식</span>&nbsp;&nbsp;
                          <span className="keyword">#영양식</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="common/imgs/business/proT_03.jpg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>

                {/* 나머지 swiper-slide도 같은 방식으로 반복 */}
              </div>
            </div>
          </div>

          <section className="">
            <div className="contant1160 mb200">
              <a href="contact.html">
                <img className="wView" src="common/imgs/business/cs.png" alt="제품이나 서비스에 대해 문의가 있나요?" />
                <img
                  className="mView"
                  src="common/imgs/business/cs_mo.png"
                  alt="제품이나 서비스에 대해 문의가 있나요?"
                />
              </a>
            </div>
          </section>
        </main>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Soy;
