import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useLocation } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import useProjectPanelPin from "../../../hooks/useProjectPanelPin";
import useHoverReveal from "../../../hooks/useHoverReveal";

const PBEN = () => {
  const location = useLocation();

  const pageRef = useRef(null);
  useProjectPanelPin(pageRef);
  useHoverReveal(".rr-hover-reveal-item", [location.pathname]);
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
                  <img src="/common/imgs/brand/nnpm01.jpg" alt="자연과사람들이만든 과일3종캔" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/common/imgs/brand/nnpm02.jpg" alt="자연과사람들이만든 과일3종캔" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/common/imgs/brand/nnpm03.jpg" alt="자연과사람들이만든 과일3종캔" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/common/imgs/brand/nnpm04.jpg" alt="자연과사람들이만든 과일3종캔" />
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
          <div className="section__title-wrapper section__title-wrapper-3 hero">
            <div className="wizus_logo">
              <img src="/common/imgs/brand/nnpm_logo.png" alt="자연과사람들이 만든" />
            </div>
            <p className="f30 fw500 lh140 mt20">
              “Made by Nature and People” is
              <br />
              a brand born from the harmony between
              <br />
              the wholesome gifts of nature
              <br />
              and the honest touch of people.
            </p>
          </div>

          {/* 20250929 수정 */}
          <div className="project-section-2__wrapper">
            <div className="project-section-2__item project-panel">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-section-2__content">
                    <p className="f40 fw600 grayn1 f_pp lh130">What is Made by NNP?</p>
                    <p className="f20 fw400 grayn1 mt40 lh150">
                      From the hands of farmers to our trusted production facilities and stringent quality control,
                      every step in the Made by NNP journey contains the sincerity of people and the natural order of
                      the earth.
                    </p>
                    <p className="f20 fw400 grayn1 mt40 lh150">
                      “Nature as it is, People as we are.”
                      <br className="wView" />
                      That is the promise we keep.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="project-section-2__thumb">
                    <img src="/common/imgs/brand/nnpm06.jpg" alt="자연과사람들이만든" />
                  </div>
                </div>
              </div>
            </div>

            {/* 위져스레몬 */}
            <div className="project-section-2__item project-panel">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-section-2__content">
                    <p className="f40 fw600 grayn1 f_pp lh130 mt20">What is Made by NNP?</p>
                    <p className="f20 fw400 grayn1 mt30 lh150">Freshly Picked, Just as Nature Intended</p>

                    <div className="wizus_icon mt40">
                      <ul>
                        <li>
                          <img src="/common/imgs/brand/nnpm_ico01.jpg" alt="제주 감귤 음료" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">Jeju Mandarin Drink</p>
                          <p className="f16 fw400 grayn3">
                            A bright, refreshing mandarin drink made with the rich, sweet-tart flavor of Jeju citrus.
                          </p>
                        </li>
                      </ul>

                      <ul>
                        <li>
                          <img src="/common/imgs/brand/nnpm_ico02.jpg" alt="사과 음료" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">Apple Drink</p>
                          <p className="f16 fw400 grayn3">
                            A sweet and crisp apple drink capturing the fresh aroma and full taste of ripe apples.
                          </p>
                        </li>
                      </ul>

                      <ul>
                        <li>
                          <img src="/common/imgs/brand/nnpm_ico03.jpg" alt="포도 음료" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">Grape Drink</p>
                          <p className="f16 fw400 grayn3">
                            A deep, full-bodied grape drink bursting with the natural flavor and aroma of real grape
                            juice.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="project-section-2__thumb">
                    <img src="/common/imgs/brand/nnpm05.jpg" alt="NNP 과일 음료" />
                  </div>
                </div>
              </div>
            </div>
            {/* //위져스레몬 */}
          </div>
        </div>

        <div className="project-panel-area" />
      </section>

      <section>
        <div className="contant1160 mb200">
          <div className="row">
            <div className="col-lg-12">
              <p className="f45 fw500 grayn1 lh130 center">
                <span className="fw600">A Sip from Nature</span>
                <br />
                Introducing the Nature &amp; People brand family.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt100 mt100m">
              <div className="award-section__wrap brand_wrap">
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
                            As the name suggests, ‘Bang Bang Gok Gok’ collects hidden traditional flavors from across
                            Korea and shares them with modern consumers.
                          </h4>
                        </div>
                      </div>

                      <div className="award-section__link">
                        <span>
                          <i className="fa-regular fa-arrow-right" />
                        </span>
                      </div>
                    </div>
                  </a>
                  <div className="rr-hover-reveal-bg" data-background="/common/imgs/brand/nnpmv03.png" />
                </div>

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
                            WITH ME, WITH US, WIZUS! A specialized health and nutrition beverage brand.
                          </h4>
                        </div>
                      </div>

                      <div className="award-section__link">
                        <span>
                          <i className="fa-regular fa-arrow-right" />
                        </span>
                      </div>
                    </div>
                  </a>
                  <div className="rr-hover-reveal-bg" data-background="/common/imgs/brand/nnpmv02.png" />
                </div>

                <div className="award-section__item item-3 p-relative rr-hover-reveal-item active">
                  <a href="/brand/pb">
                    <div className="award-section__inner-item d-flex justify-content-between align-items-center">
                      <div className="award-section__content d-flex align-items-center">
                        <div className="award-section__year">
                          <span>2020</span>
                        </div>
                        <div className="award-section__title-box">
                          <h3 className="award-section__title fw500 lh130">Made by Nature &amp; People</h3>
                          <h4 className="award-section__subtitle fw400 wView">Fruit Beverage Series</h4>
                        </div>
                      </div>

                      <div className="award-section__link">
                        <span>
                          <i className="fa-regular fa-arrow-right" />
                        </span>
                      </div>
                    </div>
                  </a>
                  <div className="rr-hover-reveal-bg brand_over03" data-background="/common/imgs/brand/nnpmv01.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PBEN;
