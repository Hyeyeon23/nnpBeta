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
          </main>
        </div>
      </div>
    </>
  );
};

export default NNP;
