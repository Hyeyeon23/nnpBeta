import React, { useEffect } from "react";

import Header from "../components/common/Header";
import HeaderEN from "../components/common/HeaderEN";
import Footer from "../components/common/footer";
import FooterReactEN from "../components/common/FooterReactEN";
import CustomInquiry from "../components/customer/CustomInquiry";

import ModalMain from "../components/modal/ModalMain";
const NNPEN = () => {
  useEffect(() => {
    /**
     * 동영상 로드후 재생 보장
     */
    const timer = setTimeout(() => {
      const video = document.querySelector(".title-video");
      if (video) {
        video.muted = true; // 정책 충족
        video.play().catch((err) => console.error("Autoplay error:", err));
      }
    }, 1000); // DOM 다 그려지고 ScrollTrigger 적용된 후

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <HeaderEN></HeaderEN>
      <div id="smooth-wrapper" className="body-bg">
        <div id="smooth-content">
          <main>
            <section className="banner__area  p-relative overflow-hidden z-1">
              <div className="banner__line-shape">
                <div className="project-section__border__shape"></div>
                <div className="project-section__border__shape"></div>
                <div className="project-section__border__shape"></div>
                <div className="project-section__border__shape"></div>
              </div>
              <div className="container custom-container">
                <div className="row">
                  <div className="col-12">
                    <div className="banner__content wView">
                      <h1 className="rr-title-animation f_pp ttf grayn1 fw800">
                        <span className="f_pp">You are the star,</span>
                        <span className="arrow inine-block">
                          <img src="/common/imgs/shapes/main_onstop.png" alt="arrow" className="rotate" />
                        </span>
                        <span className="video">
                          <a className="video-popup" style={{ paddingRight: "15px" }}>
                            <video
                              className="title-video"
                              data-delay="1.9"
                              data-offset="100"
                              data-direction="right"
                              loop
                              muted
                              autoPlay
                              playsInline>
                              <source src="/common/imgs/video/1115035_Broadcast_Man_1280x720.mp4" type="video/mp4" />
                            </video>
                          </a>
                          <span className="solutions rr-title-animation f_pp fw800">We set the stage.</span>
                        </span>
                        <br />
                        <span className="brand rr-title-animation f_pp italic">Nature & People</span>
                      </h1>
                    </div>

                    <div className="banner__content mView mb50">
                      <h1 className="f_pp ttf grayn1 fw800">
                        <span className="f_pp">You are the star,</span>
                        <span className="arrow wView inine-block">
                          <img src="/common/imgs/shapes/main_onstop.png" alt="arrow" className="rotate" />
                        </span>
                        <p>
                          <span className="solutions f_pp fw800">We set the stage.</span>
                        </p>
                        <span className="video">
                          <a className="video-popup">
                            <video
                              className="title-video"
                              data-delay="1.9"
                              data-offset="100"
                              data-direction="right"
                              loop
                              muted
                              autoPlay
                              playsInline>
                              <source src="/common/imgs/video/1115035_Broadcast_Man_720x402.mp4" type="video/mp4" />
                            </video>
                          </a>
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="contant1310">
              <div className="row">
                <div className="col-lg-7">
                  <p className="f40 fw600 grayn1 lh120">
                    Unseen,
                    <br />
                    yet always by your side
                    <br />
                    a beverage company woven
                    <br />
                    into your everyday life.
                  </p>
                  <p className="gray02 f45 fw500 mt50">Our Product</p>
                </div>
                <div className="col-lg-5">
                  <p className="f22 fw400 grayn1 lh170 mt100">
                    Sports drinks, soy milk, protein beverages, balanced nutrition drinks, and more.
                    <br />
                    Every familiar drink carries the care of nature and the dedication of the people behind it.
                  </p>
                </div>
              </div>
              {/* <!-- 2025-09-29 div추가, mView클래스추가 --> */}
              <div className="wView">
                <div className="row">
                  <div className="col-lg-3 mt100 wow  bounceInLeft" data-wow-delay="0.5s">
                    {" "}
                    <img className="mt100" src="/common/imgs/common/main_op01.png" alt="요리육수전골" />{" "}
                  </div>
                  <div className="col-lg-5 mt100 wow  bounceInUp" data-wow-delay="1s">
                    {" "}
                    <img className="" src="/common/imgs/common/main_op02.jpg" alt="캔음료" />{" "}
                  </div>
                  <div className="col-lg-4 mt100 wow  bounceInRight" data-wow-delay="1.5s">
                    {" "}
                    <img className="mt30" src="/common/imgs/common/main_op03.png" alt="프로틴밀, 식혜" />{" "}
                  </div>
                </div>
              </div>
              <div class="row mView">
                <div class="col-lg-12">
                  <img
                    class="mt100 img100"
                    src="/common/imgs/common/main_op01_m.png"
                    alt="자연과사람들에서 생산하는 요리육수, 캔음료, 프로틴밀, 식혜"
                  />{" "}
                </div>
              </div>
            </section>
            {/* 2025-09-23 멸균오버, 캔오버, 버튼링크 */}
            <section className="experience__area experience-section mt100">
              <div className="container">
                <div className="row align-items-center experience__border">
                  <div className="col-xl-4 col-lg-4">
                    <div className="experience__big__text hero">
                      <p className="fw600 f60 lh120 grayn1 mb30 mt70m">
                        A Packaging System <br />
                        Built on Trust
                      </p>
                      <span className="_split_text">Equipment</span>
                      <br />
                      <button
                        type="submit"
                        className="nnp-btn rr-btn mt100"
                        onClick={() => (window.location.href = "/business/containers")}>
                        <span>
                          <i className="fa-regular fa-arrow-right"></i>
                        </span>
                        View Detail
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8">
                    <div className="experience__wrapper">
                      <div className="experience__item">
                        <h3 className="experience-title">Aseptic Pack Products</h3>
                        <div className="experience-thumb return" style={{ position: "relative" }}>
                          <a href="/business/containers">
                            <img
                              className="img100"
                              src="/common/imgs/common/main_pack.jpg"
                              alt="image not found"
                              onMouseOver={(e) => (e.currentTarget.src = "/common/imgs/common/main_pack_06.jpg")}
                              onMouseOut={(e) => (e.currentTarget.src = "/common/imgs/common/main_pack.jpg")}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="experience__item">
                        <h3 className="experience-title">Canned Products</h3>
                        <div className="experience-thumb return">
                          <a href="/business/containers">
                            <img
                              className="img100"
                              src="/common/imgs/common/main_can.jpg"
                              alt="image not found"
                              onMouseOver={(e) => (e.currentTarget.src = "/common/imgs/common/main_can_05.jpg")}
                              onMouseOut={(e) => (e.currentTarget.src = "/common/imgs/common/main_can.jpg")}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* //2025-09-23 멸균오버, 캔오버, 버튼링크 */}

            <section className="heading-slide  section-space-top-140 heading-section-pb-160">
              <div className="swiper heading-slide__active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <h2 className="heading-slide__title f_pp">A PACKAGING SYSTEM</h2>
                  </div>
                  <div className="swiper-slide">
                    <h2 className="heading-slide__title f_pp">&nbsp;&nbsp; KOREA No.1 &nbsp;&nbsp;</h2>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="pb100 bg_graph services-section__area services-section section-space"
              style={{ borderTop: "1px solid #f3f3f3", overflowX: "hidden" }}>
              {/* 2025-09-26 스타일수정 */}
              <div className="section contant1100">
                <p className="f64 fw600 grayn1 lh120">Create in 3D</p>
                <p className="gray02 f45 fw500 mt50">Pack3D</p>

                <div className="row align-items-center flex-lg-row mt50 idea">
                  <div className="col-md-5">
                    <div className="services__content__wrapper">
                      <div className="tab-content" id="v-pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="v-pills-home"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                          tabindex="0">
                          <img src="/common/imgs/main/idea01.png" alt="도면 다운로드" />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-profile"
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab"
                          tabindex="0">
                          <img src="/common/imgs/main/idea02.png" alt="도면 다운로드" />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-messages"
                          role="tabpanel"
                          aria-labelledby="v-pills-messages-tab"
                          tabindex="0">
                          <img src="/common/imgs/main/idea03.png" alt="도면 다운로드" />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-settings"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                          tabindex="0">
                          <img src="/common/imgs/main/idea04.png" alt="도면 다운로드" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-7">
                    <div className="services__tab__wrapper">
                      <div className="nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div
                          className="nav-link active"
                          id="v-pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-home"
                          role="tab"
                          aria-controls="v-pills-home"
                          aria-selected="true">
                          <div className="services__tab__title f27 fw500 grayn1">
                            <b>01 Download the template</b>
                            <br />
                            <p className="f20 fw400 grayn1 mt20">
                              Download the template file that matches your packaging type.
                            </p>
                          </div>
                        </div>

                        <div
                          className="nav-link"
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-profile"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false">
                          <div className="services__tab__title f27 fw500 grayn1 ">
                            <b>02 Design your package</b>
                            <br />
                            <p className="f20 fw400 grayn1 mt20">
                              Create your own package design with your unique ideas.
                            </p>
                          </div>
                        </div>

                        <div
                          className="nav-link"
                          id="v-pills-messages-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-messages"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false">
                          <div className="services__tab__title f27 fw500 grayn1 ">
                            <b>03 Apply your 3D Design</b>
                            <br />
                            <p className="f20 fw400 grayn1 mt20">
                              Apply your design to a 3D mock-up to see how it comes to life.
                            </p>
                          </div>
                        </div>

                        <div
                          className="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false">
                          <div className="services__tab__title f27 fw500 grayn1 ">
                            <b>04 Inquiry</b>
                            <br />
                            <p className="f20 fw400 grayn1 mt20">
                              Contact us for a customized consultation based on your 3D package mock-up.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- 2025-09-29 div wView 추가 --> */}
                <div className="wView">
                  <div className="row mt50 idea_thumb">
                    <div className="col-md-3">
                      <img
                        src="/common/imgs/main/idea_thumb01.jpg"
                        alt="image not found"
                        onMouseOver={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb01_on.jpg")}
                        onMouseOut={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb01.jpg")}
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="/common/imgs/main/idea_thumb02.jpg"
                        alt="image not found"
                        onMouseOver={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb02_on.jpg")}
                        onMouseOut={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb02.jpg")}
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="/common/imgs/main/idea_thumb03.jpg"
                        alt="image not found"
                        onMouseOver={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb03_on.jpg")}
                        onMouseOut={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb03.jpg")}
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="/common/imgs/main/idea_thumb04.jpg"
                        alt="image not found"
                        onMouseOver={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb04_on.jpg")}
                        onMouseOut={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb04.jpg")}
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="/common/imgs/main/idea_thumb05.jpg"
                        alt="image not found"
                        onMouseOver={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb05_on.jpg")}
                        onMouseOut={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb05.jpg")}
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="/common/imgs/main/idea_thumb06.jpg"
                        alt="image not found"
                        onMouseOver={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb06_on.jpg")}
                        onMouseOut={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb06.jpg")}
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="/common/imgs/main/idea_thumb07.jpg"
                        alt="image not found"
                        onMouseOver={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb07_on.jpg")}
                        onMouseOut={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb07.jpg")}
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="/common/imgs/main/idea_thumb08.jpg"
                        alt="image not found"
                        onMouseOver={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb08_on.jpg")}
                        onMouseOut={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb08.jpg")}
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="/common/imgs/main/idea_thumb09.jpg"
                        alt="image not found"
                        onMouseOver={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb09_on.jpg")}
                        onMouseOut={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb09.jpg")}
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="/common/imgs/main/idea_thumb10.jpg"
                        alt="image not found"
                        onMouseOver={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb10_on.jpg")}
                        onMouseOut={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb10.jpg")}
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="/common/imgs/main/idea_thumb11.jpg"
                        alt="image not found"
                        onMouseOver={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb11_on.jpg")}
                        onMouseOut={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb11.jpg")}
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="/common/imgs/main/idea_thumb12.jpg"
                        alt="image not found"
                        onMouseOver={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb12_on.jpg")}
                        onMouseOut={(e) => (e.currentTarget.src = "/common/imgs/main/idea_thumb12.jpg")}
                      />
                    </div>

                    <div className="col-md-12 center">
                      <div className="project-section__content mt50">
                        <div className="tp-portfolio-more tp-hover-btn-wrapper tp-btn-bounce-2">
                          <a
                            href="/dev"
                            className="tp-hover-btn tp-hover-btn-item tp-btn-circle-2 d-flex align-items-center justify-content-center flex-column">
                            <span className="tp-btn-circle-text-2 text-left">
                              3D{" "}
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M4.24268 13.3843L13.0108 4.61615"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M4.52539 4.61621H13.0107V13.1015"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <br /> 시작하기
                            </span>
                            <i className="tp-btn-circle-dot"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="project-section__area tp-btn-trigger-2 project-section body-bg section-space-bottom-160"
              style={{ border: "1px solid #e7e7e7", marginTop: "-6px" }}>
              {/* 2025-09-23 스타일 추가 */}
              <div className="container">
                <div className="section__title-wrapper-2 text-center mt80m GreatDrink">
                  {/* 2025-09-26 GreatDrink 클래스 추가 */}
                  <div className="section__title-wrapper-2-title">
                    <div className="fw700 f_pp f80">Behind Every Great Drink,</div>
                    <div className="fw200 f_pp f60 italic mt0 nnptitle">There’s a Thoughtful Partner.</div>
                  </div>
                </div>
                <div className="project-section__shape__wrap">
                  <div className="project-section__border__shape"></div>
                  <div className="project-section__border__shape"></div>
                  <div className="project-section__border__shape"></div>
                  <div className="project-section__border__shape"></div>
                </div>
                <div className="row main_pro">
                  {/* 2025-09-26 main_pro 클래스 추가  */}
                  <div className="col-md-6">
                    <div className="project-section__item margin-bottom margin-right">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">01</span>
                        <h3 className="project-section__title _split_text">
                          <a href="/business/product/soy">SOY BEVERAGE BASE</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
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

                    <div className="project-section__item margin-bottom margin-right">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">05</span>
                        <h3 className="project-section__title _split_text">
                          <a href="/business/product/sikhye">SIKHYE</a>
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

                    <div className="project-section__item margin-right">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">07</span>
                        <h3 className="project-section__title _split_text">
                          <a href="/business/product/sterilized">STERLIZED MILK</a>
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

                    <div className="project-section__content margin-top margin-left">
                      <p
                        className="project-section__dec rr_title_anim f22 fw400 lh160"
                        style={{ perspective: "400px" }}>
                        <span
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            transformOrigin: "50% 50%",
                            transform: "translate3d(0px, 0px, 0px)",
                            opacity: 1,
                          }}>
                          Nature &amp; People is a trusted beverage manufacturer with broad production capabilities,
                          offering products ranging from particle drinks to soy beverages and Sikhye (Korean traditional
                          rice drink), supported by advanced technology and reliable expertise.
                        </span>
                      </p>

                      <div className="tp-portfolio-more tp-hover-btn-wrapper tp-btn-bounce-2">
                        <a
                          href="/business/products"
                          className="tp-hover-btn tp-hover-btn-item tp-btn-circle-2 d-flex align-items-center justify-content-center flex-column">
                          <span className="tp-btn-circle-text-2">
                            See{" "}
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M4.24268 13.3843L13.0108 4.61615"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4.52539 4.61621H13.0107V13.1015"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <br /> all Service
                          </span>
                          <i className="tp-btn-circle-dot"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- 2025-09-29 mt50m 제거 --> */}
                  <div className="col-md-6">
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

                    <div className="project-section__item margin-top margin-left">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">04</span>
                        <h3 className="project-section__title _split_text">
                          <a href="/business/product/particle">PARTICLE DRINKS</a>
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

                    <div className="project-section__item margin-top margin-left">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">06</span>
                        <h3 className="project-section__title _split_text">
                          <a href="/business/product/sauce">SAUCE</a>
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

                    <div className="project-section__item margin-top margin-left">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">08</span>
                        <h3 className="project-section__title _split_text">
                          <a href="/business/product/juice">JUICE</a>
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

                    <div className="project-section__item margin-top margin-left">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">09</span>
                        <h3 className="project-section__title _split_text">
                          <a href="/business/product/coffee">COFFEE</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
                        <img src="/common/imgs/main/main_p09.jpg" alt="커피" />
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
                    {/* 2025-09-29 추가 */}
                    <div className="project-section__content margin-top margin-left mView">
                      <p className="project-section__dec rr_title_anim f22 fw400 lh160">
                        자연과사람들은 파티클 음료부터 두유,
                        <br />
                        식혜에 이르기까지 다양한 음료를 생산하며,
                        <br />
                        폭넓은 제조 역량과 기술력을 갖춘 신뢰받는 <br />
                        식음료 제조 파트너입니다.
                      </p>

                      <div className="tp-portfolio-more tp-hover-btn-wrapper tp-btn-bounce-2">
                        <a
                          href="/business/products"
                          className="tp-hover-btn tp-hover-btn-item tp-btn-circle-2 d-flex align-items-center justify-content-center flex-column">
                          <span className="tp-btn-circle-text-2">
                            See{" "}
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M4.24268 13.3843L13.0108 4.61615"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4.52539 4.61621H13.0107V13.1015"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <br /> all Service
                          </span>
                          <i className="tp-btn-circle-dot"></i>
                        </a>
                      </div>
                    </div>
                    {/* //2025-09-29 추가 */}
                  </div>
                </div>
              </div>
            </section>

            <div className="portfolio__big mb-30 body-bg overflow-hidden section-space-bottom">
              <div className="portfolio__big-inner overflow-hidden p-relative">
                <img src="/common/imgs/main/mainBigbanner.jpg" alt="img not found" />
                <div className="portfolio__big-inner-box">
                  <b className="portfolio__big-inner-box-item white fff">OEM생산</b>
                </div>

                <div className="tp-portfolio-area p-relative z-index-1 overflow-hidden">
                  <div className="tp-portfolio-top-text tp-portfolio-bg-text d-flex align-items-center">
                    <p className="grayn1 f_pp fw800 italic">Good partners, Great possibilities</p>
                    <div className="tp-portfolio-top-text-border">
                      <a className="tp-portfolio-top-text-border-icon" href="service-details.html">
                        <i className="fa-regular fa-arrow-right"></i>
                      </a>
                    </div>
                    <p className="grayn1 f_pp fw800 italic">Good partners, Great possibilities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="brand-section__area brand-section bg-white mt100">
              <div className="container">
                <div className="swiper sk-logo-slide__active">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_01.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_02.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_03.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_04.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_05.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_06.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_07.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_08.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_09.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_10.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_12.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_13.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_14.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_15.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_16.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_17.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_18.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_19.jpg" alt="코카콜라" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-section__logo">
                        <img src="/common/imgs/main/client_20.jpg" alt="코카콜라" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="team-section__area team-section overflow-hidden body-bg section-space-top-140 section-space-bottom-160 fade-wrapper">
              <div className="team-section">
                <div className="container">
                  <div className="section-2__title-wrapper team-title hero">
                    <h2 className="f64 lh120 fw500 grayn01 _split_text">
                      Principles of Health,
                      <br />A Brand You Can Trust
                    </h2>
                    <a href="/brand/wizus/greenlemon" className="title-btn rr-btn btn-transparent">
                      <span>
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                      View Brand
                    </a>
                  </div>
                  <div className="team-section__wrapper">
                    <div className="team-section__border__shape team-section__border__shape-1"></div>
                    <div className="team-section__border__shape team-section__border__shape-2"></div>
                    <div className="team-section__border__shape team-section__border__shape-3"></div>
                    <div className="team-section__border__shape team-section__border__shape-4"></div>
                    <div className="team-section__border__shape team-section__border__shape-5"></div>
                    <div className="row mb-minus-30">
                      <div className="col-lg-4 col-md-6">
                        <div className="team-section__item fade-top mb-30">
                          <div className="team-section__thumb">
                            <img src="/common/imgs/main/main_brand01.jpg" alt="image not found" />
                          </div>
                          <div className="team-section__content">
                            <h3 className="team-section__title">
                              <a href="/brand/wizus/greenlemon">WIZUS</a>
                            </h3>
                            <p className="team-section__position">A delicious and enjoyable sports protein drink!</p>{" "}
                          </div>
                          <div className="team-section__social">
                            <a href="/brand/wizus/greenlemon">
                              <svg
                                width="25"
                                height="26"
                                viewBox="0 0 25 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M5.65625 19.6562L19.2327 6.0798"
                                  stroke="#fff"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                                <path
                                  d="M7.92188 6.08008L19.2356 6.08008L19.2356 17.3938"
                                  stroke="#fff"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="team-section__item fade-top mb-30">
                          <div className="team-section__thumb">
                            <img src="/common/imgs/main/main_brand02.jpg" alt="image not found" />
                          </div>
                          <div className="team-section__content">
                            <h3 className="team-section__title">
                              <a href="/brand/healthy/sikhye">Bangbang-Goggog Sikhye</a>
                            </h3>
                            <p className="team-section__position">
                              Less sweetness, more tradition — the authentic taste preserved.
                            </p>{" "}
                          </div>
                          <div className="team-section__social">
                            <a href="/brand/healthy/sikhye">
                              <svg
                                width="25"
                                height="26"
                                viewBox="0 0 25 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M5.65625 19.6562L19.2327 6.0798"
                                  stroke="#fff"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                                <path
                                  d="M7.92188 6.08008L19.2356 6.08008L19.2356 17.3938"
                                  stroke="#fff"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="team-section__item fade-top mb-30">
                          <div className="team-section__thumb">
                            <img src="/common/imgs/main/main_brand03.jpg" alt="image not found" />
                          </div>
                          <div className="team-section__content">
                            <h3 className="team-section__title">
                              <a href="/brand/pb">Made by Nature & People</a>
                            </h3>
                            <p className="team-section__position">
                              Try drinks filled with the rich flavor and aroma of fresh fruits.
                            </p>{" "}
                          </div>
                          <div className="team-section__social">
                            <a href="/brand/pb">
                              <svg
                                width="25"
                                height="26"
                                viewBox="0 0 25 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M5.65625 19.6562L19.2327 6.0798"
                                  stroke="#fff"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                                <path
                                  d="M7.92188 6.08008L19.2356 6.08008L19.2356 17.3938"
                                  stroke="#fff"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 맞춤상담 컴포넌트 */}
            <CustomInquiry></CustomInquiry>
            {/* FAQ배너 2025-09-23 */}
            <section>
              <div className="contant1160 mb200">
                <a href="/cs/contact">
                  <img
                    className="wView"
                    src="/common/imgs/main/bnr_faq.png"
                    alt="FAQ에서 못 찾으신 궁금증을 남겨주세요."
                  />
                  <img
                    className="mView"
                    src="/common/imgs/main/bnr_faq_mo.png"
                    alt="FAQ에서 못 찾으신 궁금증을 남겨주세요."
                  />
                </a>
              </div>
            </section>
            {/* //FAQ배너 2025-09-23 */}
          </main>
          <FooterReactEN></FooterReactEN>
        </div>
      </div>
      <ModalMain></ModalMain>
    </>
  );
};

export default NNPEN;
