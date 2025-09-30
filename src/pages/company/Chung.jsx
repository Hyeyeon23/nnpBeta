import React from "react";
import Meta from "../../components/common/Meta";

const Chung = () => {
  return (
    <>
      <Meta title={"자연과사람들 관련사 정식품"}></Meta>
      <section className="contant1100 mt200">
        <div className="row">
          <div className="col-lg-6">
            <p className="f60 fw600 grayn1 lh120">
              인류건강문화에
              <br />이 몸 바치고저
            </p>
            <p className="mt50 family_dcf_logo">
              <img src="/common/imgs/company/dcf05.png" alt="DCF Logo" />
            </p>
          </div>
          <div className="col-lg-6">
            <p className="f20 fw400 grayn1 lh170 mt20m mb30m">
              ㈜정식품은 “인류건강문화에 이 몸 바치고저” 라는
              <br />
              창업주의 생명존중정신을 바탕으로
              <br />
              인류건강문화에 기여하는 기업입니다.
              <br />
              앞으로도 ㈜정식품은 인류의 건강한 미래를 지향하는
              <br />
              Global 종합식품기업으로 정진해 나아갈 것을 약속합니다.
            </p>
          </div>
        </div>

        {/* 2025-09-29 div추가, mView클래스추가 */}
        <div className="wView">
          <div className="row familyBox_top">
            <div className="col-lg-4 mt100 wow bounceInLeft" data-wow-delay="0.5s">
              <img
                className="mt100 img100"
                src="/common/imgs/company/dcf01.png"
                alt="엄마와아이의 다정한모습, 행복한 가족모습"
              />
            </div>
            <div className="col-lg-5 mt100 wow bounceInUp" data-wow-delay="0.8s">
              <img className="img100" src="/common/imgs/company/dcf02.jpg" alt="베지밀에이,비, 뼈에좋은칼슘두유3종" />
            </div>
            <div className="col-lg-3 mt100 wow bounceInRight wView" data-wow-delay="1.1s">
              <img className="mt200 img100" src="/common/imgs/company/dcf03.jpg" alt="현미경사진" />
            </div>
          </div>
        </div>
        <div className="row mView">
          <div className="col-lg-12">
            <img
              className="mt100 img100"
              src="/common/imgs/company/dcf01_m.png"
              alt="엄마와아이의 다정한모습, 행복한 가족모습"
            />
          </div>
        </div>
        {/* //2025-09-29 wView div 추가 */}
      </section>

      <section>
        <div className="contant1160 mt100 mb200">
          <div className="row familyBox">
            <div className="col-lg-6">
              <div>
                <p className="family_logo_dcf">
                  <img src="/common/imgs/company/dcf05.png" alt="정식품 CI" />
                </p>
                <p className="f16 grayn1 mt30 lh200">
                  우리나라 두유 역사의 첫 장을 연 ㈜정식품은 1973년 설립 이래 한국 및 세계의 두유 산업을 선도해온 Global
                  종합식품기업입니다. 정식품은 인류건강과 지구환경을 지키는 정직한 식품을 제공하여 균형잡힌 건강문화와
                  생명존중의 가치 확산에 기여하며 오리지널 두유 ‘베지밀’, 국내 최초 경장영양식 선도 브랜드 ‘그린비아’,
                  건강한 식재료 ‘간단요리사’, 지리산 미네랄워터 ‘심천수’ 등의 브랜드를 선보이고 있습니다. 2024년 12월
                  현재, 전국에 13개 영업소를 중심으로 400여개 대리점이 활발한 영업활동을 하고 있습니다.
                </p>
                <a href="http://www.vegemil.co.kr" className="title-btn rr-btn btn-transparent mt30">
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                  정식품사이트 바로가기
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt30m">
                <img className="round20" src="/common/imgs/company/company06.jpg" alt="" />
              </div>
            </div>

            <div className="col-md-12 mt50">
              <p className="fw600 f20 grayn1 mb20">본사/공장/중앙연구소</p>
            </div>

            <div className="col-md-4 mb20">
              <ul className="load_ul">
                <li>
                  <img src="/common/imgs/company/load_point.jpg" alt="" />
                </li>
                <li className="f16">
                  <p className="fw600 f16 grayn1 mb10">주소</p>
                  <span className="lh150">
                    충청북도 청주시 흥덕구 산단로 124
                    <br />
                    (우)28446
                  </span>
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
                  <span className="lh150">043-270-8800 / 043-264-1097</span>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb20">
              <ul className="load_ul">
                <li>
                  <img src="/common/imgs/company/load_map.jpg" alt="" />
                </li>
                <li className="f16">
                  <p className="fw600 f16 grayn1 mb10">오시는 길</p>
                  회현역 1번출구, 도보 2분
                </li>
              </ul>
            </div>

            <div className="col-md-12 mt50">
              <p className="fw600 f20 grayn1 mb20">서울사무소</p>
            </div>

            <div className="col-md-4">
              <ul className="load_ul">
                <li>
                  <img src="/common/imgs/company/load_point.jpg" alt="" />
                </li>
                <li className="f16">
                  <p className="fw600 f16 grayn1 mb10">주소</p>
                  <span className="lh150">
                    서울특별시 중구 퇴계로 6길 3-30 <br />
                    (우)04634
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <ul className="load_ul">
                <li>
                  <img src="/common/imgs/company/load_call.jpg" alt="" />
                </li>
                <li className="f16">
                  <p className="fw600 f16 grayn1 mb10">TEL/FAX</p>
                  <span className="lh150">02-3484-9300 / 02-553-0838</span>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <ul className="load_ul">
                <li>
                  <img src="/common/imgs/company/load_map.jpg" alt="" />
                </li>
                <li className="f16">
                  <p className="fw600 f16 grayn1 mb10">고객상담실 / 수신자 요금 부담</p>
                  <span className="lh150">02-553-8888 / 080-930-8888</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chung;
