import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../common/footer";
import Header from "../common/Header";
import FooterReact from "../common/FooterReact";

const AboutLayout = ({ lang, setLang }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const section = location.pathname.split("/").pop(); // "vision" 또는 "ceo"
  useEffect(() => {
    console.log(section);

    // <main.js 재실행>라우트 변경 시마다
    const reloadMainScript = () => {
      console.log(section);
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
  }, [location, section]);

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
    navigate("/about/" + sub);
  };
  if (lang === "ko") {
    return (
      <>
        <Header></Header>
        <div id="smooth-wrapper" class="body-bg">
          <div>
            <main>
              <section className="subTop_company">
                <div className="container">
                  <div className="subTop">
                    <div className="w80 centerH3">
                      <div className="centerH3_inner">
                        <p className="f36 fw600 lh100 grayn3 f_pp">Company</p>
                        <p className="f66 fw600 lh100 grayn1 mt60">자연과사람들 소개</p>
                        <p className="f30 fw400 grayn1 lh150 mt40 mb100">
                          ASEPTIC 음료 제조의 시작부터 끝까지 책임지는
                          <br />
                          대한민국 No.1 원스톱 OEM·ODM 전문 기업입니다.
                        </p>

                        <div className="tab-wrap">
                          <div id="roundNav">
                            <ul className="subNav">
                              <li className={`f20 ${section === "ceo" ? "active" : ""}`}>
                                <a href="#!" onClick={() => linkToSub("ceo")}>
                                  인사말
                                </a>
                              </li>
                              <li className={`f20 ${section === "history" ? "active" : ""}`}>
                                <a href="#!" onClick={() => linkToSub("history")}>
                                  회사연혁
                                </a>
                              </li>{" "}
                              <li className={`f20 ${section === "vision" ? "active" : ""}`}>
                                <a href="#!" onClick={() => linkToSub("vision")}>
                                  비젼
                                </a>
                              </li>
                              <li className={`f20 ${section === "road" ? "active" : ""}`}>
                                <a href="#!" onClick={() => linkToSub("road")}>
                                  오시는 길
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
              <Outlet key={section}></Outlet>
            </main>
            <FooterReact key={section}></FooterReact>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header></Header>
      <div id="smooth-wrapper" class="body-bg">
        <div>
          <main>
            <section className="subTop_company">
              <div className="container">
                <div className="subTop">
                  <div className="w80 centerH3">
                    <div className="centerH3_inner">
                      <p className="f36 fw600 lh100 grayn3 f_pp">Company</p>
                      <p className="f66 fw600 lh100 grayn1 mt60">About Us</p>
                      <p className="f30 fw400 grayn1 lh150 mt40 mb100">
                        We are Korea’s leading one-stop OEM·ODM specialist,
                        <br /> providing end-to-end aseptic beverage manufacturing solutions.
                      </p>

                      <div className="tab-wrap">
                        <div id="roundNav">
                          <ul className="subNav">
                            <li className={`f20 ${section === "ceo" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("ceo")}>
                                CEO Message
                              </a>
                            </li>
                            <li className={`f20 ${section === "history" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("history")}>
                                Company History
                              </a>
                            </li>{" "}
                            <li className={`f20 ${section === "vision" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("vision")}>
                                Vision
                              </a>
                            </li>
                            <li className={`f20 ${section === "road" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("road")}>
                                Location
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
            <Outlet key={section}></Outlet>
          </main>
          <FooterReact key={section}></FooterReact>
        </div>
      </div>
    </>
  );
};

export default AboutLayout;
