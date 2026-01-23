import React, { useEffect } from "react";
import MetaEN from "../../../components/common/MetaEN";

const HaccpEN = () => {
  useEffect(() => {
    const initHoverReveal = () => {
      const hoveritem = document.querySelectorAll(".rr-hover-reveal-item");

      hoveritem.forEach((item) => {
        const moveImage = (e) => {
          const rect = item.getBoundingClientRect();
          const x = e.clientX - rect.x;
          const y = e.clientY - rect.y;
          if (item.children[1]) {
            item.children[1].style.transform = `translate(${x}px, ${y}px)`;
          }
        };

        const handleMouseLeave = () => {
          if (item.children[1]) {
            item.children[1].style.transform = ``; // 초기화
          }
        };

        item.addEventListener("mousemove", moveImage);
        item.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    initHoverReveal(); // 렌더 후 호출
  }, []);
  return (
    <>
      <MetaEN
        title={"Nature & People HACCP"}
        description={
          "Specialized in beverage OEM, ODM, Private Label, and B2B manufacturing, including exports. We expertly produce Aseptic Cartons, Gable Tops, and Cans."
        }></MetaEN>
      <section className="contant1100 mt200">
        <div className="row">
          <div className="col-lg-12">
            <p className="f52 fw600 grayn1 lh120 center">HACCP Certification</p>
          </div>
        </div>
      </section>

      <section>
        <div className="contant1160 mt100 mb200">
          <div className="row haccpBox">
            <div className="col-lg-6">
              <div>
                <p className="f40 fw600 f_pp grayn01 lh130 mt50">HACCP</p>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="text-right">
                <img src="/common/imgs/company/haccp01.png" alt="haccp인증마크" />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 contant900">
              <p className="f18 lh170 mt50">
                <span className="fw500">
                  Nature &amp; People has obtained HACCP certification from the Ministry of Food and Drug Safety (MFDS)
                  for all products manufactured at our Damyang plant.
                </span>
                <br />
                <br />
                <span className="fw500">
                  HACCP, short for Hazard Analysis and Critical Control Points, is widely known as the food industry’s
                  “Food Safety Management Certification Standard.”
                </span>{" "}
                It is a systematic and efficient safety management system that identifies potential hazards at every
                stage—from raw material procurement to production, storage, distribution, and final consumption—and
                establishes Critical Control Points (CCPs) to eliminate or reduce those risks.
                <br />
                <br />
                Unlike traditional quality control systems that focus primarily on inspection at the final production
                stage, HACCP manages the entire process, allowing hazards to be prevented in advance. This is why HACCP
                is regarded as a highly reliable food safety system.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 mt200">
              <p className="f52 fw600 grayn1 lh120 center">HACCP Certification Status (Damyang Plant)</p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt100">
              <div className="award-section__wrap">
                {[
                  {
                    date: "2014.05.30",
                    title: "Patient-Care Foods",
                    subtitle:
                      "Through HACCP certification, we ensure the safety and quality of specialized nutritional foods for patients.",
                    bg: "/common/imgs/company/haccp01.jpg",
                    alt: "환자용식품",
                  },
                  {
                    date: "2014.10.01",
                    title: "Livestock Products (3 Categories)",
                    subtitle:
                      "HACCP is applied to all livestock-processed products—including milk, processed milk, and ice cream mix—to maintain thorough hygiene and safety.",
                    bg: "/common/imgs/company/haccp02.jpg",
                    alt: "축산물가공품 3개유형",
                  },
                  {
                    date: "2014.10.06",
                    title: "Beverages (5 Categories)",
                    subtitle:
                      "With HACCP designation for various beverage types such as processed soy milk, soybean products, fruit & vegetable juice, and mixed beverages, we deliver consistent and safe products.",
                    bg: "/common/imgs/company/haccp03.jpg",
                    alt: "음료류 5개유형",
                  },
                  {
                    date: "2017.03.03",
                    title: "Coffee",
                    subtitle:
                      "From ingredient selection to final production, strict HACCP controls ensure hygienic and reliable coffee products.",
                    bg: "/common/imgs/company/haccp04.jpg",
                    alt: "커피",
                  },
                  {
                    date: "2017.11.24",
                    title: "Soy Milk Base",
                    subtitle:
                      "Our HACCP-certified soy milk base sets a new benchmark for quality in the soy milk industry.",
                    bg: "/common/imgs/company/haccp05.jpg",
                    alt: "원액두유",
                  },
                  {
                    date: "2018.01.17",
                    title: "Other Processed Foods",
                    subtitle:
                      "HACCP principles are applied to a wide range of processed food categories to reinforce product safety.",
                    bg: "/common/imgs/company/haccp06.jpg",
                    alt: "기타가공품",
                  },
                  {
                    date: "2019.05.27",
                    title: "Weight-Control Formulated Foods",
                    subtitle:
                      "All weight-control formulated products are HACCP-certified, ensuring both balanced nutrition and safety.",
                    bg: "/common/imgs/company/haccp07.jpg",
                    alt: "체중조절용 조제식품",
                  },
                  {
                    date: "2020.02.24",
                    title: "Liquid Tea",
                    subtitle:
                      "From raw material storage to packaging, we deliver hygienic and safe liquid tea products through strict HACCP management.",
                    bg: "/common/imgs/company/haccp08.jpg",
                    alt: "액상차",
                  },
                  {
                    date: "2021.03.25",
                    title: "Cereal Products",
                    subtitle:
                      "Applying HACCP across all cereal-processing stages ensures trustworthy, consistent product quality.",
                    bg: "/common/imgs/company/haccp09.jpg",
                    alt: "곡류가공품",
                  },
                  {
                    date: "2021.05.27",
                    title: "Sauces",
                    subtitle: "Our sauces are manufactured cleanly and safely under the HACCP management system.",
                    bg: "/common/imgs/company/haccp10.jpg",
                    alt: "소스",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`award-section__item item-${index + 1} p-relative rr-hover-reveal-item active`}>
                    <a href="#!">
                      <div className="award-section__inner-item d-flex justify-content-between align-items-center">
                        <div className="award-section__content d-flex align-items-center">
                          <div className="award-section__year">
                            <span>{item.date}</span>
                          </div>
                          <div className="award-section__title-box">
                            <h3 className="award-section__title lh150">{item.title}</h3>
                            <h4
                              className="award-section__subtitle lh150"
                              dangerouslySetInnerHTML={{ __html: item.subtitle }}></h4>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div
                      className="rr-hover-reveal-bg"
                      style={{ backgroundImage: `url(${item.bg})` }}
                      data-background={item.bg}
                      alt={item.alt}></div>
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

export default HaccpEN;
