import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import FooterReact from "../common/FooterReact";

const RndLayout = () => {
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
    navigate("/rnd/" + sub);
  };

  return (
    <>
      <Header></Header>
      <div id="smooth-wrapper" class="body-bg">
        <div>
          <main>
            <section className="subTop_rnd">
              <div className="container">
                <div className="subTop">
                  <div className="w80 centerH3">
                    <div className="centerH3_inner">
                      <p className="f36 fw600 lh100 white f_pp">Business</p>
                      <p className="f66 fw600 lh100 white mt60">R&D</p>
                      <p className="f30 fw400 white lh150 mt40 mb100">
                        ㈜자연과사람들 식품안전연구소는 경쟁력 있는
                        <br />
                        종합식품회사로 성장하기 위한 도약을 준비하고 있습니다.
                      </p>

                      <div className="tab-wrap">
                        <div id="roundNav">
                          <ul className="subNav">
                            <li className={`f20 ${section === "info" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("info")}>
                                인사말
                              </a>
                            </li>
                            <li className={`f20 ${section === "structure" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("structure")}>
                                조직구성
                              </a>
                            </li>
                            <li className={`f20 ${section === "equipment" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("equipment")}>
                                시설 및 장비현황
                              </a>
                            </li>
                            <li className={`f20 ${section === "research" ? "active" : ""}`}>
                              <a href="#!" onClick={() => linkToSub("research")}>
                                연구현황
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

export default RndLayout;
