import React, { useEffect, useRef } from "react";

const HeaderMobile = ({ accordion = true, open, close }) => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".item");

    items.forEach((item) => {
      const trigger = item.querySelector(".trigger");
      const panel = item.querySelector(".panel");

      trigger.onclick = () => {
        const isOpen = item.classList.contains("open");

        if (accordion) {
          items.forEach((other) => {
            if (other !== item) {
              other.classList.remove("open");
              const otherPanel = other.querySelector(".panel");
              otherPanel.style.height = "0px";
              close?.call(otherPanel);
            }
          });
        }

        if (!isOpen) {
          item.classList.add("open");
          panel.style.height = panel.children[0].offsetHeight + "px";
          open?.call(panel);
        } else {
          item.classList.remove("open");
          panel.style.height = "0px";
          close?.call(panel);
        }
      };
    });
  }, [accordion, open, close]);
  return (
    <div className="mView">
      <div className="m_header">
        {/* <!-- 수정 --> */}
        <div className="m_h_left">
          <a href="/">
            <span></span>
          </a>
        </div>
        <ul className="m_h_right">
          {/* <!-- 검색기능 추후 개발 -->
			<!-- <li className="btn_m_search"><a href="#"><span></span></a></li> -->
			<!-- 2024-02-01 --> */}
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
            <span style={{ cursor: "pointer" }} onclick="openAside()"></span>
          </li>
        </ul>
        {/* <!-- //수정 --> */}
      </div>

      <div id="mobileAside" className="mAside scrollNone">
        <ul className="maTop">
          {/* <!-- <li><span className="active">KOR</span> <span>EN</span></li> --> */}
          <li>
            <a href="javascript:void(0)" className="m_closebtn" onclick="closeAside()">
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
            <div className="ver-title01">
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
            <div className="ver-title01">
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
            <div className="ver-title01">
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
            <div className="ver-title01">
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
  );
};

export default HeaderMobile;
