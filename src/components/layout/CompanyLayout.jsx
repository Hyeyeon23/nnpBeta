import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/footer";
import FooterReact from "../common/FooterReact";
import FooterReactEN from "../common/FooterReactEN";

import HeaderEN from "../common/HeaderEN";

const CompanyLayout = ({ lang, setLang }) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // <main.js 재실행>라우트 변경 시마다
    const reloadMainScript = () => {
      const mainScript = document.createElement("script");
      mainScript.src = "/common/js/main.js";
      mainScript.async = false;
      document.body.appendChild(mainScript);

      return () => {
        if (mainScript && document.body.contains(mainScript)) {
          document.body.removeChild(mainScript);
        }
      };
    };

    // main.js 재로드
    const cleanup = reloadMainScript();

    // <main.js 재실행>

    return cleanup;
  }, [location]);

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
    navigate("/company/" + sub);
  };

  if (lang === "ko") {
    return (
      <>
        <Header color={"white"}></Header>
        <div id="smooth-wrapper" class="body-bg">
          <div>
            <main>
              <section className="subTop_family">
                <div className="container">
                  <div className="subTop">
                    <div className="w80 centerH3">
                      <div className="centerH3_inner">
                        <p className="f36 fw600 lh100 white f_pp">Company</p>
                        <p className="f66 fw600 lh100 white mt60">관계사</p>
                        <p className="f30 fw400 white lh150 mt40 mb100">
                          고객과 사회를 위한 가치 창출을 통해 <br />
                          미래 성장을 이끌어갑니다.
                        </p>

                        <div className="tab-wrap">
                          <div id="roundNav">
                            <ul className="subNav">
                              <li className={`f20 ${section === "chung" ? "active" : ""}`}>
                                <a href="#!" onClick={() => linkToSub("chung")}>
                                  정식품
                                </a>
                              </li>
                              <li className={`f20 ${section === "osse" ? "active" : ""}`}>
                                <a href="#!" onClick={() => linkToSub("osse")}>
                                  오쎄
                                </a>
                              </li>
                              <li className={`f20 ${section === "hyechun" ? "active" : ""}`}>
                                <a href="#!" onClick={() => linkToSub("hyechun")}>
                                  (재단)혜춘장학회
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
              <Outlet></Outlet>
            </main>
            <FooterReact key={section}></FooterReact>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <HeaderEN color={"white"}></HeaderEN>
      <div id="smooth-wrapper" class="body-bg">
        <div>
          <main>
            <section className="subTop_family">
              <div className="container">
                <div className="subTop">
                  <div className="w80 centerH3">
                    <div className="centerH3_inner">
                      <p className="f36 fw600 lh100 white f_pp">Company</p>
                      <p className="f66 fw600 lh100 white mt60">Partners</p>
                      <p className="f30 fw400 white lh150 mt40 mb100">
                        We are leading future growth by <br />
                        creating values for customers and society
                      </p>

                      <div className="tab-wrap">
                        <div id="roundNav">
                          <ul className="subNav">
                            <li className={`f20 ${section === "chung" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("chung")}>
                                Dr. Chung’s Food
                              </a>
                            </li>
                            <li className={`f20 ${section === "osse" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("osse")}>
                                OSSE
                              </a>
                            </li>
                            <li className={`f20 ${section === "hyechun" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("hyechun")}>
                                Hyechun Scholarship Foundation
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
            <Outlet></Outlet>
          </main>
          <FooterReactEN key={section}></FooterReactEN>
        </div>
      </div>
    </>
  );
};

export default CompanyLayout;
