import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/footer";

const CertificationLayout = () => {
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

  const location = useLocation();
  const navigate = useNavigate();

  const section = location.pathname.split("/").pop(); // "vision" 또는 "ceo"

  const linkToSub = (sub) => {
    navigate("/certification/" + sub);
  };

  return (
    <>
      <Header></Header>
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
            <Outlet></Outlet>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default CertificationLayout;
