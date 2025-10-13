import React, { useEffect, useState } from "react";
import Meta from "../../../components/common/Meta";
import FooterReact from "../../../components/common/FooterReact";
import Header from "../../../components/common/Header";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { jarallax } from "jarallax";
import { animateScroll as scroll } from "react-scroll";

const Sort = () => {
  const { type } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // 기존 jarallax destroy
    jarallax(document.querySelectorAll(".jarallax"), "destroy");

    scroll.scrollToTop({
      duration: 500, // 애니메이션 속도
      smooth: true, // 부드럽게 이동
    });

    setData(location.pathname.split("/")[3]);
  }, [location.pathname]); // 경로 변경될 때마다 실행

  const datas = {
    soy: {
      title: "자연과사람들 두유액",
      crumble: "두유액",
      name: "두유액 생산",
      keywords: { pre: "콩의 영양을 담아", mid: "맞춤형 두유액", last: "우리나라 최초의 두유 기술력" },
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
        sec01: `오랜 시간 사랑받은 식물성음료
                    <br />
                    국내 원조의 기술을 그대로`,
        sec02: ` 콩 본연의 맛과 영양을 살려내는 두유액 제조 기술을 보유하고 있습니다. 철저한 원재료 선별과 위생적인
                    공정, 차별화된 레시피 개발을 통해 식물성 영양의 가치를 담아 전합니다.`,
        sec03: `자연과사람들은 오랜 경험과 기술력을 바탕으로 <br className="wView" />
                    파트너사에는 새로운 기획의 기회를, 소비자에게는 다양한 식물성 음료를 제공합니다.
                    <br className="wView" />
                    안전성과 신뢰를 바탕으로 식물성 음료 시장을 선도해 나가겠습니다.`,
      },
    },
    protein: {
      title: "자연과사람들 단백질 음료",
      crumble: "단백질",
      name: "단백질 음료 생산",
      keywords: { pre: "#마시는단백질", mid: "#한팩으로", last: "#언제어디서나" },
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
        sec01: `빠른 흡수부터 느린 소화까지<br>맞춤형 고단백 음료`,
        sec02: `변화하는 소비자의 라이프스타일에 맞춰 고단백·저당 콘셉트의 단백질 음료를 제조하고 있습니다. 
                    스포츠, 다이어트, 웰니스, 영양간식 등 여러 목적에 어울리는 레시피를 제안하며, 영양과 맛의 균형을 추구합니다.`,
        sec03: `자연과사람들은 다양한 OEM &middot; ODM 경험을 기반으로 <br class="wView"> 최신 트렌드를 반영하고, 맞춤형 기획을 제안하여 <br class="wView">브랜드 가치와 경쟁력을 강화합니다.`,
      },
    },
    balance: {
      title: "자연과사람들 균형영양식",
      crumble: "균형영양식",
      name: "균형영양식 생산",
      keywords: { pre: "#영양가득", mid: "#건강습관", last: "#균형설계" },
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
        sec01: `환자식 &middot; 시니어용 음료<br>균형 잡힌 영양설계`,
        sec02: `자연과사람들은 환자와 시니어를 위한 균형 잡힌 영양식을 전문적으로 제조합니다.<br class="wView">영양 보충이 필요한 분들을 위해, 단백질·비타민·미네랄을 과학적으로 설계하여 안전하고 균형 잡힌 음료를 제공합니다.`,
        sec03: `자연과사람들은 일상 속에서 필요한 영양을 <br class="wView">
                        섭취할 수 있도록 전문적인 설계를 바탕으로 제조합니다. <br class="wView">
                        B2B 파트너와 함께 다양한 연령과 생활환경을 고려한 제품을 기획하고, <br class="wView">
                        OEM·ODM 방식을 통해 안정적으로 공급합니다.`,
      },
    },
    particle: {
      title: "자연과사람들 파티클",
      crumble: "파티클",
      name: "파티클 생산",
      keywords: { pre: "#씹는즐거움", mid: "#알갱이톡톡", last: "#재미있는식감" },
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
        sec01: `알갱이가 들어가 <br>씹는 재미가 더해진 RTD 음료<br>코코넛젤리, 알로에 등`,
        sec02: `파티클 음료는 젊은 소비자층을 중심으로 새로운 식감과 이색적인 즐거움을 제공하는 카테고리입니다. 
                자연과사람들은 OEM·ODM 경험을 바탕으로 코코넛젤리, 알로에 등 다양한 파티클 음료를 유연하게 기획·공급합니다.`,
        sec03: `입안 가득 퍼지는 이색적인 식감이 마시는 즐거움을 한층 더 넓혀줍니다. <br class="wView">
							새로운 경험을 원하는 시장 흐름 속에서 <br class="wView">
							독보적인 기술을 바탕으로 차별화된 가치를 선도해 나갑니다.`,
      },
    },
    sikhye: {
      title: "자연과사람들 식혜",
      crumble: "식혜",
      name: "식혜 생산",
      keywords: { pre: "#전통방식", mid: "#당도조절가능", last: "#밥알취향존중" },
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
        sec01: `밥알이 살아있는 전통 식혜<br>저당 &middot; 저칼로리로 더욱 건강하게`,
        sec02: `자연과사람들은 밥알이 살아있는 전통 식혜를 현대적 기술과 위생적인 공정을 통해 정직하게 만들어냅니다. 옛 방식 그대로의 구수한 풍미와 자연스러운 단맛은 유지하면서, 저당·저칼로리 레시피를 적용해 남녀노소 누구나 부담 없이 즐길 수 있도록 개발했습니다.`,
        sec03: `전통 식혜의 매력을 살리면서도 현대 소비자의 라이프스타일을 반영하여  <br class="wView">
                        밥알 유무의 선택과 당도 조절이 가능하도록 구현했습니다.  <br class="wView">
                        이에 더해 캔 포장으로 오랜 보존기간과 휴대성을 높여
                        언제 어디서나 즐길 수 있습니다. <br class="wView">`,
      },
    },
    sauce: {
      title: "자연과사람들 소스",
      crumble: "소스",
      name: "소스 생산",
      keywords: { pre: "#간편요리", mid: "#HMR", last: "#맛의완성" },
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
        sec01: `활용도 높은 액상 육수<br>외식 &middot; HMR &middot; 급식 등 대용량`,
        sec02: `소스와 육수는 외식업, 급식, 가정간편식(HMR) 각 분야에서 다양한 요리에 두루 활용됩니다. 자연과사람들은 액상 소스와 육수를 통해 조리의 편의성과 맛의 완성도를 높입니다.`,
        sec03: `소스와 육수는 전반적으로 활용도가 높으며, <br class="wView">
							풍미와 편의성을 갖춘 액상 형태로 다양하게 적용됩니다. <br class="wView">
							대용량 운영에 적합하여 조리 효율성과 일관된 맛을 제공합니다.`,
      },
    },
    sterilized: {
      title: "자연과사람들 멸균유",
      crumble: "멸균유",
      name: "멸균유 생산",
      keywords: { pre: "#멸균우유", mid: "#신선함그대로", last: "#상온보관" },
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
        sec01: `다양한 용량의 멸균 우유<br>상온 보관으로 오래오래`,
        sec02: `자연과사람들은 UHT(초고온 멸균) 공정을 통해 안전하고 영양 손실을 최소화한 멸균유를 생산합니다.
								상온 보관이 가능해 유통과 보관이 편리하며, 장기간 품질을 안정적으로 유지할 수 있습니다.
								소용량부터 대용량, 급식·외식업까지 다양한 용량 맞춤 생산이 가능합니다.`,
        sec03: `유통&middot;보관이 편리한 멸균유 솔루션으로 파트너사의 다양한 요구에 대응하며, <br class="wView">
							안전성과 품질을 최우선으로 한 신뢰할 수 있는 공급 체계를 약속합니다. <br class="wView">
							상온에서도 장기간 보관이 가능해 급식과 외식 산업 전반에서 폭넓게 활용되고, <br class="wView">
							위생적인 공정과 철저한 품질 관리로 언제나 안심할 수 있는 제품을 제공합니다.`,
      },
    },
    juice: {
      title: "자연과사람들 주스",
      crumble: "주스",
      name: "주스 생산",
      keywords: { pre: "#과채음료", mid: "#과채주스", last: "#과일야채블렌딩" },
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
        sec01: `맛과 건강을 고려한 과채주스<br>과일&middot;채소 혼합 가능`,
        sec02: `과일과 채소 원료를 바탕으로 브랜드 콘셉트에 맞는 다양한 레시피를 구현합니다. 요청사항을 폭넓게 반영할 수 있으며, 좋은 제품을 위해 함께 검토하고 신뢰할 수 있는 품질을 제공합니다.`,
        sec03: `자연과사람들은 OEM&middot;ODM 전문성을 기반으로 <br class="wView">
                        파트너사의 아이디어와 콘셉트를 충실히 반영한 음료를 제공합니다. <br class="wView">
                        원료 배합과 레시피 조정에 유연하게 대응하며, 요청에 따라 적합한 대안도 함께 검토합니다. <br class="wView">
                        안전한 공정을 거쳐 신뢰할 수 있는 품질을 제공하고, <br class="wView">
                        브랜드가 원하는 방향으로 시장에 나아갈 수 있도록 지원합니다.`,
      },
    },
    coffee: {
      title: "자연과사람들 커피",
      crumble: "커피",
      name: "커피 생산",
      keywords: { pre: "#RTD커피", mid: "#편리하게", last: "#다양한맛" },
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
        sec01: `블랙&middot;라떼 등 다채로운 레시피<br>RTD 형태 맞춤 생산`,
        sec02: `원두 본연의 풍미를 살리면서도 깔끔하고 안정적인 맛을 구현하며, RTD(Ready to Drink) 형태로 맞춤 생산이 가능합니다. OEM&middot;ODM을 통해 브랜드 콘셉트에 맞는 커피 라인업을 개발할 수 있어, 카페 전용&middot;소비자용 모두 대응할 수 있습니다.`,
        sec03: `RTD 커피는 이제 간편하게 즐기는 데일리 음료로 자리 잡으며<br class="wView">
							국내외 시장에서 꾸준히 성장하고 있습니다.<br class="wView">
							자연과사람들은 OEM&middot;ODM 전문 제조사로서,<br class="wView">
							파트너사의 니즈에 맞춘 레시피&middot;패키지&middot;유통 포맷을 신속하게 제공합니다.`,
      },
    },
  };

  useEffect(() => {
    switch (type) {
      case "soy":
        setData(datas.soy);
        break;
      case "protein":
        setData(datas.protein);
        break;
      case "balance":
        setData(datas.balance);
        break;
      case "particle":
        setData(datas.particle);
        break;
      case "sikhye":
        setData(datas.sikhye);
        break;
      case "sauce":
        setData(datas.sauce);
        break;
      case "sterilized":
        setData(datas.sterilized);
        break;
      case "juice":
        setData(datas.juice);
        break;
      case "coffee":
        setData(datas.coffee);
        break;
      default:
        setData(null);
    }

    // <main.js 재실행>라우트 변경 시마다
    const reloadMainScript = () => {
      const mainScript = document.createElement("script");
      mainScript.src = "/common/js/main.js";
      mainScript.async = false;
      document.body.appendChild(mainScript);

      return () => {
        if (mainScript && document.body.contains(mainScript)) {
          document.body.removeChild(mainScript);
        }
      };
    };

    // main.js 재로드
    const cleanup = reloadMainScript();

    // <main.js 재실행>

    return cleanup;
  }, [type]);

  const linkToSub = (sub) => {
    navigate("/business/product/" + sub);
  };
  console.log(data);
  return (
    <>
      <Meta title={data?.title}></Meta>
      <Header></Header>
      <div id="smooth-wrapper" className="body-bg">
        <main>
          {/* breadcrumb area start */}
          <section className="breadcrumb-section__area breadcrumb-section breadcrumb-section-3 breadcrumb-section__space body-bg">
            <div className="container">
              <div className="breadcrumb__item">
                <a href="product.html">제품유형</a>
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
                data-background={data?.heroImg}
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
                  <p className="f40 fw600 lh170 grayn1" dangerouslySetInnerHTML={{ __html: data?.descs.sec01 }}></p>
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
                  <a href="#!" onClick={() => linkToSub("soy")}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">두유액 생산</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          오랜 시간 사랑받은 식물성음료
                          <br />
                          국내 원조의 기술을 그대로
                        </p>
                        <div className="mt70">
                          <span className="keyword">#두유액</span> <span className="keyword">#식물성음료</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_01.jpg" alt="두유액 생산" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#!" onClick={() => linkToSub("protein")}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">단백질 음료 생산</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          빠른 흡수부터 느린 소화까지 <br />
                          맞춤형 고단백 음료 <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#고단백</span> <span className="keyword">#운동전후</span>{" "}
                          <span className="keyword">#맞춤형</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_02.jpg" alt="단백질 음료 생산" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a onClick={() => linkToSub("balance")}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">균형영양식 생산</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          환자식&middot;시니어용 음료
                          <br />
                          균형 잡힌 영양설계 <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#균형영양식</span> <span className="keyword">#환자식</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_03.jpg" alt="균형영양식 생산" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a onClick={() => linkToSub("particle")}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">파티클 생산</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          알갱이가 들어가 씹는 재미가 더해진 <br />
                          RTD 음료 코코넛젤리, 알로에 등 <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#알갱이</span> <span className="keyword">#파티클</span>{" "}
                          <span className="keyword">#코코넛</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_04.jpg" alt="파티클 생산" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#!" onClick={() => linkToSub("sikhye")}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">식혜 생산</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          밥알이 살아있는 전통 식혜 <br />
                          저당 &middot; 저칼로리로 더욱 건강하게 <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#밥알</span> <span className="keyword">#전통음료</span>{" "}
                          <span className="keyword">#저당</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_05.jpg" alt="식혜 생산" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#!" onClick={() => linkToSub("sauce")}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">소스 생산</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          활용도 높은 액상 육수
                          <br />
                          외식 &middot; HMR &middot; 급식 등 대용량 <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#대용량</span> <span className="keyword">#육수</span>{" "}
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
                  <a href="#!" onClick={() => linkToSub("sterilized")}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">멸균유 생산</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          다양한 용량의 멸균 우유
                          <br />
                          상온 보관으로 오래오래 <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#멸균유</span> <span className="keyword">#가공유</span>{" "}
                          <span className="keyword">#상온보관</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_07.jpg" alt="멸균유 생산" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#!" onClick={() => linkToSub("juice")}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">주스 생산</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          맛과 건강을 고려한 과채주스
                          <br />
                          과일 &middot; 채소 혼합 가능 <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#주스</span> <span className="keyword">#과채주스</span>{" "}
                          <span className="keyword">#맛건강</span>
                        </div>
                      </div>
                      <div className="cardRight cardBox-img">
                        <img src="/common/imgs/business/proT_08.jpg" alt="주스 생산" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#!" onClick={() => linkToSub("coffee")}>
                    <div className="cardBox d-flex">
                      <div className="cardLeft">
                        <p className="f40 fw600 grayn1 lh150">커피 생산</p>
                        <p className="f23 fw400 grayn1 lh150 mt20">
                          블랙 &middot; 라떼 등 다채로운 레시피 <br />
                          RDT 형태 맞춤 생산 <span className="more">More</span>
                        </p>
                        <div className="mt70">
                          <span className="keyword">#커피</span> <span className="keyword">#라떼</span>{" "}
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
                <img className="wView" src="/common/imgs/business/cs.png" alt="제품이나 서비스에 대해 문의가 있나요?" />
                <img
                  className="mView"
                  src="/common/imgs/business/cs_mo.png"
                  alt="제품이나 서비스에 대해 문의가 있나요?"
                />
              </a>
            </div>
          </section>
        </main>
        <FooterReact></FooterReact>
      </div>
    </>
  );
};

export default Sort;
