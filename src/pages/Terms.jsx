import { useRef } from "react";
import Header from "../components/common/Header";
import FooterReact from "../components/common/FooterReact";
const Terms = () => {
  return (
    <>
      <Header></Header>
      <div id="smooth-wrapper" className="body-bg">
        <div id="smooth-content">
          <main>
            <section className="breadcrumb-section__area breadcrumb-section breadcrumb-section-4 breadcrumb-section-2__space  border-bottom">
              <div className="container">
                <div className="breadcrumb-section__shape__wrap">
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                </div>
                <div className="breadcrumb-section__text">
                  <h3 className="f_pp f80 fw600 lh100">이용약관</h3>
                </div>
              </div>
            </section>

            <section className="faq-section__area faq-section faq-section-2 body-bg section-space">
              <div className="contant1100">
                <div className="row">
                  <div className="col-lg-12">
                    <textarea
                      className="terms"
                      value={`[㈜자연과사람들 이용 약관]
  1. 목적
  1.1. ㈜자연과사람들 (www.innp.co.kr) 이용자 약관(이하 "본 약관"이라 합니다)은 이용자가 ㈜자연과사람들(이하 "자연과사람들"이라 합니다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 합니다)를 이용함에 있어 이용자와 자연과사람들의 권리 · 의무 및 책임사항을 규정함을 목적으로 합니다.
  본 약관에 정하는 이외의 이용자와 자연과사람들의 권리, 의무 및 책임사항에 관해서는 전기통신사업법 기타 대한민국의 관련 법령과 상관습에 의합니다.

  2. 약관의 게시와 개정
  2.1. 자연과사람들은 약관의 규제 등에 관한 법률, 전자거래기본법, 전자서명법, 정보통신망 이용 촉진 등에 관한 법률 등 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
  2.2. 자연과사람들이 본 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.

  4. 서비스의 제공 및 변경
  4.1. 자연과사람들은 이용자에게 아래와 같은 서비스를 제공합니다.
  4.1.1. 이용자를 위한 섹션 및 컨텐트 서비스

  5. 서비스의 중단
  5.1. 자연과사람들은 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있고, 새로운 서비스로의 교체나 기타 자연과사람들이 적절하다고 판단하는 사유에 한하여 현재 제공되는 서비스를 완전히 중단할 수 있습니다.
  5.2. 제1항에 의한 서비스 중단의 경우에는 자연과사람들은 제8조 제2항에서 정한 방법으로 이용자에게 통지합니다. 다만, 자연과사람들이 통제할 수 없는 사유로 인한 서비스의 중단(시스템 관리자의 고의, 과실이 없는 디스크 장애, 시스템 다운 등)으로 인하여 사전 통지가 불가능한 경우에는 그러하지 아니합니다.

  6. 개인정보의 위탁
  6.1. 회사는 수집된 개인정보의 취급 및 관리 등의 업무를, 필요한 경우 업무의 일부 또는 전부를 회사가 선정한 회사에 위탁할 수 있으며, 이 경우 회사의 개인정보취급방침에 공지합니다.

  7. 회사(자연과사람들)의 의무
  7.1. 자연과사람들은 법령과 본 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 본 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를 제공하기 위해서 노력합니다.
  7.2. 자연과사람들은 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 구축합니다.

  8. 저작권의 귀속 및 이용제한
  8.1. 자연과사람들이 작성한 저작물에 대한 저작권 기타 지적재산권은 자연과사람들에 귀속합니다.

  9. 준거법 및 재판 관할
  9.1. 자연과사람들과 이용자간 제기된 소송은 대한민국법을 준거법으로 합니다.
  9.2. 자연과사람들과 이용자간에 발생한 서비스 이용에 관한 분쟁으로 인한 소는 민사소송법상의 관할을 가지는 대한민국의 법원에 제기합니다.

  부칙
  1. 본 약관은 2025.03.28. 부로 시행합니다.`}
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>
          <div className="loading-form">
            <div className="sk-three-bounce">
              <div className="sk-child sk-bounce1"></div>
              <div className="sk-child sk-bounce2"></div>
              <div className="sk-child sk-bounce3"></div>
            </div>
          </div>

          <FooterReact></FooterReact>
        </div>
      </div>
    </>
  );
};

export default Terms;
