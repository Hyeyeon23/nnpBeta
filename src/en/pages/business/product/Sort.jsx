import React, { useEffect, useState } from "react";
import Meta from "../../../../components/common/Meta";
import FooterReactEN from "../../../../components/common/FooterReactEN";
import HeaderEN from "../../../../components/common/HeaderEN";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { jarallax } from "jarallax";
import { animateScroll as scroll } from "react-scroll";
import useSwiper from "../../../../hooks/useSwiper";
import { testimonialSwiperOptions } from "../../../../hooks/testimonialSwiperOptions ";
import { destroyJarallax, initJarallax } from "../../../../hooks/useJallax";
const datas = {
  soy: {
    title: "Nature & People Soy Milk",
    crumble: " Soy Milk",
    name: "Soy Milk Base Production",
    keywords: { pre: "#utrition of Soybeans", mid: "#Customized", last: "#Korea’s First" },
    heroImg: "/common/imgs/business/pro01_01.jpg",
    heroImgM: "/common/imgs/business/proT_01.jpg",
    images: {
      pre: "/common/imgs/business/pro01_02.jpg",
      mid: "/common/imgs/business/pro01_03.jpg",
      last: "/common/imgs/business/pro01_04.jpg",
    },
    alt: {
      hero: "대두와 두유",
      pre: "두유병과 곡물들",
      mid: "정식품 베지밀 에이 비 제품",
      last: "매일두유",
    },
    descs: {
      sec01: `Plant-based beverages trusted for decades,<br/>built on Korea’s original soy milk technology`,
      sec02: `We manufacture soy milk bases that preserve the natural taste and nutrition of soybeans. Through rigorous raw-material selection, hygienic processing, and differentiated recipe development, we deliver the value of plant-based nutrition.`,
      sec03: `							Backed by long-standing know-how and technical capability, Nature & People creates new opportunities for our partners and a diverse range of plant-based beverages for consumers. We will continue to lead the plant-based beverage market with safety and trust at our core.`,
    },
  },
  protein: {
    title: "Nature & People Protein Drinks",
    crumble: " Protein",
    name: "Protein Drinks",
    keywords: { pre: "#Drinkable", mid: "#In One Pack", last: "#Anytime, Anywhere" },
    heroImg: "/common/imgs/business/pro02_01.jpg",
    heroImgM: "/common/imgs/business/proT_02.jpg",
    images: {
      pre: "/common/imgs/business/pro02_02.jpg",
      mid: "/common/imgs/business/pro02_03.jpg",
      last: "/common/imgs/business/pro02_04.jpg",
    },
    alt: {
      hero: "대두와 두유",
      pre: "두유병과 곡물들",
      mid: "정식품 베지밀 에이 비 제품",
      last: "매일두유",
    },
    descs: {
      sec01: `"From fast absorption to slow digestion, <br/>customized high-protein beverages"`,
      sec02: `We manufacture high-protein, low-sugar protein drinks tailored to evolving consumer lifestyles. We propose recipes suited to sports, diet, wellness, and nutritious snacking, pursuing the right balance between nutrition and taste.`,
      sec03: `
							With extensive OEM/ODM experience, Nature &amp; People reflects the latest trends and proposes tailored planning to strengthen our partners’ brand value and competitiveness.

							`,
    },
  },
  balance: {
    title: "Nature & People Balanced Nutrition Formula",
    crumble: "Balanced Nutrition Formula",
    name: "Balanced Nutrition Formula",
    keywords: { pre: "#Nutrition-Focused", mid: "#Healthy Habits", last: "#Balanced Design" },
    heroImg: "/common/imgs/business/pro03_01.jpg",
    heroImgM: "/common/imgs/business/proT_03.jpg",
    images: {
      pre: "/common/imgs/business/pro03_02.jpg",
      mid: "/common/imgs/business/pro03_03.jpg",
      last: "/common/imgs/business/pro03_04.jpg",
    },
    alt: {
      hero: "대두와 두유",
      pre: "두유병과 곡물들",
      mid: "정식품 베지밀 에이 비 제품",
      last: "매일두유",
    },
    descs: {
      sec01: `"Patient & senior nutrition beverages scientifically balanced nutrition"`,
      sec02: `Nature & People specializes in balanced nutrition formulas for patients and seniors. For those who need nutritional support, we design protein, vitamins, and minerals scientifically to deliver safe, well-balanced beverages.`,
      sec03: `
							We manufacture based on professional formulation design so that essential daily nutrition can be consumed with confidence. Together with B2B partners, we plan products that consider diverse ages and living environments, and supply them reliably through OEM/ODM.
							`,
    },
  },
  particle: {
    title: "Nature & People Particle Drink",
    crumble: " Particle Drink",
    name: "Particle Drink",
    keywords: { pre: "#Chewy", mid: "#Bouncy Inclusions", last: "#Fun Texture" },
    heroImg: "/common/imgs/business/pro04_01.jpg",
    heroImgM: "/common/imgs/business/proT_04.jpg",
    images: {
      pre: "/common/imgs/business/pro04_02.jpg",
      mid: "/common/imgs/business/pro04_03.jpg",
      last: "/common/imgs/business/pro04_04.jpg",
    },
    alt: {
      hero: "파티클 있는 음료와 과일들",
      pre: "두유병과 곡물들",
      mid: "정식품 베지밀 에이 비 제품",
      last: "매일두유",
    },
    descs: {
      sec01: `"RTD beverages with inclusions for a chewy experience Coconut jelly, aloe, and more"`,
      sec02: `Particle drinks are a category that offers new textures and unique enjoyment, especially among younger consumers. Leveraging our OEM/ODM experience, Nature & People flexibly plans and supplies particle beverages using coconut jelly, aloe, and other inclusions.`,
      sec03: `A distinctive mouthfeel expands the enjoyment of drinking. In a market seeking new experiences, we lead differentiated value based on proprietary technology.
`,
    },
  },
  sikhye: {
    title: " Nature & People Sikhye",
    crumble: "Sikhye",
    name: "Sikhye Manufacturing",
    keywords: { pre: "#Traditional", mid: "#Sweetness Adjustable", last: "#Preference Respected" },
    heroImg: "/common/imgs/business/pro05_01.jpg",
    heroImgM: "/common/imgs/business/proT_05.jpg",
    images: {
      pre: "/common/imgs/business/pro05_02.jpg",
      mid: "/common/imgs/business/pro05_03.jpg",
      last: "/common/imgs/business/pro05_04.jpg",
    },
    alt: {
      hero: "파티클 있는 음료와 과일들",
      pre: "두유병과 곡물들",
      mid: "정식품 베지밀 에이 비 제품",
      last: "매일두유",
    },
    descs: {
      sec01: `Traditional Sikhye with real rice grains Healthier with low sugar & low calories`,
      sec02: `Nature & People produces traditional Sikhye with intact rice grains through modern technology and hygienic processes. While preserving the natural sweetness of the traditional style, we developed low-sugar, low-calorie recipes that can be enjoyed with confidence by all ages.`,
      sec03: `While retaining the appeal of traditional Sikhye, we reflect modern lifestyles by offering options with or without rice grains and adjustable sweetness. In addition, can packaging enhances portability and long shelf life so it can be enjoyed anytime, anywhere.`,
    },
  },
  sauce: {
    title: "Nature & People Sauce & Broth",
    crumble: "Sauce & Broth",
    name: "Sauce & Broth",
    keywords: { pre: "#Liquid", mid: "#HMR", last: "#Finishing Touch" },
    heroImg: "/common/imgs/business/pro06_01.jpg",
    heroImgM: "/common/imgs/business/proT_06.jpg",
    images: {
      pre: "/common/imgs/business/pro06_02.jpg",
      mid: "/common/imgs/business/pro06_03.jpg",
      last: "/common/imgs/business/pro06_04.jpg",
    },
    alt: {
      hero: "파티클 있는 음료와 과일들",
      pre: "풀무원 요리육수 전골",
      mid: "반죽에 토마토소스",
      last: "담백한 채소육수와 요리",
    },
    descs: {
      sec01: `Versatile liquid broths Ideal for foodservice, HMR, and catering in large formats`,
      sec02: `Sauces and broths are widely used across foodservice, institutional catering, and HMR (home meal replacement). Through liquid sauces and broths, Nature & People improves cooking convenience and elevates flavor consistency.`,
      sec03: `Sauces and broths are highly versatile and can be applied in various ways in a convenient liquid format with rich flavor. Optimized for large-volume operations, they support cooking efficiency and consistent taste.`,
    },
  },
  sterilized: {
    title: "Nature & People UHT Milk",
    crumble: "UHT Milk",
    name: "UHT Milk",
    keywords: { pre: "#UHT", mid: "#Freshness", last: "#Shelf-Stable" },
    heroImg: "/common/imgs/business/pro07_01.jpg",
    heroImgM: "/common/imgs/business/proT_07.jpg",
    images: {
      pre: "/common/imgs/business/pro07_02.jpg",
      mid: "/common/imgs/business/pro07_03.jpg",
      last: "/common/imgs/business/pro07_04.jpg",
    },
    alt: {
      hero: "파티클 있는 음료와 과일들",
      pre: "유제품을 만드는 과정",
      mid: "파스퇴르 무항생제 바른목장스",
      last: "바나나맛 우유",
    },
    descs: {
      sec01: `"UHT milk in various sizes Shelf-stable for long-lasting convenience"`,
      sec02: `Nature & People produces UHT (ultra-high temperature) milk with minimized nutrient loss and enhanced safety. Shelf-stable storage helps maintain quality for longer periods. Custom production is available in a wide range of sizes—from single-serve to large formats—for foodservice and institutional use.`,
      sec03: `Our shelf-stable milk solutions support diverse partner requirements with convenient distribution and storage. Prioritizing safety and quality, we provide products you can trust—widely used across catering and foodservice—backed by hygienic processes and rigorous quality control.`,
    },
  },
  juice: {
    title: "Nature & People Juice",
    crumble: "Juice",
    name: "Juice",
    keywords: { pre: "#Fruit", mid: "#Vegetable", last: "#Blends" },
    heroImg: "/common/imgs/business/pro08_01.jpg",
    heroImgM: "/common/imgs/business/proT_08.jpg",
    images: {
      pre: "/common/imgs/business/pro08_02.jpg",
      mid: "/common/imgs/business/pro08_03.jpg",
      last: "/common/imgs/business/pro08_04.jpg",
    },
    alt: {
      hero: "다양한 주스류 생산이 가능합니다.",
      pre: "유제품을 만드는 과정",
      mid: "파스퇴르 무항생제 바른목장스",
      last: "바나나맛 우유",
    },
    descs: {
      sec01: `Fruit & vegetable juices designed for taste and wellness Fruit–vegetable blending available`,
      sec02: `Based on fruit and vegetable ingredients, we realize a wide range of recipes aligned with your brand concept. We can accommodate diverse requests, collaborate to optimize the product, and deliver reliable quality.

`,
      sec03: `As an OEM/ODM specialist, Nature & People faithfully reflects our partners’ ideas and concepts in finished beverages. We also review alternatives suited to the intended market and positioning. Through safe processing, we deliver reliable quality and support brands in bringing products to market as envisioned.`,
    },
  },
  coffee: {
    title: "Nature & People Coffee",
    crumble: "Coffee",
    name: "Coffee Manufacturing",
    keywords: { pre: "#RTD Coffee", mid: "#Convenient", last: "#Various Flavors" },
    heroImg: "/common/imgs/business/pro09_01.jpg",
    heroImgM: "/common/imgs/business/proT_01.jpg",
    images: {
      pre: "/common/imgs/business/pro09_02.jpg",
      mid: "/common/imgs/business/pro09_03.jpg",
      last: "/common/imgs/business/pro09_04.jpg",
    },
    alt: {
      hero: "커피를 로스팅하는 모습",
      pre: "유제품을 만드는 과정",
      mid: "파스퇴르 무항생제 바른목장스",
      last: "바나나맛 우유",
    },
    descs: {
      sec01: `"A broad RTD lineup—from black to latte Customized RTD production"`,
      sec02: `We deliver a clean and stable taste while preserving the intrinsic aroma and flavor of coffee beans, with customized production in RTD (ready-to-drink) formats. Through OEM/ODM, we can develop a coffee lineup aligned with your brand concept, supporting both café-dedicated and consumer channels.`,
      sec03: `RTD coffee has become a convenient daily beverage and continues to grow steadily in domestic and global markets. As an OEM/ODM specialist, Nature & People quickly provides recipes, packaging options, and distribution formats tailored to partner needs.`,
    },
  },
};
const SortEN = ({ lang, setLang }) => {
  const { type } = useParams();
  const [data, setData] = useState(datas[type]);

  useSwiper(".testmonial2-slide-active", testimonialSwiperOptions);
  useEffect(() => {
    if (!data?.heroImg) return;

    destroyJarallax(".jarallax");

    const t = setTimeout(() => {
      initJarallax(".jarallax", 0.2);
    }, 1);

    return () => {
      clearTimeout(t);
      destroyJarallax(".jarallax");
    };
  }, [data]);
  useEffect(() => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }, [data]);

  console.log(data);
  return (
    <>
      <Meta title={data?.title}></Meta>
      <HeaderEN lang={lang} setLang={setLang}></HeaderEN>
      <div id="smooth-wrapper" className="body-bg">
        <main>
          {/* breadcrumb area start */}
          <section className="breadcrumb-section__area breadcrumb-section breadcrumb-section-3 breadcrumb-section__space body-bg">
            <div className="container">
              <div className="breadcrumb__item">
                <a href="product.html">Product Type</a>
                <a href="product01.html">
                  <span>
                    <span className="clash">/</span>
                    {data?.crumble}
                  </span>
                </a>
              </div>
              <div className="breadcrumb-section__text">
                <h3 className="f90 grayn1 fw600 lh120">{data?.name}</h3>
                {/* 2025-09-29 f90 grayn1 fw600 lh120 클래스수정 */}
              </div>
            </div>
          </section>
          {/* <!-- 20250929 수정--> */}
          <div className="project-client-details__area body-bg section-space-top">
            <div className="container">
              <div className="project-client-details__list">
                <ul className="project-client-details__list__item">
                  <li>{data?.keywords.pre}</li>
                  <li>{data?.keywords.mid}</li>
                  <li>{data?.keywords.last}</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- //20250929 수정-->*/}
          {/* 2025-09-29 section 수정 */}
          <section className="about-section__area about-section service-details body-bg overflow-hidden ">
            <div className="about-section__thumb__wrapper wView">
              <div
                className="about-section__thumb__wrapper-img jarallax"
                key={data?.heroImg} // setData시 img 태그 재사용 x -> 다시 그리고 jallax 걸리도록
                data-background={data?.heroImg}
                style={{ backgroundImage: `url(${data?.heroImg})` }}
                speed={0.2}
                alt={data?.alt.hero}
              />
            </div>
            <div className="mView">
              <img class="img100 radius20" src={data?.heroImgM} alt="두유병과 곡물들" />
            </div>
          </section>

          <section className="brandshiping__area body-bg section-space-top">
            <div className="contant1160">
              <div className="row">
                <div className="col-md-7 col-12">
                  <p className="f27  fw600 lh170 grayn1" dangerouslySetInnerHTML={{ __html: data?.descs.sec01 }}></p>
                </div>
                <div className="col-md-5 col-12 d-flex align-items-center justify-content-end">
                  <p
                    className="f22 fw400 lh150 grayn1 mt30m"
                    dangerouslySetInnerHTML={{ __html: data?.descs.sec02 }}></p>
                </div>
              </div>

              <div className="row mb-minus-30 mt50 mt30m">
                <div className="col-lg-12">
                  <div className="mb-30">
                    {data && <img className="img100" src={data?.images.pre} alt={data?.alt.pre} />}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-30">
                    <img className="img100" src={data?.images.mid} alt={data?.alt.mid} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-30">
                    <img className="img100" src={data?.images.last} alt={data?.alt.last} />
                  </div>
                </div>
                <div className="col-md-12 mt70">
                  <p
                    className="f27 fw500 grayn1 lh180 center"
                    dangerouslySetInnerHTML={{ __html: data?.descs.sec03 }}></p>
                </div>
              </div>
            </div>
          </section>

          {/* testimonial2-area start */}
          {/* 20250929 수정 */}
          <div className="testimonial2__area section-space mt100 mb50 cardWrap">
            <div className="swiper testmonial2-slide-active">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="#!" onClick={() => setData(datas["soy"])}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">Soy Milk</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          "Plant-based beverages trusted for decades, built on Korea’s original soy milk technology"
                          <span class="more">More</span>
                        </p>
                        <div className="mt70">
                          <span class="keyword">#Soy Milk</span> <span class="keyword">#Plant-Based</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_01.jpg" alt="두유액 생산" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#!" onClick={() => setData(datas["protein"])}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">Protein Drink</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          <p class="f23 fw400 grayn1 lh150 mt20">
                            "From fast absorption to slow digestion, customized high-protein beverages"
                            <span class="more">More</span>
                          </p>
                        </p>
                        <div className="mt70">
                          <span class="keyword">#High Protein</span> <span class="keyword">#Pre & Post</span>{" "}
                          <span class="keyword">#Customized</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_02.jpg" alt="단백질 음료 생산" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a onClick={() => setData(datas["balance"])}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">Balanced Nutrition Formula</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          "Patient & senior nutrition beverages scientifically balanced nutrition"
                          <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#Balanced Nutrition</span>&nbsp;&nbsp;
                          <span className="keyword">#Medical Nutrition</span>{" "}
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_03.jpg" alt="균형영양식 생산" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a onClick={() => setData(datas["particle"])}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p class="f40 fw600 grayn1 lh150">Particle Drink</p>{" "}
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          RTD beverages with inclusions for a chewy experience Coconut jelly, aloe, and more"{" "}
                          <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#Inclusions</span> <span class="keyword">#Particle</span>{" "}
                          <span className="keyword">#Coconut</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_04.jpg" alt="파티클 생산" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#!" onClick={() => setData(datas["sikhye"])}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">Traditional</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          "Traditional Sikhye with real rice grains Healthier with low sugar & low calories"
                          <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#Rice based beverage</span>{" "}
                          <span className="keyword">#Traditional</span> <span className="keyword">#Low Sugar</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_05.jpg" alt="식혜 생산" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#!" onClick={() => setData(datas["sauce"])}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">Sauce & Broth</p>{" "}
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          "Versatile liquid broths Ideal for foodservice, HMR, and catering in large formats"
                          <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#Large Format</span> <span className="keyword">#Broth</span>{" "}
                          <span className="keyword">#HMR</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_06.jpg" alt="소스 생산" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#!" onClick={() => setData(datas["sterilized"])}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">UHT Milk</p>{" "}
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          "UHT milk in various sizes Shelf-stable for long-lasting convenience"
                          <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#UHT Milk</span> <span className="keyword">#Dairy</span>{" "}
                          <span className="keyword">#Shelf-Stable</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_07.jpg" alt="멸균유 생산" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#!" onClick={() => setData(datas["juice"])}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">Juice</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          "Fruit & vegetable juices designed for taste and wellness Fruit–vegetable blending available"
                          <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#Juice</span> <span className="keyword">#Fruit & Veg</span>{" "}
                          <span className="keyword">#Taste & Wellness</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_08.jpg" alt="주스 생산" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#!" onClick={() => setData(datas["coffee"])}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">Coffee</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          "SIG COMBIBLOC 125–250mL Choose from small sizes up to 250mL based on your business strategy"
                          <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#Coffee</span> <span className="keyword">#Latte</span>{" "}
                          <span className="keyword">#RTD</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_09.jpg" alt="커피 생산" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* //20250929 수정 */}

          <section className="">
            <div className="contant1160 mb200">
              <a href="/cs/contact">
                <img
                  className="wView"
                  src="/common/imgs/main/en_bnr_faq.png"
                  alt="제품이나 서비스에 대해 문의가 있나요?"
                />
                <img
                  className="mView"
                  src="/common/imgs/main/en_bnr_faq_mo.png"
                  alt="제품이나 서비스에 대해 문의가 있나요?"
                />
              </a>
            </div>
          </section>
        </main>
        <FooterReactEN></FooterReactEN>
      </div>
    </>
  );
};

export default SortEN;
