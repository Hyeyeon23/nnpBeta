import React, { useEffect, useRef, useState } from "react";

import $ from "jquery";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // 피씨 사이드 네모네모 열고 닫기
  const [isOpenm, setIsOpenm] = useState(false); // 모바일 네모네모 열고 닫기
  const containerRef = useRef(null); // 토글할 요소들을 감싸는 부모 DOM 참조

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

      // 모바일 메뉴 vertical
      $("#verticalType01").collapse({
        accordion: true,
        open: function () {
          this.addClass("open");
          this.css({ height: this.children().outerHeight() });
        },
        close: function () {
          this.css({ height: "0px" });
          this.removeClass("open");
        },
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

    // 모바일 토글을 위하여

    const summaries = document.querySelectorAll("[data-collapse-summary]");
    const handleClicks = [];

    summaries.forEach((summary) => {
      const content = summary.nextElementSibling;
      if (!content) return;

      content.style.overflow = "hidden";
      content.style.transition = "height 0.3s ease";

      if (summary.classList.contains("open")) {
        content.style.height = content.scrollHeight + "px";
      } else {
        content.style.height = "0px";
      }

      const handleClick = () => {
        summaries.forEach((s) => {
          const c = s.nextElementSibling;
          if (s === summary) {
            const isOpen = s.classList.contains("open");
            if (isOpen) {
              s.classList.remove("open");
              c.style.height = "0px";
            } else {
              s.classList.add("open");
              c.style.height = c.scrollHeight + "px";
            }
          } else {
            s.classList.remove("open");
            c.style.height = "0px";
          }
        });
      };

      summary.addEventListener("click", handleClick);
      handleClicks.push({ summary, handleClick });
    });

    return () => {
      handleClicks.forEach(({ summary, handleClick }) => {
        summary.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <>
      <div id="header" className="white" style={{ height: "90px" }}>
        <div className="bg"></div>
        <div className="wView">
          <h1 className="logo">
            <a href="javascript:void(0);" title="정식품 CI"></a>
          </h1>
          <nav id="gnb">
            <ul>
              <li>
                <a href="./01_01.html" id="gnbTarget" className="f_pp">
                  Company
                </a>
                <div className="depth02_menu_wrap">
                  <div className="inner">
                    <ul className="gnb_depth2">
                      <li className="gbg01">
                        <a href="javascript:void(0)">자연과사람들 소개</a>
                        <ul className="gnb_depth3">
                          <li>
                            <a href="javascript:void(0)">인사말</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">회사연혁</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">비젼</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">오시는길</a>
                          </li>
                        </ul>
                      </li>
                      <li className="gbg02">
                        <a href="javascript:void(0)">관련사</a>
                        <ul className="gnb_depth3">
                          <li>
                            <a href="javascript:void(0)">정식품</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">오쎄</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">(재단)혜춘장학회</a>
                          </li>
                        </ul>
                      </li>
                      <li className="gbg03">
                        <a href="javascript:void(0)">식품안전인증현황</a>
                        <ul className="gnb_depth3">
                          <li>
                            <a href="javascript:void(0)">HACCP</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">FSSC 22000</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">인증서</a>
                          </li>
                        </ul>
                      </li>
                      <li className="gbg04">
                        <a href="javascript:void(0)">채용정보</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <a href="javascript:void(0)" className="f_pp">
                  Business
                </a>
                <div className="depth02_menu_wrap">
                  <div className="inner">
                    <ul className="gnb_depth2">
                      <li className="gbg01">
                        <a href="javascript:void(0)">제품유형</a>
                      </li>
                      <li className="gbg05">
                        <a href="javascript:void(0)">팩 용기유형</a>
                      </li>
                      <li className="gbg06">
                        <a href="javascript:void(0)">캔 용기유형</a>
                      </li>
                      <li className="gbg04">
                        <a href="https://www.edaymall.com" target="_blank" rel="noopener noreferrer">
                          R&amp;D
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <a href="javascript:void(0)" id="gnbTarget" className="f_pp">
                  Brand
                </a>
                <div className="depth02_menu_wrap">
                  <div className="inner">
                    <ul className="gnb_depth2">
                      <li className="gbg01">
                        <a href="javascript:void(0)">WIZUS</a>
                        <ul className="gnb_depth3">
                          <li>
                            <a href="javascript:void(0)">녹차</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">레몬</a>
                          </li>
                        </ul>
                      </li>
                      <li className="gbg02">
                        <a href="javascript:void(0)">건강담은</a>
                        <ul className="gnb_depth3">
                          <li>
                            <a href="javascript:void(0)">식혜</a>
                          </li>
                        </ul>
                      </li>
                      <li className="gbg03">
                        <a href="javascript:void(0)">자연과사람들이 만든</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <a href="javascript:void(0)" className="f_pp">
                  CS
                </a>
                <div className="depth02_menu_wrap">
                  <div className="inner">
                    <ul className="gnb_depth2">
                      <li className="gbg01">
                        <a href="javascript:void(0)">자주 묻는 질문</a>
                      </li>
                      <li className="gbg02">
                        <a href="javascript:void(0)">1:1문의</a>
                      </li>
                      <li className="gbg03">
                        <a href="javascript:void(0)">고객의 소리</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <div className="header-right">
            <ul className="sub_area">
              <li>
                <a href="javascript:void(0)">로그인</a>
              </li>
              <li>
                <a href="javascript:void(0)">회원가입</a>
              </li>
              <li>
                <div className="custom-sel">
                  <select>
                    <option value="KOR">KOR</option>
                    <option value="ENG">ENG</option>
                    <option value="VIET">VIET</option>
                  </select>
                </div>
              </li>
              <li>
                <span className="btn_fullMenu" onClick={() => setIsOpen(true)}></span>
                <div id="myNav" className="overlay" style={{ height: isOpen ? "100%" : "0%" }}>
                  <div className="overlay-content">
                    <dl className="full_box">
                      <dd>
                        <p className="full_logo">
                          <a href="javascript:void(0)">
                            <img
                              src="https://image.edaymall.com/images/dcf/vegemil/img/ico/logo_w.png"
                              alt="정식품 CI"
                            />
                          </a>
                        </p>
                        <ul className="full-header-right">
                          <li>
                            <a href="javascript:void(0)">로그인</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">회원가입</a>
                          </li>
                          <li>
                            <div className="custom-sel gray">
                              <select>
                                <option value="KOR">KOR</option>
                                <option value="ENG">ENG</option>
                              </select>
                            </div>
                          </li>
                          <li>
                            <a href="javascript:void(0);" className="closebtn" onClick={() => setIsOpen(false)}>
                              <img
                                src="https://image.edaymall.com/images/dcf/vegemil/img/btn/btn_fullMenu_close.png"
                                alt="닫기버튼"
                              />
                            </a>
                          </li>
                        </ul>
                      </dd>
                      <dd class="full_dep">
                        <div class="fd_title">
                          <li class="f30 f_pp white lh100">Company</li>
                        </div>
                        <ul>
                          <li>
                            <a href="/company/heritige">창업주 기념관</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="/company/info">기업 정보</a>
                          </li>
                          <li>
                            <a href="/company/greetings">대표이사 인사말</a>
                          </li>
                          <li>
                            <a href="/company/profile">프로필</a>
                          </li>
                          <li>
                            <a href="/company/value">가치체계</a>
                          </li>
                          <li>
                            <a href="/company/history">연혁</a>
                          </li>
                          <li>
                            <a href="/company/nnp">관련사</a>
                          </li>
                          <li>
                            <a href="/company/finance">공시</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="/company/media">홍보센터</a>
                          </li>
                          <li>
                            <a href="/company/mediaNews">보도자료</a>
                          </li>
                          <li>
                            <a href="/company/media">미디어</a>
                          </li>
                        </ul>

                        <ul>
                          <li>
                            <a href="/company/esg">ESG</a>
                          </li>
                          <li>
                            <a href="/company/esg">비젼</a>
                          </li>
                          <li>
                            <a href="/company/env">환경경영</a>
                          </li>
                          <li>
                            <a href="/company/csr">사회공헌활동</a>
                          </li>
                          <li>
                            <a href="/company/eth">윤리경영</a>
                          </li>
                        </ul>

                        <ul>
                          <li>
                            <a href="/rnd/factory">청주공장</a>
                          </li>
                          <li>
                            <a href="/rnd/factory">청주공장 소개</a>
                          </li>
                          <li>
                            <a href="/rnd/factoryTour">견학 신청</a>
                          </li>
                          <li>
                            <a href="/rnd/tourReview">견학 후기</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="/company/agency">전국 영업소</a>
                          </li>
                        </ul>
                      </dd>
                      <dd class="full_dep">
                        <div class="fd_title">
                          <li class="f30 f_pp white lh100">Product</li>
                        </div>
                        <ul>
                          <li>
                            <a href="/brandStory/vegemil">브랜드 스토리</a>
                          </li>
                          <li>
                            <a href="/brandStory/vegemil">베지밀</a>
                          </li>
                          <li>
                            <a href="/brandStory/greenbia">그린비아</a>
                          </li>
                          <li>
                            <a href="/brandStory/recipe">간단요리사</a>
                          </li>
                          <li>
                            <a href="/brandStory/simcheonsoo">심천수</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="/product/list">제품 소개</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="/product/cook">쿡앤쿡 레시피</a>
                          </li>
                          <li>
                            <a href="/product/cook">베지밀 레시피 </a>
                          </li>
                          <li>
                            <a href="/beanSoup/list" target="_blank">
                              간단요리사 레시피 <span class="ico_arrow_gray"></span>
                            </a>
                          </li>
                          <li>
                            <a href="/beanSoupRecipe/index" target="_blank">
                              콩국물 레시피 <span class="ico_arrow_gray"></span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="https://www.edaymall.com" target="_blacnk">
                              공식 쇼핑몰
                            </a>
                          </li>
                          <li>
                            <a href="https://www.edaymall.com" target="_blacnk">
                              이데이몰 <span class="ico_arrow_gray"></span>
                            </a>
                          </li>
                        </ul>
                      </dd>
                      <dd class="full_dep">
                        <div class="fd_title">
                          <li class="f30 f_pp white lh100">R&D</li>
                        </div>
                        <ul>
                          <li>
                            <a href="/rnd/phd">중앙연구소</a>
                          </li>
                          <li>
                            <a href="/rnd/phd">연구소장 인사말</a>
                          </li>
                          <li>
                            <a href="/rnd/Introduce">연구소 소개</a>
                          </li>
                          <li>
                            <a href="/rnd/devWork">R&D 활동</a>
                          </li>
                        </ul>

                        <ul>
                          <li>
                            <a href="/rnd/patent">특허 및 연구논문</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="/rnd/haccp">식품안전인증현황</a>
                          </li>
                          <li>
                            <a href="/rnd/haccp">HACCP 인증</a>
                          </li>
                          <li>
                            <a href="/rnd/fssc">FSSC 22000 인증</a>
                          </li>
                          <li>
                            <a href="/rnd/halal">HALAL 인증</a>
                          </li>
                        </ul>

                        <ul>
                          <li>
                            <a href="/rnd/ccm">일반인증현황</a>
                          </li>
                          <li>
                            <a href="/communication/ccm">CCM 인증</a>
                          </li>
                          <li>
                            <a href="/rnd/epd">환경성적표지 인증</a>
                          </li>
                          <li>
                            <a href="/rnd/iso">ISO 45001 인증</a>
                          </li>
                        </ul>
                      </dd>
                      <dd class="full_dep">
                        <div class="fd_title">
                          <li class="f30 f_pp white lh100">Communication</li>
                        </div>
                        <ul>
                          <li>
                            <a href="/webzine">정식품 웹진</a>
                          </li>
                          <li>
                            <a href="/webzine">웹진 바로가기</a>
                          </li>
                          <li>
                            <a href="/webzine/subscribe">웹진 신청</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="https://www.instagram.com/vegemil.official/" target="_blank">
                              SNS{" "}
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/vegemil.official/" target="_blank">
                              정식품 인스타그램 <span class="ico_arrow_gray"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/vegemil_baby/" target="_blank">
                              영&middot;유아식 인스타그램 <span class="ico_arrow_gray"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/vegemilgood" target="_blank">
                              정식품 페이스북 <span class="ico_arrow_gray"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://blog.naver.com/vegemilstory" target="_blank">
                              정식품 블로그 <span class="ico_arrow_gray"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.youtube.com/user/vegemilgood" target="_blank">
                              정식품 유튜브 <span class="ico_arrow_gray"></span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="/event/list">이벤트</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="/vegemilBaby/index">베지밀 영&middot;유아식</a>
                          </li>
                          <li>
                            <a href="/vegemilBaby/sample" target="_blank">
                              샘플신청 <span class="ico_arrow_gray"></span>
                            </a>
                          </li>
                          <li>
                            <a href="/vegemilBaby/event_review_best" target="_blank">
                              후기 이벤트 <span class="ico_arrow_gray"></span>
                            </a>
                          </li>
                          <li>
                            <a href="/vegemilBaby/model" target="_blank">
                              아기달력모델 <span class="ico_arrow_gray"></span>
                            </a>
                          </li>
                        </ul>

                        <ul>
                          <li>
                            <a href="/communication/cp">공정거래(CP)</a>
                          </li>
                        </ul>

                        <ul>
                          <li>
                            <a href="/communication/voc">고객문의</a>
                          </li>
                          <li>
                            <a href="/communication/voc">고객의 소리</a>
                          </li>
                          <li>
                            <a href="/faq/list">자주 묻는 질문</a>
                          </li>
                          <li>
                            <a href="/communication/ask">1:1문의</a>
                          </li>
                        </ul>
                      </dd>
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
                  <option value="VIET">VIET</option>
                </select>
              </div>
            </li>
            {/* <!-- //2024-02-01 --> */}
            <li className="btn_m_edaymall">
              <a href="https://m.edaymall.com">
                <span></span>
              </a>
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
              <div className="ver-title01" data-collapse-summary>
                <p>Company</p>
              </div>
              <div>
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
              <div className="ver-title01" data-collapse-summary>
                <p>Product</p>
              </div>
              <div>
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
              <div className="ver-title01" data-collapse-summary>
                <p>R&D</p>
              </div>
              <div>
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
              <div className="ver-title01" style={{ cursor: "pointer" }} data-collapse-summary>
                <p>Communication</p>
              </div>
              <div>
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
          <ul className="maBotton">
            <li>
              <span>
                <a href="/member/login">로그인</a>
              </span>
            </li>
            <li>
              <span>
                <a href="/member/join">회원가입</a>
              </span>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
