import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useLocation } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import useProjectPanelPin from "../../../hooks/useProjectPanelPin";
import useHoverReveal from "../../../hooks/useHoverReveal";

const HealthyEN = () => {
  const location = useLocation();

  const pageRef = useRef(null);
  useProjectPanelPin(pageRef);
  useHoverReveal([location.pathname]);
  useLayoutEffect(() => {
    document.querySelectorAll(".rr-hover-reveal-bg[data-background]").forEach((el) => {
      const bg = el.getAttribute("data-background");
      el.style.backgroundImage = `url(${bg})`;
      el.style.backgroundSize = "cover";
      el.style.backgroundRepeat = "no-repeat";
      el.style.backgroundPosition = "center";
    });
  }, [location.pathname]);
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
      <section
        ref={pageRef}
        className="project-section-2__area project-section-2 section-space-top-160 section-space-bottom-160 brandCard">
        <div className="container">
          <div className="section__title-wrapper section__title-wrapper-3 hero contant1100">
            <div className="sikhye_logo">
              <img src="/common/imgs/brand/sikhye_logo.png" alt="자연과사람들이 만든" />
            </div>
            <p className="f30 fw500 lh140 mt20">
              As its name suggests,
              <br /> 방방곡곡(Bang Bang Gok Gok)
              <br /> is a traditional beverage brand inspired by local flavors
              <br /> and the heartfelt craftsmanship found throughout Korea.
            </p>
          </div>

          <div className="project-section-2__wrapper">
            <div className="project-section-2__item project-panel">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-section-2__content">
                    <p className="f40 fw600 grayn1 f_pp lh130">What is 방방곡곡?</p>

                    <p className="f20 fw400 grayn1 mt30 lh150">
                      We do more than simply make drinks.
                      <br />
                      We gather good ingredients from local farms, preserve long-lasting methods, and honor the human
                      touch that gives tradition its soul.
                    </p>

                    <p className="f20 fw400 grayn1 mt30 lh150">
                      We bring forgotten flavors back to life—honestly, faithfully, and in a way that resonates with the
                      taste of today, so anyone can enjoy them with ease.
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
                      Tradition continues,
                      <br />
                      and flavor lives on.
                    </p>

                    <p className="f20 fw400 grayn1 mt30 lh150">
                      No preservatives. No artificial sweeteners. Minimal processing. Crafted with integrity in a
                      process you can trust—made only with the purity of nature and the sincerity of people.
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
              <p class="f45 fw500 grayn1 lh130 center">
                <span class="fw600">A Sip from Nature</span>
                <br />
                Introducing the Nature & People brand family.
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
                          <h3 className="award-section__title fw500 lh130">Bang Bang Gok Gok</h3>
                          <h4 className="award-section__subtitle fw400 wView">Sikhye Beverage</h4>
                          <h4 className="award-section__subtitle fw400 mView">
                            As the name suggests, ‘Bang Bang Gok Gok’ collects the hidden traditional flavors and
                            sincerity found throughout Korea and shares them with the modern consumer.
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
                          <h4 className="award-section__subtitle fw400 wView">Protein Drinks</h4>
                          <h4 className="award-section__subtitle fw400 mView">
                            WITH ME, WITH US, WIZUS! WIZUS is a specialized health and nutrition beverage brand.
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
                          <h3 className="award-section__title fw500 lh130">Made by Nature & People</h3>
                          <h4 className="award-section__subtitle fw400 wView">Fruit Beverage Series</h4>
                          <h4 className="award-section__subtitle fw400 mView">
                            WITH ME, WITH US, WIZUS! WIZUS is a specialized health and nutrition beverage brand.
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
                Nature & People offers a broad and authentic beverage experience through a diverse brand portfolio
                shaped by evolving lifestyles and consumer needs. As times change, so will we—continuously expanding our
                range of products to enrich every moment of your daily life.
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

export default HealthyEN;
