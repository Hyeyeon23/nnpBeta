import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import useProjectPanelPin from "../../../hooks/useProjectPanelPin";
import useHoverReveal from "../../../hooks/useHoverReveal";

gsap.registerPlugin(ScrollTrigger);
const WizusEN = () => {
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
                  <img src="/common/imgs/brand/wizus01.jpg" alt="위져스" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/common/imgs/brand/wizus02.jpg" alt="자연과사람들이만든" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/common/imgs/brand/wizus03.jpg" alt="방방곡곡" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={pageRef}
        className="project-section-2__area project-section-2  section-space-top-160 section-space-bottom-160 brandCard">
        <div className="container">
          <div className="section__title-wrapper section__title-wrapper-3 hero">
            <div className="wizus_logo">
              <img src="/common/imgs/brand/wizus_logo.png" alt="방방곡곡" />
            </div>
            <p className="f30 fw500 lh140 ">
              WITH ME, WITH US, WIZUS!
              <br />
              WIZUS is a specialized Health & Nutrition beverage brand.
            </p>
          </div>
          <div className="project-section-2__wrapper">
            <div className="project-section-2__item project-panel">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-section-2__content">
                    <p className="f40 fw600 grayn1 f_pp lh130">What is WIZUS?</p>
                    {/* 20250929 수정 */}
                    <p className="f20 fw400 grayn1 mt30 lh150">
                      Launched in 2023, WIZUS is the Health & Nutrition beverage brand of Nature & People. Backed by
                      years of OEM and ODM expertise, we apply our accumulated know-how to every step—from meticulous
                      nutritional formulation to in-house production.
                    </p>
                    {/* //20250929 수정 */}

                    <div className="mt80">
                      <img src="/common/imgs/brand/wizus10.png" alt="위저스 마크" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="project-section-2__thumb">
                    <img src="/common/imgs/brand/wizus05.jpg" alt="위져스 녹차와 레몬제품" />
                  </div>
                </div>
              </div>
            </div>
            <div className="project-section-2__item project-panel">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-section-2__content">
                    <p className="f23 f_pp fw_400 grayn3">flavor 01.</p>
                    <p className="f40 fw600 grayn1 f_pp lh130 mt20">
                      Lemon Iced Tea
                      <br />
                      Refreshing Lemon Iced Tea Flavor
                    </p>
                    {/* <!-- 20250929 수정--> */}
                    <p className="f20 fw400 grayn1 mt30 lh150">
                      The cool, crisp taste of iced tea in a clear, water-type protein drink— a light, refreshing way to
                      boost your daily protein intake.
                    </p>
                    {/* <!-- //20250929 수정--> */}
                    <div className="project-section-2__tag wizustag01">
                      <ul>
                        <li>#When You Crave Something Refreshing</li>
                        <li>#Light And Easy Enjoyment</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="project-section-2__thumb">
                    <img src="/common/imgs/brand/wizus06.jpg" alt="위져스 레몬제품" />
                  </div>
                </div>
              </div>
            </div>
            <div className="project-section-2__item project-panel">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-section-2__content">
                    <p className="f23 f_pp fw_400 grayn3">Is it really protein?</p>
                    <p className="f40 fw600 grayn1 f_pp lh130 mt20">
                      Lemon Iced Tea
                      <br />
                      Refreshing Lemon Iced Tea Flavor
                    </p>
                    <div className="wizus_icon mt40">
                      <ul>
                        <li>
                          <img src="/common/imgs/brand/wizus_ico01.png" alt="위져스 레몬제품" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">Refreshing Lemon Iced Tea Flavor</p>
                          <p className="f16 fw400 grayn3">
                            A clean lemon iced tea flavor — light, refreshing, and easy to enjoy like water.
                          </p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <img src="/common/imgs/brand/wizus_ico02.png" alt="위져스 레몬제품" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">18g of Protein</p>
                          <p className="f16 fw400 grayn3">
                            It's an easy way to get 20–30% of your daily recommended protein
                          </p>
                        </li>
                      </ul>
                      {/* 20250929 수정 */}
                      <ul>
                        <li>
                          <img src="/common/imgs/brand/wizus_ico03.png" alt="위져스 레몬제품" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">7 Essential Vitamins</p>
                          <p className="f16 fw400 grayn3">
                            Formulated with seven essential vitamins—including Vitamin C, Vitamin A, and Niacin—to
                            support daily wellness.
                          </p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <img src="/common/imgs/brand/wizus_ico04.png" alt="위져스 레몬제품" />
                        </li>
                        <li>
                          <p class="f20 fw500 grayn1">Light & Low-Calorie</p>
                          <p class="f16 fw400 grayn3">
                            Enjoy 18g of protein with only 80 calories, making it a guilt-free option for any time of
                            the day.
                          </p>
                        </li>
                      </ul>
                      {/* //20250929 수정 */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="project-section-2__thumb">
                    <img src="/common/imgs/brand/wizus07.jpg" alt="위져스 레몬제품" />
                  </div>
                </div>
              </div>
            </div>
            <div className="project-section-2__item project-panel">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-section-2__content">
                    <p className="f23 f_pp fw_400 grayn3">flavor 02.</p>
                    <p className="f40 fw600 grayn1 f_pp lh130 mt20">
                      Green Tea Latte
                      <br />
                      Sweet & Aromatic Green Tea Latte Flavor
                    </p>
                    <p className="f20 fw400 grayn1 mt30 lh150">
                      A smooth and aromatic green tea latte flavor that makes protein intake both enjoyable and
                      fulfilling{" "}
                    </p>
                    <div className="project-section-2__tag wizustag02">
                      <ul>
                        <li>#GreenTeaLatte</li>
                        <li>#ProteinBoost</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="project-section-2__thumb">
                    <img src="/common/imgs/brand/wizus08.jpg" alt="위져스 녹차제품" />
                  </div>
                </div>
              </div>
            </div>
            <div className="project-section-2__item project-panel">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-section-2__content">
                    <p className="f40 fw600 grayn1 f_pp lh130 mt20">
                      Green Tea Latte
                      <br />
                      Sweet & Aromatic Green Tea Latte Flavor
                    </p>
                    <p className="f20 fw400 grayn1 mt30 lh150">
                      A smooth and aromatic green tea latte flavor that makes protein intake both enjoyable and
                      fulfilling.
                    </p>
                    <div className="wizus_icon mt40">
                      <ul>
                        <li>
                          <img src="/common/imgs/brand/wizus_ico05.png" alt="위져스 녹차제품" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">Sweet & Aromatic Green Tea Latte Flavor</p>
                          <p className="f16 fw400 grayn3">
                            Enjoy the gentle aroma and sweet creaminess of a green tea latte—a comforting way to fuel up
                            with quality protein.
                          </p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <img src="/common/imgs/brand/wizus_ico06.png" alt="위져스 녹차제품" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">20g of Protein</p>
                          <p className="f16 fw400 grayn3">
                            Contains 20 grams of protein—about 20–30% of the recommended daily intake, making it a
                            convenient and filling choice.
                          </p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <img src="/common/imgs/brand/wizus_ico07.png" alt="위져스 녹차제품" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">7 Essential Vitamins</p>
                          <p className="f16 fw400 grayn3">
                            Formulated with seven essential vitamins—including Vitamin C, Vitamin A, and Niacin—to
                            support daily wellness.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="project-section-2__thumb">
                    <img src="/common/imgs/brand/wizus09.jpg" alt="위져스 녹차젲품" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-panel-area"></div>
      </section>

      <section>
        <div className="contant1160 mb200">
          <div className="row">
            <div className="col-lg-12">
              <p className="f45 fw500 grayn1 lh130 center">
                <span className="fw600">A Sip from Nature</span>
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
                  <a href="/brand/pb#!">
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
              {/* 20250929 수정 */}
              <p class="f20 lh140 grayn1">
                Nature & People offers a broad and authentic beverage experience through a diverse brand portfolio
                shaped by evolving lifestyles and consumer needs. As times change, so will we—continuously expanding our
                range of products to enrich every moment of your daily life.
              </p>
              {/* //20250929 수정 */}
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

export default WizusEN;
