import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // 피씨 사이드 네모네모 열고 닫기
  const [isOpenm, setIsOpenm] = useState(false); // 모바일 네모네모 열고 닫기
  const [isOpenMInner, setIsOepnMInner] = useState(false);
  const containerRef = useRef(null); // 토글할 요소들을 감싸는 부모 DOM 참조

  const navigate = useNavigate();

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
  }, []);

  const oneDepMenu = () => {};

  const closeNav = () => {};

  return (
    <>
      <header className="gray">
        <div id="skipNav">
          <a href="#content">본문 바로가기</a>
        </div>
        <div id="header">
          {/* white 클래스 제적 */}
          <div className="bg"></div>
          <div className="wView">
            <h1 className="logo">
              <a href="#!" title="정식품 CI"></a>
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
                              <a href="#!" onClick={() => linkTo("/about/vision")}>
                                비젼
                              </a>
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
                          <a href="">채용정보</a>
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
                          <a href="">제품유형</a>
                        </li>
                        <li className="gbg06">
                          <a href="">용기유형</a>
                        </li>
                        <li className="gbg07">
                          <a href="" target="_blank">
                            R&D
                          </a>
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
                          <a href="">WIZUS</a>
                          <ul className="gnb_depth3">
                            <li>
                              <a href="">녹차</a>
                            </li>
                            <li>
                              <a href="">레몬</a>
                            </li>
                          </ul>
                        </li>
                        <li className="gbg09">
                          <a href="">건강담은</a>
                          <ul className="gnb_depth3">
                            <li>
                              <a href="">식혜</a>
                            </li>
                          </ul>
                        </li>
                        <li className="gbg10">
                          <a href="">자연과사람들이 만든</a>
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
              <div className="pack3D">
                <a href="" onClick={oneDepMenu} className="f_pp">
                  <span>pack3D</span>
                </a>
              </div>
            </nav>
            <div className="header-right">
              <ul className="sub_area">
                <li>
                  <div className="custom-sel">
                    <select>
                      <option value="ENG">ENG</option>
                      <option value="KOR">KOR</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div id="myNav" className="overlay">
                    <div className="overlay-content">
                      <dl className="full_box">
                        <dd>
                          <p className="full_logo">
                            <a href="">
                              <img
                                src="https://image.edaymall.com/common/dcf/vegemil/img/ico/logo_w.png"
                                alt="정식품 CI"
                              />
                            </a>
                          </p>
                          <ul className="full-header-right">
                            <li>
                              <div className="custom-sel gray">
                                <select>
                                  <option value="ENG">ENG</option>
                                  <option value="KOR">KOR</option>
                                </select>
                              </div>
                            </li>
                            <li>
                              <a href="" className="closebtn" onClick={closeNav}>
                                <img src="common/imgs/common/btn_fullMenu_close.png" alt="닫기버튼" />
                              </a>
                            </li>
                          </ul>
                        </dd>
                        {/* 이하 메뉴 구조도 동일하게 href="" 처리 */}
                      </dl>
                    </div>
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
                <div className="custom-sel ">
                  <select id="globalLang" onchange="changeLang();return false">
                    <option value="KOR">KOR</option>
                    <option value="ENG">ENG</option>
                  </select>
                </div>
              </li>

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
                        <a href="/company/heritige">창업주 기념관</a>
                      </li>
                      <li>
                        <a href="/company/info">기업정보</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/company/greetings">대표이사 인사말</a>
                          </dd>
                          <dd>
                            <a href="/company/profile">프로필</a>
                          </dd>
                          <dd>
                            <a href="/company/value">가치체계</a>
                          </dd>
                          <dd>
                            <a href="/company/history">연혁</a>
                          </dd>
                          <dd>
                            <a href="/company/nnp">관련사</a>
                          </dd>
                          <dd>
                            <a href="/company/finance">공시</a>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <a href="/company/info">홍보센터</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/company/mediaNews">보도자료</a>
                          </dd>
                          <dd>
                            <a href="/company/media">미디어</a>
                          </dd>
                        </dl>
                      </li>
                      {/* <!-- 2024-12-24(3) --> */}
                      <li>
                        <a href="/company/csr">ESG</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/rnd/esg">비젼</a>
                          </dd>
                          <dd>
                            <a href="/rnd/env">환경경영</a>
                          </dd>
                          <dd>
                            <a href="/rnd/csr">사회공헌활동</a>
                          </dd>
                          <dd>
                            <a href="/rnd/eth">윤리경영</a>
                          </dd>
                        </dl>
                      </li>
                      {/* <!-- 2024-12-24(3) --> */}
                      <li>
                        <a href="/rnd/factory">청주공장</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/rnd/factory">청주공장 소개</a>
                          </dd>
                          <dd>
                            <a href="/rnd/factoryTour">견학 신청</a>
                          </dd>
                          <dd>
                            <a href="/rnd/tourReview">견학 후기</a>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <a href="/company/agency">전국 영업소</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`ver-title01 ${isOpenMInner === 2 ? "open" : ""}`} onClick={() => handleToggle(2)}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <p>Product</p>
                  </a>
                </div>
                <div className={`v_content_wrapper ${isOpenMInner === 2 ? "open" : ""}`}>
                  <div className="v_content">
                    <ul className="v_con_ul">
                      <li>
                        <a href="/brandStory/vegemil">브랜드 스토리</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/brandStory/vegemil">베지밀</a>
                          </dd>
                          <dd>
                            <a href="/brandStory/greenbia">그린비아</a>
                          </dd>
                          <dd>
                            <a href="/brandStory/recipe">간단요리사</a>
                          </dd>
                          <dd>
                            <a href="/brandStory/simcheonsoo">심천수</a>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <a href="/product/list">제품 소개</a>
                      </li>
                      <li>
                        <a href="/product/cook">쿡앤쿡 레시피</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/product/cook">베지밀 레시피</a>
                          </dd>
                          <dd>
                            <a href="/beanSoup/list" target="_blank">
                              간단요리사레시피 <span className="ico_arrow_gray"></span>
                            </a>
                          </dd>
                          <dd>
                            <a href="/beanSoupRecipe/index" target="_blank">
                              콩국물 레시피 <span className="ico_arrow_gray"></span>
                            </a>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <a href="https://www.edaymall.com" target="_blanck">
                          공식 쇼핑몰
                        </a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/product/cook" target="_blank">
                              이데이몰 <span className="ico_arrow_gray"></span>
                            </a>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`ver-title01 ${isOpenMInner === 3 ? "open" : ""}`} onClick={() => handleToggle(3)}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <p>R&D</p>
                  </a>
                </div>
                <div className={`v_content_wrapper ${isOpenMInner === 3 ? "open" : ""}`}>
                  <div className="v_content">
                    <ul className="v_con_ul">
                      <li>
                        <a href="/rnd/phd">중앙연구소</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/rnd/phd">연구소장 인사말</a>
                          </dd>
                          <dd>
                            <a href="/rnd/Introduce">연구소 소개</a>
                          </dd>
                          <dd>
                            <a href="/rnd/devWork">R&D 활동</a>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <a href="/rnd/patent">특허 및 연구논문</a>
                      </li>
                      <li>
                        <a href="/rnd/haccp">식품안전인증현황</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/rnd/haccp">HACCP 인증</a>
                          </dd>
                          <dd>
                            <a href="/rnd/fssc">FSSC 22000</a>
                          </dd>
                          <dd>
                            <a href="/rnd/halal">HALAL 인증</a>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <a href="/rnd/ccm">일반인증현황</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/rnd/ccm">CCM 인증</a>
                          </dd>
                          <dd>
                            <a href="/rnd/epd">환경성적표지 인증</a>
                          </dd>
                          <dd>
                            <a href="/rnd/iso">ISO 45001 인증</a>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`ver-title01 ${isOpenMInner === 4 ? "open" : ""}`} onClick={() => handleToggle(2)}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <p>Communication</p>
                  </a>
                </div>
                <div className={`v_content_wrapper ${isOpenMInner === 4 ? "open" : ""}`}>
                  <div className="v_content">
                    <ul className="v_con_ul">
                      <li>
                        <a href="/webzine">정식품 웹진</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/webzine">웹진 바로가기</a>
                          </dd>
                          <dd>
                            <a href="/webzine/subscribe">웹진 신청</a>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/vegemil.official/">SNS</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="https://www.instagram.com/vegemil.official/" target="_blank">
                              정식품 인스타그램 <span className="ico_arrow_gray"></span>
                            </a>
                          </dd>
                          <dd>
                            <a href="https://www.instagram.com/vegemil_baby/" target="_blank">
                              영&middot;유아식 인스타그램 <span className="ico_arrow_gray"></span>
                            </a>
                          </dd>
                          <dd>
                            <a href="https://www.facebook.com/vegemilgood" target="_blank">
                              정식품 페이스북 <span className="ico_arrow_gray"></span>
                            </a>
                          </dd>
                          <dd>
                            <a href="https://blog.naver.com/vegemilstory" target="_blank">
                              정식품 블로그 <span className="ico_arrow_gray"></span>
                            </a>
                          </dd>
                          <dd>
                            <a href="https://www.youtube.com/user/vegemilgood" target="_blank">
                              정식품 유튜브 <span className="ico_arrow_gray"></span>
                            </a>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <a href="/event/list">이벤트</a>
                      </li>
                      <li>
                        <a href="/vegemilBaby/index">베지밀 영&middot;유아식</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/vegemilBaby/sample" target="_blank">
                              샘플신청 <span className="ico_arrow_gray"></span>
                            </a>
                          </dd>
                          <dd>
                            <a href="/vegemilBaby/event_review_best" target="_blank">
                              후기 이벤트 <span className="ico_arrow_gray"></span>
                            </a>
                          </dd>
                          <dd>
                            <a href="/vegemilBaby/model" target="_blank">
                              아기달력모델 <span className="ico_arrow_gray"></span>
                            </a>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <a href="/communication/ccm">공정거래(CP)</a>
                      </li>
                      <li>
                        <a href="/communication/voc">고객문의</a>
                        <dl className="v_con_dl">
                          <dd>
                            <a href="/communication/voc">고객의 소리</a>
                          </dd>
                          <dd>
                            <a href="/faq/list">자주 묻는 질문</a>
                          </dd>
                          <dd>
                            <a href="/communication/ask">1:1문의</a>
                          </dd>
                        </dl>
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
