import React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="footer heading-bg overflow-hidden p-relative z-1">
        <div className="container">
          <div className="footer-top">
            <div className="footer-top-footer-title hero">
              <p className="_split_text f_pp f80 lh110 white">
                You are the star,
                <br />
                We set the stage.
              </p>
              <p className="rr_title_anim lh200 f16 white">
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
          <div className="row footer__wrap p-relative">
            <div className="col-lg-4 col-md-6">
              <div className="footer__widget">
                <div className="footer__logo mb-20">
                  <a href="index.html">
                    <img src="common/imgs/logo/logo_nnp_white.png" alt="logo not found" />
                  </a>
                </div>
              </div>
            </div>

            {/* Business */}
            <div className="col-lg-2 col-md-3 col-sm-3">
              <div className="footer__widget footer__widget-2th-left">
                <div className="footer__widget-title mb-30 mb-md-10 mb-sm-10 mb-xs-10">
                  <p className="f18 fw400 white">Business</p>
                </div>
                <div className="footer__link">
                  <ul>
                    <li>
                      <a href="service.html">
                        <i className="fa-solid fa-period"></i>제품유형
                      </a>
                    </li>
                    <li>
                      <a href="service.html">
                        <i className="fa-solid fa-period"></i>용기유형
                      </a>
                    </li>
                    <li>
                      <a href="service.html">
                        <i className="fa-solid fa-period"></i>RnD
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Brand */}
            <div className="col-lg-2 col-md-3 col-sm-3">
              <div className="footer__widget footer__widget-3th-left">
                <div className="footer__widget-title mb-30 mb-md-10 mb-sm-10 mb-xs-10">
                  <p className="f18 fw400 white">Brand</p>
                </div>
                <div className="footer__link">
                  <ul>
                    <li>
                      <a href="about-us.html">
                        <i className="fa-solid fa-period"></i>WIZUS
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <i className="fa-solid fa-period"></i>자연담은
                      </a>
                    </li>
                    <li>
                      <a href="service-details.html">
                        <i className="fa-solid fa-period"></i>자연과사람들이만든
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CS */}
            <div className="col-lg-2 col-md-3 col-sm-3">
              <div className="footer__widget footer__widget-4th-left">
                <div className="footer__widget-title mb-35 mb-md-20 mb-sm-20 mb-xs-20">
                  <p className="f18 fw400 white">CS</p>
                </div>
                <div className="footer__link">
                  <ul>
                    <li>
                      <a href="about-us.html">
                        <i className="fa-solid fa-period"></i>자주 묻는 질문
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <i className="fa-solid fa-period"></i>1:1문의
                      </a>
                    </li>
                    <li>
                      <a href="service-details.html">
                        <i className="fa-solid fa-period"></i>고객의 소리
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 관계사 */}
            <div className="col-lg-2 col-md-3 col-sm-3">
              <div className="footer__widget footer__widget-4th-left">
                <div className="footer__widget-title mb-35 mb-md-20 mb-sm-20 mb-xs-20">
                  <p className="f18 fw400 white">관계사</p>
                </div>
                <div className="footer__link">
                  <ul>
                    <li>
                      <a href="about-us.html">
                        <i className="fa-solid fa-period"></i>정식품
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <i className="fa-solid fa-period"></i>오쎄
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <i className="fa-solid fa-period"></i>이데이몰
                      </a>
                    </li>
                    <li>
                      <a href="service-details.html">
                        <i className="fa-solid fa-period"></i>혜춘장학회
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom-wrapper">
          <div className="container">
            <div className="footer__bottom">
              <div className="footer__copyright">
                <p className="f14 fw400 grayn2">ⓒ 2025 Nature & People. All rights reserved.</p>
              </div>
              <div className="person">
                <ul>
                  <li>
                    <a href="#">이용약관</a>{" "}
                    <a href="#" className="fw600">
                      개인정보처리방침
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
