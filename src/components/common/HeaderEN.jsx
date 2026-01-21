import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderEN = ({ color, lang, setLang }) => {
  const [isOpenm, setIsOpenm] = useState(false); // 모바일 네모네모 열고 닫기
  const [isOpenMInner, setIsOepnMInner] = useState(false);
  const [isWhiteLogo, setIsWhiteLogo] = useState(false);
  const containerRef = useRef(null); // 토글할 요소들을 감싸는 부모 DOM 참조

  const navigate = useNavigate();
  const location = useLocation();

  const linkTo = (path) => {
    navigate(path);
  };

  /**
   * 모바일 사이즈 네비게이션 토글 기능
   * 원리는 state 값에 따라서 css에 설정된 class 값 적용/해제
   *
   *
   * @param {*} key
   */
  const handleToggle = (key) => {
    setIsOepnMInner(isOpenMInner === key ? null : key);
  };

  useEffect(() => {
    function gnbClose() {
      $("#header").stop().css({ height: 90 });
      $("#gnb > ul > li").removeClass("on");
      $("#header").removeClass("open");
    }

    $("#gnb > ul > li > a").on("mouseenter focusin", function (e) {
      $("#gnb > ul > li").removeClass("on");
      $(this).parent("li").addClass("on");
      $("#header").addClass("open");

      const hd = $(this).next(".depth02_menu_wrap").stop().innerHeight();
      const num = hd + 91;

      $("#header").stop().animate({ height: num }, 340);
      e.preventDefault();

      $(".gnb_depth2")
        .find("a")
        .on("focusin", function () {
          $("#gnb > ul > li").removeClass("on");
          $(this).parents("#gnb > ul > li").addClass("on");
          $("#header").addClass("open");

          const hd = $(this).parents(".depth02_menu_wrap").stop().innerHeight();
          const num = hd + 101;

          $("#header").stop().animate({ height: num }, 340);
        });

      if (matchMedia("screen and (min-width: 800px)").matches) {
        $("#header, .all_search_pop").on("mouseleave", function () {
          gnbClose();
        });
      }

      $("#gnb")
        .find("a")
        .last()
        .on("focusout", function () {
          gnbClose();
        });

      // Floating 설정
      if (!$("#flotingPage").length) return;

      const limit = $(window).height() - $(".floting").height();
      $(".floting").addFloating({
        targetRight: 10,
        targetTop: 40,
        snap: true,
      });
    });

    // pack3D 로고 세팅
    const path = location.pathname;
    if (path.indexOf("rnd") > -1 || path.indexOf("company") > -1) {
      setIsWhiteLogo(true);
    }
  }, []);

  const oneDepMenu = (e) => {
    e.preventDefault();
  }; // 링크 이동 막기};

  const preparingAlert = (e) => {
    e.preventDefault();
    alert("준비중입니다.");
    return;
  };

  const closeNav = () => {};

  return (
    <>
      <header className={color ? color : "gray"}>
        <div id="skipNav">
          <a href="#content">본문 바로가기</a>
        </div>

        <div id="header">
          {/* white 클래스 제적 */}
          <div className="bg"></div>
          <div className="wView">
            <h1 className="logo">
              <a href="/" title="정식품 CI"></a>
            </h1>
            <nav id="gnb">
              <ul>
                <li>
                  <a href="" id="gnbTarget" onClick={oneDepMenu} className="f_pp">
                    Company
                  </a>
                  <div className="depth02_menu_wrap">
                    <div className="inner">
                      <ul className="gnb_depth2">
                        <li className="gbg01">
                          <a href="">About Us</a>
                          <ul className="gnb_depth3">
                            <li>
                              <a href="#!" onClick={() => linkTo("/about/ceo")}>
                                CEO Message
                              </a>
                            </li>
                            <li>
                              <a href="#!" onClick={() => linkTo("/about/history")}>
                                Company History
                              </a>
                            </li>
                            <li>
                              {/* <a href="#!" onClick={() => linkTo("/about/vision")}> */}
                              <a href="/about/vision">Vision</a>
                            </li>
                            <li>
                              <a href="#!" onClick={() => linkTo("/about/road")}>
                                Location
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="gbg02">
                          <a href="">Partners</a>
                          <ul className="gnb_depth3">
                            <li>
                              <a href="#!" onClick={() => linkTo("/company/chung")}>
                                Dr. Chung’s Food
                              </a>
                            </li>
                            <li>
                              <a href="#!" onClick={() => linkTo("/company/osse")}>
                                OSSE
                              </a>
                            </li>
                            <li>
                              <a href="#!" onClick={() => linkTo("/company/hyechun")}>
                                Hyechun Scholarship Foundation
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="gbg03">
                          <a href="#!">Food Safety Certifications</a>
                          <ul className="gnb_depth3">
                            <li>
                              <a href="#!" onClick={() => linkTo("/certification/haccp")}>
                                HACCP
                              </a>
                            </li>
                            <li>
                              <a href="#!" onClick={() => linkTo("/certification/fssc")}>
                                FSSC 22000
                              </a>
                            </li>
                            <li>
                              <a href="#!" onClick={() => linkTo("/certification/document")}>
                                Certificates
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="gbg04">
                          <a href="#!" onClick={oneDepMenu}>
                            Recruitment
                          </a>
                          <ul className="gnb_depth3">
                            <li>
                              <a href="#!" onClick={() => linkTo("/recruit/info")}>
                                Job Openings
                              </a>
                            </li>
                            <li>
                              <a href="#!" onClick={() => linkTo("/recruit/policy")}>
                                HR System
                              </a>
                            </li>
                            <li>
                              <a href="#!" onClick={() => linkTo("/recruit/process")}>
                                Recruitment Process
                              </a>
                            </li>
                            <li>
                              <a href="#!" onClick={() => linkTo("/recruit/benefit")}>
                                Benefits and Perks
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="" onClick={oneDepMenu} className="f_pp">
                    Business
                  </a>
                  <div className="depth02_menu_wrap">
                    <div className="inner">
                      <ul className="gnb_depth2">
                        <li className="gbg05">
                          {/* <a href="#!" onClick={() => linkTo("/business/products")}> */}
                          <a href="/business/products">Product Type</a>
                        </li>
                        <li className="gbg06">
                          <a href="/business/containers">
                            {/* <a href="#!" onClick={() => linkTo("/business/containers")}> */}
                            Container Type
                          </a>
                        </li>
                        <li className="gbg07">
                          <a href="/rnd/info" target="_blank" rel="noopener noreferrer">
                            R&amp;D
                          </a>
                          <ul className="gnb_depth3">
                            <li>
                              <a href="/rnd/info">About Us</a>
                            </li>
                            <li>
                              <a href="/rnd/structure">Organizational Map</a>
                            </li>
                            <li>
                              <a href="/rnd/equipment">Facilities & Equipment</a>
                            </li>
                            <li>
                              <a href="/rnd/research">Research Activities</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="" id="gnbTarget" onClick={oneDepMenu} className="f_pp">
                    Brand
                  </a>
                  <div className="depth02_menu_wrap">
                    <div className="inner">
                      <ul className="gnb_depth2">
                        <li className="gbg08">
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            WIZUS
                          </a>
                          <ul className="gnb_depth3">
                            <li>
                              {/* <a href="#!" onClick={() => linkTo("/brand/wizus/greenlemon")}> */}
                              <a href="/brand/wizus/greenlemon">Lemon/Green Tea</a>
                            </li>
                          </ul>
                        </li>
                        <li className="gbg09">
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            Bang Bang Gok Gok
                          </a>
                          <ul className="gnb_depth3">
                            <li>
                              <a href="/brand/healthy/sikhye">
                                {/* <a href="#!" onClick={() => linkTo("/brand/healthy/sikhye")}> */}
                                Sikhye
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="gbg10">
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            {/* <a href="#!" onClick={() => linkTo("/brand/pb")}> */}
                            Made by Nature & People
                          </a>
                          <ul className="gnb_depth3">
                            <li>
                              <a href="/brand/pb">
                                {/* <a href="#!" onClick={() => linkTo("/brand/pb")}> */}
                                Fruit Drinks
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="" onClick={oneDepMenu} className="f_pp">
                    CS
                  </a>
                  <div className="depth02_menu_wrap">
                    <div className="inner">
                      <ul className="gnb_depth2">
                        <li className="gbg11">
                          <a href="#!" onClick={() => linkTo("/cs/faq")}>
                            FAQs
                          </a>
                        </li>
                        <li className="gbg12">
                          <a href="#!" onClick={() => linkTo("/cs/contact")}>
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>

            <div className="header-right">
              <div className="pack3D_motion">
                <a href="/dev" onClick={() => oneDepMenu()} className="f_pp">
                  <span>
                    {isWhiteLogo ? (
                      <img src="/common/imgs/common/pack-3d-w.gif" alt="pack-3d" />
                    ) : (
                      <img src="/common/imgs/common/pack-3d.gif" alt="pack-3d" />
                    )}
                  </span>
                </a>
              </div>
              <ul className="sub_area">
                <li>
                  <div className="custom-sel">
                    <select
                      value={lang === "ko" ? "KOR" : "ENG"}
                      onChange={(e) => {
                        const nextLang = e.target.value === "KOR" ? "ko" : "en";
                        localStorage.setItem("lang", nextLang);
                        window.location.reload();
                      }}>
                      <option value="ENG">ENG</option>
                      <option value="KOR">KOR</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mView">
          <div className="m_header">
            {/* <!-- 수정 --> */}
            <div className="m_h_left">
              <a href="/">
                <span></span>
              </a>
            </div>
            <ul className="m_h_right">
              <li>
                <div className="pack3D_motion">
                  <a href="/dev" onclick="oneDepMenu()" className="f_pp">
                    <span>
                      {isWhiteLogo ? (
                        <img src="/common/imgs/common/pack-3d-w.gif" alt="pack-3d" />
                      ) : (
                        <img src="/common/imgs/common/pack-3d.gif" alt="pack-3d" />
                      )}
                    </span>
                  </a>
                </div>
              </li>
              {/* 
              <li>
                <div className="custom-sel ">
                  <select id="globalLang" onchange="changeLang();return false">
                    <option value="KOR">KOR</option>
                    <option value="ENG">ENG</option> 
                  </select>
                </div>
              </li>
              */}
              <li className="btnOpen">
                <span style={{ cursor: "pointer" }} onClick={() => setIsOpenm(true)}></span>
              </li>
            </ul>
            {/* <!-- //수정 --> */}
          </div>

          <div
            id="mobileAside"
            className="mAside scrollNone"
            style={{
              width: isOpenm ? "70%" : "0%",
            }}>
            <ul className="maTop">
              {/* <!-- <li><span className="active">KOR</span> <span>EN</span></li> --> */}
              <li>
                <a href="javascript:void(0)" className="m_closebtn" onClick={() => setIsOpenm(false)}>
                  <img
                    src="https://image.edaymall.com/images/dcf/vegemil/img/btn/btn_fullMenu_close.png"
                    alt="모바일 닫기버튼"
                  />
                </a>
              </li>
            </ul>
            <div className="mAside-content">
              {/* <!-- vertical --> */}
              <div id="verticalType01" ref={containerRef}>
                <div className={`ver-title01 ${isOpenMInner === 1 ? "open" : ""}`} onClick={() => handleToggle(1)}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <p>Company</p>
                  </a>
                </div>
                <div className={` ${isOpenMInner === 1 ? "open" : ""}`}>
                  <div className="v_content">
                    <ul className="v_con_ul">
                      <li>
                        <a onClick={() => linkTo("/about/ceo")}>About Us</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="#!" onClick={() => linkTo("/about/ceo")}>
                              CEO Message
                            </a>
                          </dd>
                          <dd>
                            <a href="#!" onClick={() => linkTo("/about/history")}>
                              Company History
                            </a>
                          </dd>
                          <dd>
                            {/*   <a href="#!" onClick={() => linkTo("/about/vision")}> */}
                            <a href="/about/vision">Vision</a>
                          </dd>
                          <dd>
                            <a href="#!" onClick={() => linkTo("/about/road")}>
                              Location
                            </a>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <a href="#!" onClick={() => linkTo("/company/chung")}>
                          Partners
                        </a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="#!" onClick={() => linkTo("/company/chung")}>
                              Dr. Chung’s Food
                            </a>
                          </dd>
                          <dd>
                            <a href="#!" onClick={() => linkTo("/company/osse")}>
                              OSSE
                            </a>
                          </dd>
                          <dd>
                            <a href="#!" onClick={() => linkTo("/company/hyechun")}>
                              Hyechun Scholarship Foundation
                            </a>
                          </dd>
                        </dl>
                      </li>
                      {/* <!-- 2024-12-24(3) --> */}
                      <li>
                        <a href="#!" onClick={() => linkTo("/certification/haccp")}>
                          Food Safety Certifications
                        </a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="#!" onClick={() => linkTo("/certification/haccp")}>
                              HACCP
                            </a>
                          </dd>
                          <dd>
                            <a href="#!" onClick={() => linkTo("/certification/fssc")}>
                              FSSC22000
                            </a>
                          </dd>
                          <dd>
                            <a href="#!" onClick={() => linkTo("/certification/document")}>
                              Certificates
                            </a>
                          </dd>
                        </dl>
                      </li>
                      {/* <!-- 2024-12-24(3) --> */}
                      <li>
                        <a href="/recruit/info">Recruitment</a>
                        <dl className="v_con_dl">
                          <dd>
                            {/* <a href="/recruit/info"> */}
                            <a href="#!" onClick={() => linkTo("/recruit/info")}>
                              Job Openings
                            </a>
                          </dd>
                          <dd>
                            {/* <a href="/recruit/info"> */}
                            <a href="#!" onClick={() => linkTo("/recruit/policy")}>
                              HR System
                            </a>
                          </dd>
                          <dd>
                            {/* <a href="/recruit/info"> */}
                            <a href="#!" onClick={() => linkTo("/recruit/process")}>
                              Recruitment Process
                            </a>
                          </dd>
                          <dd>
                            {/* <a href="/recruit/info"> */}
                            <a href="#!" onClick={() => linkTo("/recruit/benefit")}>
                              Benefits and Perks
                            </a>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`ver-title01 ${isOpenMInner === 2 ? "open" : ""}`} onClick={() => handleToggle(2)}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <p>Business</p>
                  </a>
                </div>
                <div className={`v_content_wrapper ${isOpenMInner === 2 ? "open" : ""}`}>
                  <div className="v_content">
                    <ul className="v_con_ul">
                      <li>
                        {/* <a href="#!" onClick={() => linkTo("/business/products")}> */}
                        <a href="/business/products">Product Type</a>
                      </li>
                      <li>
                        {/* <a href="#!" onClick={() => linkTo("/business/containers")}> */}
                        <a href="/business/containers">Container Type</a>
                      </li>
                      <li className="gbg07">
                        <ul className="gnb_depth3">
                          <li>
                            <a onClick={() => linkTo("/rnd/info")}> R&amp;D</a>
                            <dl className="v_con_dl">
                              <dd>
                                <a href="#!" onClick={() => linkTo("/rnd/info")}>
                                  About Us
                                </a>
                              </dd>
                              <dd>
                                <a href="#!" onClick={() => linkTo("/rnd/structure")}>
                                  Organizational Map
                                </a>
                              </dd>
                              <dd>
                                <a href="#!" onClick={() => linkTo("/rnd/equipment")}>
                                  {/* <a href="/rnd/equipment"> */}
                                  Facilities & Equipment
                                </a>
                              </dd>
                              <dd>
                                <a href="#!" onClick={() => linkTo("/rnd/research")}>
                                  Research Activities
                                </a>
                              </dd>
                            </dl>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`ver-title01 ${isOpenMInner === 3 ? "open" : ""}`} onClick={() => handleToggle(3)}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <p>Brand</p>
                  </a>
                </div>
                <div className={`v_content_wrapper ${isOpenMInner === 3 ? "open" : ""}`}>
                  <div className="v_content">
                    <ul className="v_con_ul">
                      <li>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          Wizus
                        </a>
                        <dl className="v_con_dl">
                          <dd>
                            {/* <a href="#!" onClick={() => linkTo("/brand/wizus/greenlemon")}> */}
                            <a href="/brand/wizus/greenlemon">Lemon/Green Tea </a>
                          </dd>
                        </dl>
                      </li>

                      <li>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          Bang Bang Gok Gok
                        </a>
                        <dl className="v_con_dl">
                          <dd>
                            {/* <a href="#!" onClick={() => linkTo("/brand/healthy/sikhye")}> */}
                            <a href="/brand/healthy/sikhye">Sikhye</a>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        {/* <a href="#!" onClick={() => linkTo("/brand/pb")}> */}
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          Made by Nature & People
                        </a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/brand/pb">Fruit Drinks</a>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`ver-title01 ${isOpenMInner === 4 ? "open" : ""}`} onClick={() => handleToggle(4)}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <p>CS</p>
                  </a>
                </div>
                <div className={`v_content_wrapper ${isOpenMInner === 4 ? "open" : ""}`}>
                  <div className="v_content">
                    <ul className="v_con_ul">
                      <li>
                        <a href="#!" onClick={() => linkTo("/cs/faq")}>
                          {" "}
                          FAQs{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#!" onClick={() => linkTo("/cs/contact")}>
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- //vertical --> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderEN;
