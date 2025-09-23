import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/footer";

const CompanyLayout = () => {
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
  useEffect(() => {
    if (window.initAnimation) {
      console.log("??");
      window.initAnimation(); // 렌더링 시 재호출
    }
  }, []); // []: 컴포넌트 마운트 시 한 번 실행

  const location = useLocation();
  const navigate = useNavigate();

  const section = location.pathname.split("/").pop(); // "vision" 또는 "ceo"

  const linkToSub = (sub) => {
    navigate("/company/" + sub);
  };

  return (
    <>
      <Header></Header>
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
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default CompanyLayout;
