import React, { useEffect } from "react";
import Header from "../../components/common/Header";
import FooterReact from "../../components/common/FooterReact";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Healthy = () => {
  // useEffect(() => {
  //   // <main.js 재실행>라우트 변경 시마다
  //   const reloadMainScript = () => {
  //     const mainScript = document.createElement("script");
  //     mainScript.src = "/common/js/main.js";
  //     mainScript.async = false;
  //     document.body.appendChild(mainScript);

  //     return () => {
  //       if (mainScript && document.body.contains(mainScript)) {
  //         document.body.removeChild(mainScript);
  //       }
  //     };
  //   };

  //   // main.js 재로드
  //   const cleanup = reloadMainScript();

  //   // <main.js 재실행>

  //   return cleanup;
  // }, []);

  return (
    <>
      {/* Brand Swiper section */}
      <section>
        <div className="contant1760">
          <div className="row">
            <div className="col-md-12 mt100">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="ourBrandSwiper">
                <SwiperSlide>
                  <img src="/common/imgs/brand/sikhye01.jpg" alt="방방곡곡 식혜" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/common/imgs/brand/sikhye02.jpg" alt="방방곡곡 식혜" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/common/imgs/brand/sikhye03.jpg" alt="방방곡곡 식혜" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="project-section-2__area project-section-2 section-space-top-160 section-space-bottom-160 brandCard">
        <div className="container">
          <div className="section__title-wrapper section__title-wrapper-3 hero contant1100">
            <div className="sikhye_logo">
              <img src="/common/imgs/brand/sikhye_logo.png" alt="자연과사람들이 만든" />
            </div>
            <p className="f30 fw500 lh140 mt20">
              ‘방방곡곡’은 이름 그대로,
              <br />
              대한민국 곳곳에 숨겨진 전통의 맛과 사람들의 정성을 모아
              <br />
              현대인의 일상에 전하는 전통 음료 브랜드입니다.
            </p>
          </div>

          <div className="project-section-2__wrapper">
            <div className="project-section-2__item project-panel">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-section-2__content">
                    <p className="f40 fw600 grayn1 f_pp lh130">What is 방방곡곡?</p>
                    <p className="f20 fw400 grayn1 mt30 lh150">
                      우리는 단지 음료를 만드는 것이 아닙니다. 지역의 좋은 재료, 오래된 방식, 사람의 손맛을 담아내는
                      일입니다.
                    </p>
                    <p className="f20 fw400 grayn1 mt30 lh150">
                      잊혀가는 전통의 맛을 지금, 이 시대의 감각으로 정직하게 되살려 누구나 쉽게 즐길 수 있도록 만듭니다.
                    </p>
                    <p className="f20 fw400 grayn1 mt30 lh150">
                      방부제 없이, 감미료 없이, 가공 최소화 믿을 수 있는 공정에서, 오직 자연의 맛과 정성만으로
                      완성합니다.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="project-section-2__thumb">
                    <img src="/common/imgs/brand/sikhye04.jpg" alt="자연과사람들이만든" />
                  </div>
                </div>
              </div>
            </div>

            {/* 위져스레몬 */}
            <div className="project-section-2__item project-panel">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-section-2__content">
                    <p className="f40 fw600 grayn1 f_pp lh130 mt20">
                      전통은 이어지고,
                      <br />
                      맛은 살아난다
                    </p>
                    <p className="f20 fw400 grayn1 mt30 lh150">
                      방부제 없이, 감미료 없이, 가공 최소화
                      <br />
                      믿을 수 있는 공정에서,
                      <br />
                      오직 자연의 맛과 정성만으로 완성합니다.
                    </p>
                    <p className="mt20">
                      <img className="sikhye_icons" src="/common/imgs/brand/sikhye06.jpg" alt="위져스 레몬제품" />
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="project-section-2__thumb">
                    <p>
                      <img src="/common/imgs/brand/sikhye05.jpg" alt="자연과사람들이만든" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* //위져스레몬 */}
          </div>

          {/* 
    <div className="btn-wrap mt-80">
      <a href="project.html" className="rr-btn before-btn">브랜드사이트 바로가기</a>
    </div> 
    */}
        </div>
        <div className="project-panel-area"></div>
      </section>

      <section>
        <div className="contant1160 mb200">
          <div className="row">
            <div className="col-lg-12">
              <p className="f45 fw500 grayn1 lh130 center">
                <span className="fw600">자연에서 온 한 모금,</span>
                <br />
                자연과사람들 브랜드를 소개합니다.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt100">
              <div className="award-section__wrap brand_wrap">
                {/* 방방곡곡 */}
                <div className="award-section__item p-relative rr-hover-reveal-item active">
                  <a href="/brand/healthy/sikhye">
                    <div className="award-section__inner-item d-flex justify-content-between align-items-center">
                      <div className="award-section__content d-flex align-items-center">
                        <div className="award-section__year">
                          <span>2024</span>
                        </div>
                        <div className="award-section__title-box">
                          <h3 className="award-section__title fw500">방방곡곡</h3>
                          <h4 className="award-section__subtitle fw400 wView">식혜음료</h4>
                          <h4 className="award-section__subtitle fw400 mView">
                            ‘방방곡곡’은 이름 그대로, 대한민국 곳곳에 숨겨진 전통의 맛과 사람들의 정성을 모아 현대인의
                            일상에 전하는 전통 음료 브랜드입니다.
                          </h4>
                        </div>
                      </div>
                      <div className="award-section__link">
                        <span>
                          <i className="fa-regular fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                  <div className="rr-hover-reveal-bg" data-background="/common/imgs/brand/nnpmv03.png" alt="식혜" />
                </div>

                {/* WIZUS */}
                <div className="award-section__item item-2 p-relative rr-hover-reveal-item active">
                  <a href="/brand/wizus/greenlemon">
                    <div className="award-section__inner-item d-flex justify-content-between align-items-center">
                      <div className="award-section__content d-flex align-items-center">
                        <div className="award-section__year">
                          <span>2023</span>
                        </div>
                        <div className="award-section__title-box">
                          <h3 className="award-section__title fw500">WIZUS</h3>
                          <h4 className="award-section__subtitle fw400 wView">단백질 음료</h4>
                          <h4 className="award-section__subtitle fw400 mView">
                            WITH ME, WITH US 위져스! WIZUS는 HEALTH & 뉴트리션 음료 전문 브랜드입니다.
                          </h4>
                        </div>
                      </div>
                      <div className="award-section__link">
                        <span>
                          <i className="fa-regular fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                  <div
                    className="rr-hover-reveal-bg"
                    data-background="/common/imgs/brand/nnpmv02.png"
                    alt="단백질 음료"
                  />
                </div>

                {/* 자연과사람들이 만든 */}
                <div className="award-section__item item-3 p-relative rr-hover-reveal-item active">
                  <a href="/brand/pb">
                    <div className="award-section__inner-item d-flex justify-content-between align-items-center">
                      <div className="award-section__content d-flex align-items-center">
                        <div className="award-section__year">
                          <span>2020</span>
                        </div>
                        <div className="award-section__title-box">
                          <h3 className="award-section__title fw500">자연과사람들이 만든</h3>
                          <h4 className="award-section__subtitle fw400 wView">과일 음료</h4>
                          <h4 className="award-section__subtitle fw400 mView">
                            ‘자연과사람들이 만든’은 건강한 자연의 선물과 정직한 사람의 손길이 만나 완성된 브랜드입니다.
                          </h4>
                        </div>
                      </div>
                      <div className="award-section__link">
                        <span>
                          <i className="fa-regular fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                  <div
                    className="rr-hover-reveal-bg brand_over03"
                    data-background="/common/imgs/brand/nnpmv01.png"
                    alt="과일 음료"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 마지막 소개 섹션 */}
      <section>
        <div className="contant1310 mb200">
          <div className="row">
            <div className="col-lg-6 brand_rotating_box">
              <p className="brand_rotating wView">
                <img id="rotating-arrow" src="/common/imgs/shapes/main_onstop.png" alt="arrow" className="rotate" />
              </p>
              <p className="f80 f_pp grayn5 lh100">A Drink for</p>
            </div>
            <div className="col-lg-6 wView">
              <p className="f20 lh140 grayn1">
                ‘자연과 사람들’은 시대 변화와 라이프스타일에 맞춘
                <br className="wView" />
                다양한 브랜드 포트폴리오를 통해 폭넓고 자연스러운 음료 경험을
                <br className="wView" />
                제공하며, 앞으로도 지속적으로 그 영역을 확장해 나갈 것입니다.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="f80 f_pp grayn5 lh110 f_pp">Every Moment,</p>
              <p className="f90 f_pp grayn1 lh110 f_pp fw900 text-right mt20">A Brand for Every You.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Healthy;
