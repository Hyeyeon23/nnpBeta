import React from "react";

const Osse = () => {
  return (
    <>
      <section className="contant1100 mt200">
        <div className="row">
          <div className="col-lg-7">
            <p className="f60 fw600 grayn1 lh120 f_pp">
              Total Service Group
              <br />
              for Customers
            </p>
            <p className="mt50 family_dcf_logo">
              <img src="/common/imgs/company/osse01.png" alt="OSSE Logo" />
            </p>
          </div>
          <div className="col-lg-5">
            <p className="f20 fw400 grayn1 lh170 mt20m mb30m">
              식품, 리빙, 뷰티 분야에서 30년 넘게 다양한 B2C 제품의 유통영업 네트워크를 쌓아온 오쎄는 이커머스 플랫폼
              운영과 오쎄만의 차별화된 브랜드, 콘텐츠 개발을 통해 새로운 고객가치를 창출해가는 토탈서비스 그룹입니다.
            </p>
          </div>
        </div>

        <div className="row familyBox_top">
          <div className="col-lg-3 mt100 wow bounceInLeft wView" data-wow-delay="0.5s">
            <img
              className="mt70 img100"
              src="/common/imgs/company/osse02.jpg"
              alt="이데이몰 밸런스루트관 모바일이미지"
            />
          </div>
          <div className="col-lg-5 mt100 wow bounceInUp" data-wow-delay="1s">
            <img className="img100" src="/common/imgs/company/osse03.jpg" alt="런드리서핑 제품" />
          </div>
          <div className="col-lg-4 mt100 wow bounceInRight" data-wow-delay="1.5s">
            <img className="mt30 img100" src="/common/imgs/company/osse04.png" alt="택배상자와 수야무" />
          </div>
        </div>
      </section>

      <section>
        <div className="contant1160 mt100 mb200">
          <div className="row familyBox">
            <div className="col-lg-6">
              <div>
                <p className="f40 fw600 f_pp grayn01 lh130">
                  <span className="orange">O</span>pening <span className="orange">S</span>pace,
                  <br />
                  <span className="orange">S</span>haping <span className="orange">E</span>xperience
                </p>
                <p className="f16 grayn1 mt30 lh200">
                  ㈜정식품의 연구 노하우를 바탕으로 하여 '아름답고 건강한 생활문화 기업' 이라는 취지 아래 설립된 화장품
                  및 생활용품 전문 기업입니다. 화장품 사업분야를 맡고 있는 오쎄 화장품에서는 순수 한국브랜드로 시작하여
                  총 90여 종의 다양한 제품을 출시하였으며 향후 계속되는 연구개발을 통해 다양한 제품의 개발 과 품질면에서
                  앞서가는 기업으로 자리매김 하기 위하여 최선을 다하고 있습니다. 광고 대행 업무분야를 담당하고 있는 오쎄
                  기획에서는 광고 기획 및 광고물 제작, 사보 제작 업무 등을 대행하고 있습니다.
                </p>
                <a href="http://www.osse.co.kr" className="title-btn rr-btn btn-transparent mt30">
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                  오쎄사이트 바로가기
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt30m">
                <video className="video-container round20" autoPlay loop playsInline muted style={{ width: "100%" }}>
                  <source src="http://www.osse.co.kr/img/main/conceptmotion_600.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="col-md-12 mt50 mb20"></div>

            <div className="col-md-4 mb20">
              <ul className="load_ul">
                <li>
                  <img src="/common/imgs/company/load_point.jpg" alt="" />
                </li>
                <li className="f16">
                  <p className="fw600 f16 grayn1 mb10">주소</p>
                  <span className="lh150">서울특별시 성동구 아차산로 121</span>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb20">
              <ul className="load_ul">
                <li>
                  <img src="/common/imgs/company/load_call.jpg" alt="" />
                </li>
                <li className="f16">
                  <p className="fw600 f16 grayn1 mb10">TEL/FAX</p>
                  <span className="lh150">02-318-3217 / 02-318-3216</span>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb20">
              <ul className="load_ul">
                <li>
                  <img src="../common/imgs/company/load_cs.jpg" alt="" />
                </li>
                <li className="f16">
                  <p className="fw600 f16 grayn1 mb10">고객상담실 / 수신자 요금 부담</p>
                  080-999-0909 / 080-930-8888
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Osse;
