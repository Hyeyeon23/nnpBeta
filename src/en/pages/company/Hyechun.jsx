import React from "react";
import MetaEN from "../../../components/common/MetaEN";
const HyechunEN = () => {
  return (
    <>
      <MetaEN
        title={"Nature & People HCSF"}
        description={
          "Specialized in beverage OEM, ODM, Private Label, and B2B manufacturing, including exports. We expertly produce Aseptic Cartons, Gable Tops, and Cans."
        }></MetaEN>
      <section className="contant1100 mt200">
        <div className="row">
          <div className="col-lg-7">
            <p className="f60 fw600 grayn1 lh120 f_pp">
              A Warm Journey Together <br />
              for Future Talent
            </p>
            <p className="mt50 family_dcf_logo">
              <img src="/common/imgs/company/hcsf01.png" alt="혜춘장학회 로고" />
            </p>
          </div>
          <div className="col-lg-5">
            <p className="f20 fw400 grayn1 lh170 mt20m mb30m">
              The Hyechun Scholarship Foundation has supported outstanding students for over 40 years, enabling them to
              focus on their studies.
              <br />
              We accompany the journey of future leaders who will bring meaningful and positive change across all
              sectors of society.
            </p>
          </div>
        </div>

        {/* 2025-09-29 div추가, mView클래스추가 */}
        <div className="wView">
          <div className="row familyBox_top">
            <div className="col-lg-3 mt100 wow bounceInLeft wView" data-wow-delay="0.5s">
              <img
                className="mt70 img100"
                src="/common/imgs/company/hcsf02.png"
                alt="이데이몰 밸런스루트관 모바일이미지"
              />
            </div>
            <div className="col-lg-5 mt100 wow bounceInUp" data-wow-delay="0.8s">
              <img className="img100" src="/common/imgs/company/hcsf03.jpg" alt="런드리서핑 제품" />
            </div>
            <div className="col-lg-4 mt100 wow bounceInRight" data-wow-delay="1.1s">
              <img className="mt70 img100" src="/common/imgs/company/hcsf04.jpg" alt="택배상자와 수야무" />
            </div>
          </div>
        </div>
        <div className="row mView">
          <div className="col-lg-12">
            <img
              className="mt100 img100"
              src="/common/imgs/company/hcsf01_m.png"
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
                <p className="f40 fw600 f_pp grayn01 lh130">Hyechun Scholarship Foundation</p>
                <p className="f16 grayn1 mt30 lh200">
                  The Hyechun Scholarship Foundation was established on December 4, 1984, by Dr. Jae-Won Chung, founder
                  of Dr. Chung’s Food Co., Ltd. Grounded in his commitment to fostering talented individuals who can
                  contribute to national development and fulfill the company’s social responsibility, the foundation has
                  continued its mission for decades.
                  <br />
                  Since 1985, the foundation’s Scholarship program has been dedicated to helping more students pursue
                  their dreams and grow into outstanding professionals.
                  <br />
                  As of June 2024, a total of 2,601 students have received scholarships, with the cumulative amount
                  exceeding KRW 2.995 billion.
                  <br />
                  In addition, the foundation has supported numerous academic research activities, resulting in the
                  publication of papers in various reputable academic journals.
                </p>
                <a href="https://www.hcsf.co.kr/" className="title-btn rr-btn btn-transparent mt30">
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                  Go to Hyechun Scholarship Foundation
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt30m">
                <img
                  className="video-container round20"
                  src="/common/imgs/company/hcsf05.jpg"
                  alt=""
                  style={{ width: "100%" }}
                />
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
                    3-30, Toegye-ro 6-gil, <br />
                    Jung-gu, Seoul, <br />
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
                  <span className="lh150">02-755-1234 / 02-533-0839</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row"></div>
        </div>
      </section>
    </>
  );
};

export default HyechunEN;
