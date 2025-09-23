import React, { useEffect } from "react";

const Haccp = () => {
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
      <section className="contant1100 mt200">
        <div className="row">
          <div className="col-lg-12">
            <p className="f52 fw600 grayn1 lh120 center">HACCP 지정 및 인증</p>
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
                <img src="../common/imgs/company/haccp01.png" alt="haccp인증마크" />
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 contant900">
              <p className="f18 lh170 mt50">
                당사는{" "}
                <span className="fw500">담양공장에서 생산하는 전 제품에 대해(식품의약품안전처)로 부터 HACCP 인증</span>
                을 받았습니다.
                <br />
                <br />
                <span className="fw500">
                  HACCP이란 "HAZARD ANALYSIS CRITICAL CONTROL POINT"의 머리글자로서, 식품의 "식품안전관리인증기준" 으로
                  불리고 있습니다.
                </span>{" "}
                이는 식품의 원재료 구매에서부터 제조, 보관, 유통단계를 거쳐 최종소비자가 섭취하기까지의 전 과정에서
                발생할 수 있는 위해요소를 규명하고, 중점적인 관리점(CCP)을 결정하여 체계적이고 효율적으로 식품의
                안전성을 관리하는 체계입니다.
                <br />
                <br />이 시스템이 다른 품질관리체계보다 높은 신뢰를 받는 점은 기존의 품질관리가 최종 생산단계의 검사에
                치중되어 있는 것에 비하여 HACCP은 원인을 제공할 수 있는 전 과정을 관리하여 위해요소를 사전에 차단하기
                때문입니다.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 mt200">
              <p className="f52 fw600 grayn1 lh120 center">HACCP 지정 및 인증현황(담양공장)</p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt100">
              <div className="award-section__wrap">
                {[
                  {
                    date: "2014.05.30",
                    title: "환자용 식품",
                    subtitle: "HACCP 인증을 통해 환자 맞춤 영양식의 <br/>안전성과 품질을 보장합니다.",
                    bg: "/common/imgs/company/haccp01.jpg",
                    alt: "환자용식품",
                  },
                  {
                    date: "2014.10.01",
                    title: "축산물가공품 3개유형",
                    subtitle:
                      "우유류, 가공유류, 아이스크림 믹스류 등 축산물 가공 전 제품에 HACCP을 적용하여 위생을 철저히 관리합니다.",
                    bg: "/common/imgs/company/haccp02.jpg",
                    alt: "축산물가공품 3개유형",
                  },
                  {
                    date: "2014.10.06",
                    title: "음료류 5개유형",
                    subtitle:
                      "가공두유, 두류가공품, 과채주스, 혼합음료 등 다양한 음료류의 HACCP 지정으로 균일하고 안전한 제품을 제공합니다.",
                    bg: "/common/imgs/company/haccp03.jpg",
                    alt: "음료류 5개유형",
                  },
                  {
                    date: "2017.03.03",
                    title: "커피",
                    subtitle:
                      "원료 선별부터 제조 전 과정까지 HACCP 관리로 위생적이고 신뢰할 수 있는 커피 제품을 생산합니다.",
                    bg: "/common/imgs/company/haccp04.jpg",
                    alt: "커피",
                  },
                  {
                    date: "2017.11.24",
                    title: "원액두유",
                    subtitle: "HACCP 인증 원액두유로 두유 시장의 품질 기준을 제시합니다.",
                    bg: "/common/imgs/company/haccp05.jpg",
                    alt: "원액두유",
                  },
                  {
                    date: "2018.01.17",
                    title: "기타가공품",
                    subtitle: "다양한 가공식품군에도 HACCP 체계를 적용해 안전성을 확보했습니다.",
                    bg: "/common/imgs/company/haccp06.jpg",
                    alt: "기타가공품",
                  },
                  {
                    date: "2019.05.27",
                    title: "체중조절용 조제식품",
                    subtitle: "체중조절용 조제식품 전 제품 HACCP 인증으로 균형 잡힌 영양과 안전을 함께 제공합니다.",
                    bg: "/common/imgs/company/haccp07.jpg",
                    alt: "체중조절용 조제식품",
                  },
                  {
                    date: "2020.02.24",
                    title: "액상차",
                    subtitle: "원료 보관부터 포장까지 철저한 HACCP 관리로 위생적이고 안전한 액상차를 제공합니다.",
                    bg: "/common/imgs/company/haccp08.jpg",
                    alt: "액상차",
                  },
                  {
                    date: "2021.03.25",
                    title: "곡류가공품",
                    subtitle: "곡류 가공 전 과정에 HACCP 시스템을 적용하여 믿을 수 있는 품질을 보장합니다.",
                    bg: "/common/imgs/company/haccp09.jpg",
                    alt: "곡류가공품",
                  },
                  {
                    date: "2021.05.27",
                    title: "소스",
                    subtitle: "소스류 또한 HACCP 관리 체계에 따라 안전하고 청결하게 제조합니다.",
                    bg: "/common/imgs/company/haccp10.jpg",
                    alt: "소스",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`award-section__item item-${index + 1} p-relative rr-hover-reveal-item active`}>
                    <a href="project-details.html">
                      <div className="award-section__inner-item d-flex justify-content-between align-items-center">
                        <div className="award-section__content d-flex align-items-center">
                          <div className="award-section__year">
                            <span>{item.date}</span>
                          </div>
                          <div className="award-section__title-box">
                            <h3 className="award-section__title">{item.title}</h3>
                            <h4
                              className="award-section__subtitle"
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

export default Haccp;
