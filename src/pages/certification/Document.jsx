import React from "react";
import Meta from "../../components/common/Meta";

const Document = () => {
  return (
    <>
      <Meta title={"자연과사람들 식품안전인증현황 인증서"}></Meta>
      <section className="contant1100 mt200">
        <div className="row">
          <div className="col-lg-12">
            <p className="f52 fw600 grayn1 lh120 center">인증서</p>
          </div>
        </div>
      </section>

      <section className="team-section__area team-section team-section-2 overflow-hidden body-bg section-space">
        <div className="team-section">
          <div className="container">
            <div className="team-section__wrapper">
              <div className="row mb-minus-30">
                {[
                  {
                    img: "n_haccp02_big.jpg",
                    title: "축산물가공업(유가공업)",
                    desc: "안전관리인증기준[HACCP] 적용 확인서",
                  },
                  { img: "n_haccp03_big.jpg", title: "가공두유", desc: "식품안전관리인증기준[HACCP]적용업소 확인서" },
                  { img: "n_haccp04_big.jpg", title: "두류가공품", desc: "식품안전관리인증기준(HACCP)적용업소 인증서" },
                  { img: "n_haccp05_big.jpg", title: "과채주스", desc: "식품안전관리인증기준(HACCP)적용업소 인증서" },
                  { img: "n_haccp06_big.jpg", title: "과채음료", desc: "식품안전관리인증기준[HACCP] 적용 확인서" },
                  { img: "n_haccp07_big.jpg", title: "혼합음료", desc: "식품안전관리기준(HACCP)적용업소 인증서" },
                  { img: "n_haccp08_big.jpg", title: "커피", desc: "식품안전관리기준(HACCP)적용업소 인증서" },
                  { img: "n_haccp09_big.jpg", title: "원액두유", desc: "식품안전관리기준(HACCP)적용업소 인증서" },
                  { img: "n_haccp10_big.jpg", title: "기타 가공품", desc: "식품안전관리기준(HACCP)적용업소 인증서" },
                  {
                    img: "n_haccp11_big.jpg",
                    title: "가공(유가공업)분야 상장",
                    desc: "16년도 축산물 HACCP 운용 모범업소",
                  },
                  {
                    img: "n_haccp12_big.jpg",
                    title: "일반 환자용 균형영양조제식품",
                    desc: "식품안전관리기준(HACCP)적용업소 인증서",
                  },
                  {
                    img: "n_haccp13_big.jpg",
                    title: "당뇨환자용 영양조제식품",
                    desc: "식품안전관리기준(HACCP)적용업소 인증서",
                  },
                  {
                    img: "n_haccp14_big.jpg",
                    title: "신장질환자용 영양조제식품",
                    desc: "식품안전관리기준(HACCP)적용업소 인증서",
                  },
                ].map((item, idx) => (
                  <div className="col-lg-4 col-md-6" key={idx}>
                    <div className="team-section__item mb-30">
                      <div className="team-section__thumb">
                        <img src={`/common/imgs/company/${item.img}`} alt="haccp인증마크" />
                      </div>
                      <div className="team-section__content">
                        <h3 className="team-section__title">
                          <a href={`/common/imgs/company/${item.img}`}>{item.title}</a>
                        </h3>
                        <p className="team-section__position">{item.desc}</p>
                      </div>
                      <div className="team-section__social">
                        <a href={`/common/imgs/company/${item.img}`}>
                          <svg
                            width="25"
                            height="26"
                            viewBox="0 0 25 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M5.65625 19.6562L19.2327 6.0798"
                              stroke="#453030"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                            <path
                              d="M7.92188 6.08008L19.2356 6.08008L19.2356 17.3938"
                              stroke="#453030"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Document;
