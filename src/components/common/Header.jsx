import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false); // 피씨 사이드 네모네모 열고 닫기
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
                          <a href="">자연과사람들 소개</a>
                          <ul className="gnb_depth3">
                            <li>
                              <a href="#!" onClick={() => linkTo("/about/ceo")}>
                                인사말
                              </a>
                            </li>
                            <li>
                              <a href="#!" onClick={() => linkTo("/about/history")}>
                                회사연혁
                              </a>
                            </li>
                            <li>
                              {/* <a href="#!" onClick={() => linkTo("/about/vision")}> */}
                              <a href="/about/vision">비젼</a>
                            </li>
                            <li>
                              <a href="#!" onClick={() => linkTo("/about/road")}>
                                오시는길
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="gbg02">
                          <a href="">관련사</a>
                          <ul className="gnb_depth3">
                            <li>
                              <a href="#!" onClick={() => linkTo("/company/chung")}>
                                정식품
                              </a>
                            </li>
                            <li>
                              <a href="#!" onClick={() => linkTo("/company/osse")}>
                                오쎄
                              </a>
                            </li>
                            <li>
                              <a href="#!" onClick={() => linkTo("/company/hyechun")}>
                                (재단)혜춘장학회
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="gbg03">
                          <a href="#!">식품안전인증현황</a>
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
                                인증서
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="gbg04">
                          <a href="#!" onClick={oneDepMenu}>
                            채용정보
                          </a>
                          <ul className="gnb_depth3">
                            <li>
                              {" "}
                              <a href="/recruit/info">채용공고</a>
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
                          <a href="/business/products">제품유형</a>
                        </li>
                        <li className="gbg06">
                          <a href="/business/containers">
                            {/* <a href="#!" onClick={() => linkTo("/business/containers")}> */}
                            용기유형
                          </a>
                        </li>
                        <li className="gbg07">
                          <a href="/rnd/info" target="_blank" rel="noopener noreferrer">
                            R&amp;D
                          </a>
                          <ul className="gnb_depth3">
                            <li>
                              <a href="/rnd/info">연구소 소개</a>
                            </li>
                            <li>
                              <a href="/rnd/structure">조직구성</a>
                            </li>
                            <li>
                              <a href="/rnd/equipment">시설 및 장비현황</a>
                            </li>
                            <li>
                              <a href="/rnd/research">연구현황</a>
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
                              <a href="/brand/wizus/greenlemon">녹차/레몬</a>
                            </li>
                          </ul>
                        </li>
                        <li className="gbg09">
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            방방곡곡
                          </a>
                          <ul className="gnb_depth3">
                            <li>
                              <a href="/brand/healthy/sikhye">
                                {/* <a href="#!" onClick={() => linkTo("/brand/healthy/sikhye")}> */}
                                식혜
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="gbg10">
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            {/* <a href="#!" onClick={() => linkTo("/brand/pb")}> */}
                            자연과사람들이 만든
                          </a>
                          <ul className="gnb_depth3">
                            <li>
                              <a href="/brand/pb">
                                {/* <a href="#!" onClick={() => linkTo("/brand/healthy/sikhye")}> */}
                                과일3종 드링크
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
                            자주 묻는 질문
                          </a>
                        </li>
                        <li className="gbg12">
                          <a href="#!" onClick={() => linkTo("/cs/contact")}>
                            1:1문의
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
                <a href="/dev" className="f_pp">
                  <span>
                    {isWhiteLogo ? (
                      <img src="/common/imgs/common/pack-3d-w.gif" alt="pack-3d" />
                    ) : (
                      <img src="/common/imgs/common/pack-3d.gif" alt="pack-3d" />
                    )}
                  </span>
                </a>
              </div>
              {/*
                <ul className="sub_area">
                  <li>
                    <div className="custom-sel">
                      <select>
                        <option value="ENG">ENG</option>
                        <option value="KOR">KOR</option>
                      </select>
                    </div>
                  </li>
                </ul>
                */}
            </div>
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
              {/*
                <ul className="sub_area">
                  <li>
                    <div className="custom-sel">
                      <select>
                        <option value="ENG">ENG</option>
                        <option value="KOR">KOR</option>
                      </select>
                    </div>
                  </li>
                </ul>
                */}
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
                        <a onClick={() => linkTo("/about/ceo")}>자연과 사람들 소개</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="#!" onClick={() => linkTo("/about/ceo")}>
                              인사말
                            </a>
                          </dd>
                          <dd>
                            <a href="#!" onClick={() => linkTo("/about/history")}>
                              회사연혁
                            </a>
                          </dd>
                          <dd>
                            {/*   <a href="#!" onClick={() => linkTo("/about/vision")}> */}
                            <a href="/about/vision">비전</a>
                          </dd>
                          <dd>
                            <a href="#!" onClick={() => linkTo("/about/road")}>
                              오시는 길
                            </a>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <a href="#!" onClick={() => linkTo("/company/chung")}>
                          관련사
                        </a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="#!" onClick={() => linkTo("/company/chung")}>
                              정식품
                            </a>
                          </dd>
                          <dd>
                            <a href="#!" onClick={() => linkTo("/company/osse")}>
                              오쎄
                            </a>
                          </dd>
                          <dd>
                            <a href="#!" onClick={() => linkTo("/company/hyechun")}>
                              (재단)혜춘장학회
                            </a>
                          </dd>
                        </dl>
                      </li>
                      {/* <!-- 2024-12-24(3) --> */}
                      <li>
                        <a href="#!" onClick={() => linkTo("/certification/haccp")}>
                          식품안전인증현황
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
                              인증서
                            </a>
                          </dd>
                        </dl>
                      </li>
                      {/* <!-- 2024-12-24(3) --> */}
                      <li>
                        <a href="/recruit/info">채용정보</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/recruit/info">채용공고</a>
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
                        <a href="/business/products">제품유형</a>
                      </li>
                      <li>
                        {/* <a href="#!" onClick={() => linkTo("/business/containers")}> */}
                        <a href="/business/containers">용기유형</a>
                      </li>
                      <li className="gbg07">
                        <ul className="gnb_depth3">
                          <li>
                            <a onClick={() => linkTo("/rnd/info")}> R&amp;D</a>
                            <dl className="v_con_dl">
                              <dd>
                                <a href="#!" onClick={() => linkTo("/rnd/info")}>
                                  연구소 소개
                                </a>
                              </dd>
                              <dd>
                                <a href="#!" onClick={() => linkTo("/rnd/structure")}>
                                  조직구성
                                </a>
                              </dd>
                              <dd>
                                <a href="#!" onClick={() => linkTo("/rnd/equipment")}>
                                  {/* <a href="/rnd/equipment"> */}
                                  시설 및 장비현황
                                </a>
                              </dd>
                              <dd>
                                <a href="#!" onClick={() => linkTo("/rnd/research")}>
                                  연구현황
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
                            <a href="/brand/wizus/greenlemon">녹차 / 레몬</a>
                          </dd>
                        </dl>
                      </li>

                      <li>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          방방곡곡
                        </a>
                        <dl className="v_con_dl">
                          <dd>
                            {/* <a href="#!" onClick={() => linkTo("/brand/healthy/sikhye")}> */}
                            <a href="/brand/healthy/sikhye">식혜</a>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        {/* <a href="#!" onClick={() => linkTo("/brand/pb")}> */}
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          자연과사람들이 만든
                        </a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/brand/pb">과일3종 드링크</a>
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
                          자주 묻는 질문
                        </a>
                      </li>
                      <li>
                        <a href="#!" onClick={() => linkTo("/cs/contact")}>
                          1:1 문의
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

export default Header;
