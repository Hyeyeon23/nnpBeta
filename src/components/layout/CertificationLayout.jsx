import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/footer";
import FooterReact from "../common/FooterReact";
import FooterReactEN from "../common/FooterReactEN";

import HeaderEN from "../common/HeaderEN";
const CertificationLayout = ({ lang, setLang }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // 스크롤 관련 로직을 위한 별도의 useEffect
  useEffect(() => {
    // DOM이 완전히 로드된 후 실행되도록 setTimeout 사용
    const timer = setTimeout(() => {
      const roundNav = document.getElementById("roundNav");
      if (!roundNav) return;

      const lnb = roundNav.offsetTop;

      const handleScroll = () => {
        if (window.scrollY >= lnb) {
          roundNav.classList.add("fixed");
        } else {
          roundNav.classList.remove("fixed");
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // 초기 체크

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, 100); // 100ms 딜레이

    return () => clearTimeout(timer);
  }, []); // 컴포넌트 마운트 시에만 실행
  const section = location.pathname.split("/").pop(); // "vision" 또는 "ceo"

  const linkToSub = (sub) => {
    navigate("/certification/" + sub);
  };

  if (lang === "ko")
    return (
      <>
        <Header color={"white"} lang={lang} setLang={setLang}></Header>
        <div id="smooth-wrapper" class="body-bg">
          <div>
            <main>
              <section className="subTop_certification">
                <div className="container">
                  <div className="subTop">
                    <div className="w80 centerH3">
                      <div className="centerH3_inner">
                        <p className="f36 fw600 lh100 white f_pp">Company</p>
                        <p className="f66 fw600 lh100 white mt60">식품안전인증현황</p>
                        <p className="f30 fw400 white lh150 mt40 mb100">
                          글로벌 식품안전인증을 기반으로 품질 경쟁력을 강화하여, <br />
                          안전성과 신뢰성을 갖춘 음료를 제공합니다.
                        </p>

                        <div className="tab-wrap">
                          <div id="roundNav">
                            <ul className="subNav">
                              <li className={`f20 ${section === "haccp" ? "active" : ""}`}>
                                <a href="#!" onClick={() => linkToSub("haccp")}>
                                  HACCP
                                </a>
                              </li>
                              <li className={`f20 ${section === "fssc" ? "active" : ""}`}>
                                <a href="#!" onClick={() => linkToSub("fssc")}>
                                  FSSC 22000
                                </a>
                              </li>
                              <li className={`f20 ${section === "document" ? "active" : ""}`}>
                                <a href="#!" onClick={() => linkToSub("document")}>
                                  인증서
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Outlet key={section}></Outlet>
            </main>
            <FooterReact key={section}></FooterReact>
          </div>
        </div>
      </>
    );
  return (
    <>
      <HeaderEN color={"white"} lang={lang} setLang={setLang}></HeaderEN>
      <div id="smooth-wrapper" class="body-bg">
        <div>
          <main>
            <section className="subTop_certification">
              <div className="container">
                <div className="subTop">
                  <div className="w80 centerH3">
                    <div className="centerH3_inner">
                      <p className="f36 fw600 lh100 white f_pp">Company</p>
                      <p className="f66 fw600 lh100 white mt60">Food Safety Certifications</p>
                      <p className="f30 fw400 white lh150 mt40 mb100">
                        We strengthen our quality competitiveness through global food safety certifications, delivering
                        beverages that ensure both safety and reliability.
                      </p>

                      <div className="tab-wrap">
                        <div id="roundNav">
                          <ul className="subNav">
                            <li className={`f20 ${section === "haccp" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("haccp")}>
                                HACCP
                              </a>
                            </li>
                            <li className={`f20 ${section === "fssc" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("fssc")}>
                                FSSC 22000
                              </a>
                            </li>
                            <li className={`f20 ${section === "document" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("document")}>
                                Certificates
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Outlet key={section}></Outlet>
          </main>
          <FooterReactEN key={section}></FooterReactEN>
        </div>
      </div>
    </>
  );
};

export default CertificationLayout;
