import React from "react";

const Hyechun = () => {
  return (
    <>
      <section className="contant1100 mt200">
        <div className="row">
          <div className="col-lg-7">
            <p className="f60 fw600 grayn1 lh120 f_pp">
              미래 인재를 위한
              <br />
              따뜻한 동행
            </p>
            <p className="mt50 family_dcf_logo">
              <img src="../common/imgs/company/hcsf01.png" alt="혜춘장학회 로고" />
            </p>
          </div>
          <div className="col-lg-5">
            <p className="f20 fw400 grayn1 lh170 mt20m mb30m">
              혜춘장학회는 40년 넘게 우수한 인재들이 학업에 집중할 수 있도록 장학금을 지원해왔습니다. 사회의 모든
              영역에서 따뜻한 변화를 이끌어갈 인재들의 여정을 함께합니다.
            </p>
          </div>
        </div>

        <div className="row familyBox_top">
          <div className="col-lg-3 mt100 wow bounceInLeft wView" data-wow-delay="0.5s">
            <img className="mt70 img100" src="../common/imgs/company/hcsf02.png" alt="혜춘장학회 이미지1" />
          </div>
          <div className="col-lg-5 mt100 wow bounceInUp" data-wow-delay="1s">
            <img className="img100" src="../common/imgs/company/hcsf03.jpg" alt="혜춘장학회 이미지2" />
          </div>
          <div className="col-lg-4 mt100 wow bounceInRight" data-wow-delay="1.5s">
            <img className="mt70 img100" src="../common/imgs/company/hcsf04.jpg" alt="혜춘장학회 이미지3" />
          </div>
        </div>
      </section>

      <section>
        <div className="contant1160 mt100 mb200">
          <div className="row familyBox">
            <div className="col-lg-6">
              <div>
                <p className="f40 fw600 f_pp grayn01 lh130">재단법인 혜춘장학회</p>
                <p className="f16 grayn1 mt30 lh200">
                  재단법인 혜춘장학회는 (주)정식품의 창업자이신 의학박사 정재원 회장께서 유능한 인재를 양성함으로써
                  국가발전에 기여하고 기업의 사회적 책임을 다 하려는 평소의 뜻을 실현하기 위해 1984년 12월 4일
                  설립하였습니다. 1985년부터 지급하고 있는 장학금지원사업은 보다 많은 학생들이 꿈을 펼치며 우수한 인재로
                  성장할 수 있도록 하는데 목적이 있습니다. 2024년 6월 현재 총 2,601명의 학생들에게 지급한 장학금
                  누계액은 약 29억9500만원을 넘어서고 있습니다. 또한, 많은 학술연구활동을 지원하여 여러 유수 학술지에
                  논문이 발표된 바 있습니다.
                </p>
                <a href="https://www.hcsf.co.kr/" className="title-btn rr-btn btn-transparent mt30">
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                  혜춘장학회사이트 바로가기
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt30m">
                <video className="video-container round20" autoPlay loop playsInline muted style={{ width: "100%" }}>
                  <source src="https://www.osse.co.kr/img/main/conceptmotion_600.mp4" type="video/mp4" />
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
                  <span className="lh150">서울시특별시 중구 퇴계로 6길 3-30</span>
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
                  <span className="lh150">02-755-1234 / 02-533-0839</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hyechun;
