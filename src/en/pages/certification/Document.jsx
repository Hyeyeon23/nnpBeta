import React from "react";
import Meta from "../../../components/common/Meta";

const DocumentEN = () => {
  return (
    <>
      <Meta title={"자연과사람들 식품안전인증현황 인증서"}></Meta>
      <section className="contant1100 mt200">
        <div className="row">
          <div className="col-lg-12">
            <p className="f52 fw600 grayn1 lh120 center">Certificates</p>
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
                    title: "Livestock Processed Products (Dairy Processing)",
                    desc: "HACCP Certificate",
                  },
                  { img: "n_haccp03_big.jpg", title: "Processed Soy Milk", desc: "HACCP Certificate" },
                  {
                    img: "n_haccp04_big.jpg",
                    title: "Soybean Processed Products",
                    desc: "HACCP Certificate",
                  },
                  {
                    img: "n_haccp05_big.jpg",
                    title: "Fruit & Vegetable Juice",
                    desc: "HACCP Certificate",
                  },
                  {
                    img: "n_haccp06_big.jpg",
                    title: "Fruit & Vegetable Beverages",
                    desc: "HACCP Certificate",
                  },
                  {
                    img: "n_haccp07_big.jpg",
                    title: "Mixed Beverages",
                    desc: "HACCP Certificate",
                  },
                  { img: "n_haccp08_big.jpg", title: "Coffee", desc: "HACCP Certificate" },
                  { img: "n_haccp09_big.jpg", title: "Soy Milk Base", desc: "HACCP Certificate" },
                  {
                    img: "n_haccp10_big.jpg",
                    title: "Other Processed Foods",
                    desc: "HACCP Certificate",
                  },
                  {
                    img: "n_haccp11_big.jpg",
                    title: "Livestock Processing Awards (Dairy Category)",
                    desc: "Recognized as an Outstanding HACCP Operation – 2016",
                  },
                  {
                    img: "n_haccp12_big.jpg",
                    title: "General Patient Nutrition Formula",
                    desc: "HACCP Certificate",
                  },
                  {
                    img: "n_haccp13_big.jpg",
                    title: "Diabetes Nutrition Formula",
                    desc: "HACCP Certificate",
                  },
                  {
                    img: "n_haccp14_big.jpg",
                    title: "Renal Disease Nutrition Formula",
                    desc: "HACCP Certificate",
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

export default DocumentEN;
