import React from "react";
import Meta from "../../../components/common/Meta";

const osseEN = () => {
  return (
    <>
      <Meta title={"자연과사람들 관련사 오쎄"}></Meta>
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
              For over 30 years, Osse has built a distribution and sales network for a wide range of B2C products in the
              food, living, and beauty sectors. As a total service group, we create new customer value through the
              operation of e-commerce platforms and the development of Osse’s unique brands and content.
            </p>
          </div>
        </div>

        {/* 2025-09-29 div추가, mView클래스추가 */}
        <div className="wView">
          <div className="row familyBox_top">
            <div className="col-lg-3 mt100 wow bounceInLeft" data-wow-delay="0.5s">
              <img
                className="mt70 img100"
                src="/common/imgs/company/osse02.jpg"
                alt="이데이몰 밸런스루트관 모바일이미지"
              />
            </div>
            <div className="col-lg-5 mt100 wow bounceInUp" data-wow-delay="0.8s">
              <img className="img100" src="/common/imgs/company/osse03.jpg" alt="런드리서핑 제품" />
            </div>
            <div className="col-lg-4 mt100 wow bounceInRight" data-wow-delay="1.1s">
              <img className="mt30 img100" src="/common/imgs/company/osse04.png" alt="택배상자와 수야무" />
            </div>
          </div>
        </div>
        <div className="row mView">
          <div className="col-lg-12">
            <img
              className="mt100 img100"
              src="/common/imgs/company/osse01_m.png"
              alt="엄마와아이의 다정한모습, 행복한 가족모습"
            />
          </div>
        </div>
        {/* //2025-09-29 div추가, mView클래스추가 */}
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
                  Based on the research expertise of Dr. Chung’s Food, Osse was established as a cosmetics and lifestyle
                  company under the vision of creating a “beautiful and healthy lifestyle.”
                  <br />
                  OSSE Cosmetics, launched as a homegrown Korean brand, has introduced more than 90 products and
                  continues to advance through ongoing R&D to lead in both product innovation and quality.
                  <br />
                  Osse Creative manages advertising and media production, offering services ranging from advertising
                  planning to the creation of promotional materials and corporate publications.
                </p>
                <a href="http://www.osse.co.kr" className="title-btn rr-btn btn-transparent mt30">
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                  Go to OSSE
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
                  <p className="fw600 f16 grayn1 mb10">Address</p>
                  <span className="lh150">
                    121 Achasan-ro, <br />
                    Seongdong-gu, Seoul, <br />
                    Republic of Korea
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
                  <span className="lh150">02-318-3217 / 02-318-3216</span>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb20">
              <ul className="load_ul">
                <li>
                  <img src="/common/imgs/company/load_cs.jpg" alt="" />
                </li>
                <li className="f16">
                  <p className="fw600 f16 grayn1 mb10">
                    Customer Service
                    <br />
                    (Toll-Free Available)
                  </p>
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

export default osseEN;
