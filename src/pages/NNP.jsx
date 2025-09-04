import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/common/Header";

const NNP = () => {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    // 마운트 시 회전 시작
    setRotate(true);
  }, []);
  return (
    <>
      <Header></Header>
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
                    <div className="banner__content">
                      <h1 className="rr-title-animation f_pp ttf grayn1 fw800">
                        {" "}
                        <span>You are the star,</span>
                        <span className="arrow">
                          <img
                            id="rotating-arrow"
                            className={rotate ? "rotate" : ""}
                            src="common/imgs/shapes/main_onstop.png"
                            alt="arrow"
                          />
                        </span>
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
                              <source src="common/imgs/video/1115035_Broadcast_Man_1280x720.mp4" type="video/mp4" />
                            </video>
                          </a>
                          <span className="solutions rr-title-animation f_pp fw800">We set the stage.</span>
                        </span>
                        <br />
                        <span className="brand rr-title-animation f_pp italic">Nature & People</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="contant1310">
              <div className="row">
                <div className="col-lg-7">
                  <p className="f60 fw600 grayn1 lh120">
                    보이지 않지만,
                    <br />
                    매일 당신 곁에 함께하는
                    <br />
                    음료 회사
                  </p>
                  <p className="gray02 f45 fw500 mt50">Our Product</p>
                </div>
                <div className="col-lg-5">
                  <p className="f22 fw400 grayn1 lh170 mt100">
                    스포츠음료, 두유, 단백질 음료, 균형영양식 등<br />
                    익숙한 음료 속에는 자연과사람들의 정성이 담겨 있습니다.
                    <br />
                    출근길, 운동 후, 하루의 식사까지
                    <br />
                    당신의 일상 속 건강한 순간을 위해
                    <br />
                    우리는 오늘도 조용히, 정직하게 음료를 만들어 갑니다.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-3 mt100 wow  bounceInLeft" data-wow-delay="0.5s">
                  {" "}
                  <img className="mt100" src="common/imgs/common/main_op01.jpg" alt="요리육수전골" />{" "}
                </div>
                <div className="col-lg-5 mt100 wow  bounceInUp" data-wow-delay="1s">
                  {" "}
                  <img className="" src="common/imgs/common/main_op02.jpg" alt="캔음료" />{" "}
                </div>
                <div className="col-lg-4 mt100 wow  bounceInRight" data-wow-delay="1.5s">
                  {" "}
                  <img className="mt30" src="common/imgs/common/main_op03.png" alt="프로틴밀, 식혜" />{" "}
                </div>
              </div>
            </section>
            <section className="experience__area experience-section mt100">
              <div className="container">
                <div className="row align-items-center experience__border">
                  <div className="col-xl-4 col-lg-4">
                    <div className="experience__big__text hero">
                      <p className="fw600 f60 lh120 grayn1 mb30 mt70m">
                        신뢰를 담는 +<br />
                        생산용기 시스템
                      </p>
                      <span className="_split_text">Equipment</span>
                      <br />
                      <button type="submit" className="nnp-btn rr-btn mt100">
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
                        <h3 className="experience-title">멸균팩 제품</h3>
                        <div className="experience-thumb return" style={{ position: "relative" }}>
                          <img className="img100" src="common/imgs/common/main_pack.jpg" alt="image not found" />
                        </div>
                      </div>

                      <div className="experience__item">
                        <h3 className="experience-title">캔 제품</h3>
                        <div className="experience-thumb return">
                          <a href="#">
                            <img src="common/imgs/common/main_can.jpg" alt="image not found" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
            <section className="contant1100">
              <div className="row">
                <div className="col-lg-8">
                  <p className="f70 fw600 grayn1 lh120">맞춤 상담</p>
                  <p className="f70 fw600 grayn1 lh120 main_cs">
                    <img className="" src="common/imgs/common/main_cs.png" style={{ paddingBottom: "30px" }} />{" "}
                    요청해보세요
                  </p>
                  <p className="f80 fw900 grayn1 italic f_pp lh100">Custom product.</p>
                </div>
                <div className="col-lg-4">
                  <p className="f22 fw400 grayn1 lh170 mt100">
                    복잡한 상담은 이제 그만!
                    <br />
                    원하시는 조건을 선택해주시면
                    <br />
                    담당자가 직접 확인 후<br />
                    맞춤 상담을 도와드립니다.
                  </p>
                </div>
              </div>
            </section>
            <section className="contant1100 pb100 csBox mb100 mt100">
              <div className="section">
                <p className="f22 fw400">상담 유형</p>
                <div className="radio-group mt20">
                  <div className="radio-button oembutton">OEM</div>
                  <div className="radio-button oembutton">ODM</div>
                  <div className="radio-button oembutton">수출 문의</div>
                  <div className="radio-button oembutton">기타</div>
                </div>
              </div>

              <div className="section">
                <p className="f22 fw400 mt50">용기 유형</p>
                <div className="radio-group mt20">
                  <div className="radio-button green iconBG09">
                    <span className="sig120"></span>
                    <br />
                    SIG
                    <br />
                    120ml
                  </div>
                  <div className="radio-button green iconBG10">
                    <span className="sig150"></span>
                    <br />
                    SIG
                    <br />
                    150ml
                  </div>
                  <div className="radio-button green">
                    <span className="tetra200"></span>
                    <br />
                    Tetra Pak
                    <br />
                    200ml
                  </div>
                  <div className="radio-button green iconBG02">
                    <span className="sig200"></span>
                    <br />
                    SIG
                    <br />
                    200ml
                  </div>
                  <div className="radio-button green iconBG03">
                    <span className="tetra1000"></span>
                    <br />
                    Tetra Pak
                    <br />
                    1000ml
                  </div>
                  <div className="radio-button green iconBG04">
                    <span className="tetra200Com"></span>
                    <br />
                    Tetra Pak 200ml
                    <br />
                    Compack Flex
                  </div>
                  <div className="radio-button green iconBG05">
                    <span className="tetra250Com"></span>
                    <br />
                    Tetra Pak 250ml
                    <br />
                    Compack Flex
                  </div>
                  <div className="radio-button green iconBG06">
                    <span className="can175"></span>
                    <br />
                    Can
                    <br />
                    175ml
                  </div>
                  <div className="radio-button green iconBG07">
                    <span className="can200"></span>
                    <br />
                    Can
                    <br />
                    200ml
                  </div>
                  <div className="radio-button green iconBG07">
                    <span className="can250"></span>
                    <br />
                    Can
                    <br />
                    250ml
                  </div>
                  <div className="radio-button green iconBG08">
                    <span className="can238"></span>
                    <br />
                    Can
                    <br />
                    238ml
                  </div>
                  <div className="radio-button green iconBG08">
                    <span className="can340"></span>
                    <br />
                    Can
                    <br />
                    340ml
                  </div>
                </div>
              </div>

              <div id="moreSection">
                <div className="section">
                  <p className="f22 fw400 mt50">발주량</p>
                  <div className="radio-group mt20">
                    <div className="radio-button">200,000 이상 *MOQ</div>
                    <div className="radio-button">500,000 이상</div>
                    <div className="radio-button">1,000,000 이상</div>
                  </div>
                </div>

                <div className="section">
                  <p className="f22 fw400 mt50">레시피</p>
                  <div className="radio-group mt20">
                    <div className="radio-button green">있음</div>
                    <div className="radio-button green">없음</div>
                  </div>
                </div>

                <div className="section">
                  <p className="f22 fw400 mt50">상담 내용</p>
                  <textarea className="mt20 order_textarea" placeholder="문의사항에 대한 내용을 작성해 주세요." />
                </div>

                <div className="section">
                  <p className="f22 fw400 mt50">업체명</p>
                  <input
                    className="mt20 order_input"
                    type="text"
                    style={{ width: "100%", padding: "8px" }}
                    placeholder="ex. (주)자연과사람들 영업부"
                  />
                </div>

                <div className="section">
                  <p className="f22 fw400 mt50">연락처</p>
                  <input
                    className="mt20 order_input"
                    type="text"
                    style={{ width: "100%", padding: "8px" }}
                    placeholder="ex. 02-123-4567"
                  />
                </div>

                <div className="section">
                  <p className="f22 fw400 mt50">이메일</p>
                  <input
                    className="mt20 order_input"
                    type="email"
                    style={{ width: "100%", padding: "8px" }}
                    placeholder="ex. support@innp.co.kr"
                  />
                </div>

                <center>
                  <button type="button" className="nnp-btn rr-btn mt50">
                    <span>
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
                    닫기
                  </button>{" "}
                  &nbsp;&nbsp;
                  <button type="submit" className="nnp-btn rr-btn mt50">
                    <span>
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
                    보내기
                  </button>
                </center>
              </div>

              <center>
                <button type="button" className="nnp-btn rr-btn mt50">
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                  More
                </button>
              </center>
            </section>

            <section
              className="project-section__area tp-btn-trigger-2 project-section body-bg section-space-bottom-160 section-space-top-110"
              style={{ border: "1px solid #e7e7e7" }}>
              <div className="container">
                <div className="section__title-wrapper-2 text-center">
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

                <div className="row">
                  <div className="col-md-6">
                    <div className="project-section__item margin-bottom margin-right">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">01</span>
                        <h3 className="project-section__title _split_text">
                          <a href="project-details.html">두유액 생산</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
                        <img src="common/imgs/main/main_p01.jpg" alt="유리잔에 두유액이 따르는 모습" />
                      </div>
                      <div className="project-section__btn">
                        <a href="project-details.html" className="title-btn rr-btn">
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
                          <a href="project-details.html">균형영양식</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
                        <img src="common/imgs/main/main_p03.jpg" alt="유리잔에 두유액이 따르는 모습" />
                      </div>
                      <div className="project-section__btn">
                        <a href="project-details.html" className="title-btn rr-btn">
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                          More Details
                        </a>
                      </div>
                    </div>

                    <div className="project-section__item margin-right">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">05</span>
                        <h3 className="project-section__title _split_text">
                          <a href="project-details.html">식혜</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
                        <img src="common/imgs/main/main_p05.jpg" alt="도자기 잔에 잣이 띄워져 있는 식혜" />
                      </div>
                      <div className="project-section__btn">
                        <a href="project-details.html" className="title-btn rr-btn">
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                          More Details
                        </a>
                      </div>
                    </div>

                    <div className="project-section__content margin-top margin-left">
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
                          href="#"
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
                            <br />
                            all Service
                          </span>
                          <i className="tp-btn-circle-dot"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="project-section__item margin-top margin-left">
                      <div className="project-section__title__wrap hero">
                        <span className="project-section__number">02</span>
                        <h3 className="project-section__title _split_text">
                          <a href="project-details.html">단백질</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
                        <img src="common/imgs/main/main_p02.jpg" alt="단배질팩" />
                      </div>
                      <div className="project-section__btn">
                        <a href="project-details.html" className="title-btn rr-btn">
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
                          <a href="project-details.html">파티클</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
                        <img src="common/imgs/main/main_p04.jpg" alt="유리잔에 파티클이 있는 모습" />
                      </div>
                      <div className="project-section__btn">
                        <a href="project-details.html" className="title-btn rr-btn">
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
                          <a href="project-details.html">육수</a>
                        </h3>
                      </div>
                      <div className="project-section__thumb">
                        <img src="common/imgs/main/main_p06.jpg" alt="육수" />
                      </div>
                      <div className="project-section__btn">
                        <a href="project-details.html" className="title-btn rr-btn">
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
            <div className="portfolio__big mb-30 body-bg overflow-hidden section-space-bottom">
              <div className="portfolio__big-inner overflow-hidden p-relative">
                <img src="common/imgs/main/mainBigbanner.jpg" alt="img not found" />
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
          </main>
        </div>
      </div>
    </>
  );
};

export default NNP;
