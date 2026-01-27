import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../common/footer";
import Header from "../common/Header";
import FooterReact from "../common/FooterReact";
import FooterReactEN from "../common/FooterReactEN";

import MetaEN from "../common/MetaEN";
import Meta from "../common/Meta";
import HeaderEN from "../common/HeaderEN";

const RecruitLayout = ({ lang, setLang }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const section = location.pathname.split("/").pop(); // "vision" 또는 "ceo"

  useEffect(() => {
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

    // 초기 체크 (화면이 이미 스크롤된 상태일 수 있음)
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkToSub = (sub) => {
    navigate("/recruit/" + sub);
  };

  if (lang === "ko") {
    return (
      <>
        <Meta title={"자연과사람들 채용정보 "}></Meta>
        <Header color={"white"} lang={lang} setLang={setLang}></Header>
        <div id="smooth-wrapper" className="body-bg">
          <div>
            <main>
              <section className="subTop_recruit">
                <div className="container">
                  <div className="subTop">
                    <div className="w80 centerH3">
                      <div className="centerH3_inner">
                        <p className="f36 fw600 lh100 white f_pp">Company</p>
                        <p className="f66 fw600 lh100 white mt60">채용정보</p>
                        <p className="f30 fw400 white lh150 mt40 mb100">
                          창의적 인재양성, 합리적 인사평가로 모든 구성원이
                          <br />
                          만족과 보람을 느끼도록 최선의 노력을 다하고 있습니다.
                        </p>
                        <div className="tab-wrap">
                          <div id="roundNav">
                            <ul className="subNav">
                              <li className={`f20 ${section === "info" ? "active" : ""}`}>
                                <a href="#!" onClick={() => linkToSub("info")}>
                                  채용공고
                                </a>
                              </li>
                              <li className={`f20 ${section === "policy" ? "active" : ""}`}>
                                <a href="#!" onClick={() => linkToSub("policy")}>
                                  인사제도
                                </a>
                              </li>{" "}
                              <li className={`f20 ${section === "process" ? "active" : ""}`}>
                                <a href="#!" onClick={() => linkToSub("process")}>
                                  채용절차
                                </a>
                              </li>
                              <li className={`f20 ${section === "benefit" ? "active" : ""}`}>
                                <a href="#!" onClick={() => linkToSub("benefit")}>
                                  복지제도
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* //centerH3_inner */}
                    </div>
                    {/* //centerH3 */}
                  </div>
                </div>
              </section>

              <Outlet key={section} context={{ isInProgress: false }}></Outlet>
            </main>
            <FooterReact key={section}></FooterReact>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <HeaderEN color={"white"} lang={lang} setLang={setLang}></HeaderEN>
      <MetaEN
        title={"Korea's No.1 OEM, Nature & People"}
        description={
          "Specialized in beverage OEM, ODM, Private Label, and B2B manufacturing, including exports. We expertly produce Aseptic Cartons, Gable Tops, and Cans."
        }></MetaEN>
      <div id="smooth-wrapper" className="body-bg">
        <div>
          <main>
            <section className="subTop_recruit">
              <div className="container">
                <div className="subTop">
                  <div className="w80 centerH3">
                    <div className="centerH3_inner">
                      <p className="f36 fw600 lh100 white f_pp">Company</p>
                      <p className="f66 fw600 lh100 white mt60">Recruitment</p>
                      <p className="f30 fw400 white lh150 mt40 mb100">
                        We are committed to fostering creative talent and implementing fair and rational performance
                        evaluations so that every member of our organization can feel fulfillment and satisfaction in
                        their work.
                      </p>
                      <div className="tab-wrap">
                        <div id="roundNav">
                          <ul className="subNav">
                            <li className={`f20 ${section === "info" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("info")}>
                                Job Openings(KR)
                              </a>
                            </li>
                            <li className={`f20 ${section === "policy" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("policy")}>
                                HR System
                              </a>
                            </li>{" "}
                            <li className={`f20 ${section === "process" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("process")}>
                                Recruitment Process
                              </a>
                            </li>
                            <li className={`f20 ${section === "benefit" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("benefit")}>
                                Benefits and Perks
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* //centerH3_inner */}
                  </div>
                  {/* //centerH3 */}
                </div>
              </div>
            </section>

            <Outlet key={section} context={{ isInProgress: false }}></Outlet>
          </main>
          <FooterReactEN key={section}></FooterReactEN>
        </div>
      </div>
    </>
  );
};

export default RecruitLayout;
