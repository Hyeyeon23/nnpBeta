import React from "react";

const Fssc = () => {
  return (
    <>
      <section className="contant1100 mt200">
        <div className="row">
          <div className="col-lg-12">
            <p className="f52 fw600 grayn1 lh120 center">FSSC 22000 인증</p>
          </div>
        </div>
      </section>

      <section>
        <div className="contant1160 mt100 mb200">
          <div className="row haccpBox">
            <div className="col-lg-6">
              <div>
                <p className="f40 fw600 f_pp grayn01 lh130 mt50">FSSC 22000</p>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="text-right">
                <img src="/common/imgs/company/FSSC.jpg" alt="haccp인증마크" />
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 contant900 pb150">
              <p className="f18 lh170 mt50">
                당사는 2011년 10월 8일 ISO 22000최초 인증 획득 후 2015년 6월 4일, 8일에 각각 FSSC 22000 및 ISO 9001
                인증을 획득함으로써 지속적으로 국제적 품질기준을 적용하여 안전한 식품을 생산하고 있습니다.
                <br />
                <br />
                <span className="fw500">
                  ISO 9001 + HACCP에 대한 통합인증으로 전 세계에 국가를 대표하는 회원기관 (우리나라:산자부 기술
                  표준원)의 75%이상 찬성으로 2005년 9월 1일부로 발행한 국제 규격의 식품안전 경영시스템입니다.
                </span>
                <br />
                <br />
                HACCP에 기초하여 과학적이고 논리적인 접근하에 식품안전 위해요소를 파악, 평가 및 관리하고 경영시스템과
                접목하여 최고경영자 및 전 직원의 참여하에 체계적으로 식품안전을 관리 및 개선하도록 개발하였습니다.
              </p>
            </div>

            <div className="col-md-6">
              <ul className="fsscMark">
                <li>
                  <img src="/common/imgs/company/FSSC02.jpg" alt="IAF인증마크" />
                </li>
                <li>
                  <img src="/common/imgs/company/FSSC03.jpg" alt="FSSC 22000 인증마크" />
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <div className="fsscDot">
                <p className="f20">ISO 22000(식품안전경영시스템)인증 획득(2011년 10월 8일)</p>
                <p className="f20">FSSC 22000 인증 획득(2015년 6월 4일)</p>
                <p className="f20">ISO 9001 인증 획득(2015년 6월 8일)</p>
                <p className="f20">
                  ㈜자연과사람들에서 생산되는 제품에 대한 최고의 식품안정성을 확보할 수 있는 시스템 구축 마련
                </p>
                <p className="f20">
                  식품 품질과 안전관리 체계를 갖추어 가면서 소비자에게 안전하고 우수한 제품을 만드는 국내 최고의 OEM/ODM
                  음료회사
                </p>
              </div>
            </div>
          </div>

          <div className="row lineTop mt100 pt100">
            <div className="col-md-4 col-4">
              <img src="/common/imgs/company/FSSC04.jpg" alt="" />
            </div>
            <div className="col-md-4 col-4">
              <img src="/common/imgs/company/FSSC05.jpg" alt="" />
            </div>
            <div className="col-md-4 col-4">
              <img src="/common/imgs/company/FSSC06.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fssc;
