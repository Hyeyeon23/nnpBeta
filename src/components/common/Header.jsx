import React, { useEffect } from "react";
import $ from "jquery";
const Header = () => {
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
      //   $("#verticalType01").collapse({
      //     accordion: true,
      //     open: function () {
      //       this.addClass("open");
      //       this.css({ height: this.children().outerHeight() });
      //     },
      //     close: function () {
      //       this.css({ height: "0px" });
      //       this.removeClass("open");
      //     },
      //   });

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

  return (
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
              <span className="btn_fullMenu"></span>
              <div id="myNav" className="overlay">
                <div className="overlay-content">
                  <dl className="full_box">
                    <dd>
                      <p className="full_logo">
                        <a href="javascript:void(0)">
                          <img src="https://image.edaymall.com/images/dcf/vegemil/img/ico/logo_w.png" alt="정식품 CI" />
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
                          <a href="javascript:void(0)" className="closebtn">
                            <img
                              src="https://image.edaymall.com/images/dcf/vegemil/img/btn/btn_fullMenu_close.png"
                              alt="닫기버튼"
                            />
                          </a>
                        </li>
                      </ul>
                    </dd>
                    <dd className="full_dep">
                      <div className="fd_title">
                        <li className="f30 f_pp white lh100">Company</li>
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
                          <a href="/company/location">오시는길</a>
                        </li>
                        <li>
                          <a href="/company/social">사회공헌활동</a>
                        </li>
                      </ul>
                      <div className="fd_title">
                        <li className="f30 f_pp white lh100">Business</li>
                      </div>
                      <ul>
                        <li>
                          <a href="/business/brand">제품 유형</a>
                        </li>
                        <li>
                          <a href="/business/product">팩 용기 유형</a>
                        </li>
                        <li>
                          <a href="/business/product">캔 용기 유형</a>
                        </li>
                        <li>
                          <a href="https://www.edaymall.com" target="_blank" rel="noopener noreferrer">
                            R&D
                          </a>
                        </li>
                      </ul>
                      <div className="fd_title">
                        <li className="f30 f_pp white lh100">Brand</li>
                      </div>
                      <ul>
                        <li>
                          <a href="/brand/introduce">WIZUS</a>
                        </li>
                        <li>
                          <a href="/brand/introduce">녹차</a>
                        </li>
                        <li>
                          <a href="/brand/rnd">레몬</a>
                        </li>
                        <li>
                          <a href="/brand/cs">건강담은</a>
                        </li>
                        <li>
                          <a href="/brand/cs">식혜</a>
                        </li>
                        <li>
                          <a href="/brand/news">자연과사람들이 만든</a>
                        </li>
                      </ul>
                      <div className="fd_title">
                        <li className="f30 f_pp white lh100">CS</li>
                      </div>
                      <ul>
                        <li>
                          <a href="/webzine">자주 묻는 질문</a>
                        </li>
                        <li>
                          <a href="/cs/qna">1:1 문의</a>
                        </li>
                        <li>
                          <a href="/vegemilBaby/index">고객의 소리</a>
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
  );
};

export default Header;
