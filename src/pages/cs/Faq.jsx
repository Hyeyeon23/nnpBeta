import React from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/Header";
import FooterReact from "../../components/common/FooterReact";

const Faq = () => {
  return (
    <>
      <Header></Header>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="breadcrumb-section__area breadcrumb-section breadcrumb-section-4 breadcrumb-section-2__space border-bottom">
              <div className="container">
                <div className="breadcrumb-section__shape__wrap">
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                </div>
                <div className="breadcrumb-section__text">
                  <h3 className="f_pp f130 fw600 lh100">Products FAQ</h3>
                </div>
              </div>
            </section>

            <section className="faq-section__area faq-section faq-section-2 body-bg section-space">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="faq-section__content">
                      <p className="f30 fw500 lh170 grayn1 center">
                        자연과사람들 고객 문의사항을 모아둔 공간으로,
                        <br />
                        궁금한 점을 빠르게 확인할 수 있습니다.
                      </p>
                      <div className="faq-section__faq mt100">
                        <div className="accordion" id="accordionExamplee">
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button grayn1"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne">
                                멸균팩은 무엇인가요?
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  멸균팩은 6~7겹의 종이, 알루미늄 호일, 폴리에틸렌 수지로 이루어진 복합 재질
                                  포장재입니다. 외부의 빛, 공기, 수분, 미생물 등을 효과적으로 차단하여 멸균된 내용물을
                                  방부제 없이도 장기간 상온에서 안전하게 보존할 수 있도록 합니다. 당사는 Tetra Pak사와
                                  SIG사의 무균팩을 사용하고 있습니다.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo">
                                전자레인지 사용 가능한 제품도 있나요?
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  네. 특수 멸균팩을 사용해 제조할 수 있습니다.
                                  <br />
                                  일반 멸균팩과 달리 알루미늄 대신 특수 필름을 적용한 다층 구조로 되어 있어,
                                  전자레인지로도 안전하게 데워 드실 수 있습니다.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse3"
                                aria-expanded="false"
                                aria-controls="collapse3">
                                살균 또는 멸균은 어떻게 이루어지나요?
                              </button>
                            </h2>
                            <div
                              id="collapse3"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  제품의 식품 유형에 따라 정해진 온도와 시간으로, 내용물을 균일하게 가열합니다. 이
                                  과정은 제품의 미생물 증식을 억제하고 상온에서도 안전하게 보관할 수 있도록 돕습니다.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse4"
                                aria-expanded="false"
                                aria-controls="collapse4">
                                제품 주문 시 MOQ(최소 발주량)는 얼마인가요?
                              </button>
                            </h2>
                            <div
                              id="collapse4"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  제품에 따라 사용되는 포장 설비의 종류나 제품 특성에 따라 최소 발주량은 달라질 수
                                  있습니다. 일반적으로는 설비를 가동했을 때 1회 생산 가능한 기준 수량을 최소 발주량으로
                                  적용하고 있으며, 자세한 내용은 상담을 통해 안내해 드리고 있습니다.
                                  <br />
                                  *메인화면에 용기별 발주관련 문의사항이 있습니다.{" "}
                                  <a href="/">
                                    <span className="btn01 mt50 f13">메인바로가기</span>
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse5"
                                aria-expanded="false"
                                aria-controls="collapse5">
                                파티클(고체 입자) 음료란 무엇인가요?
                              </button>
                            </h2>
                            <div
                              id="collapse5"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  씹을 수 있는 파티클(고체 입자)을 투입한 음료 제품입니다.
                                  <br />
                                  대표적으로 나타드코코, 알로에베라, 바질시드가 있으며, 현재 나타드코코를 사용해
                                  제조하고 있습니다.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse6"
                                aria-expanded="false"
                                aria-controls="collapse6">
                                OEM, ODM 협의를 진행하려면 어떤 정보가 필요한가요?
                              </button>
                            </h2>
                            <div
                              id="collapse6"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  제품 컨셉(맛, 용량, 형태), 예상 생산 수량, 예상 판매 경로 등의 기본 정보가 필요합니다.
                                  사전 상담을 통해 생산 가능 여부와 발주 조건 등을 안내드리며, 초기 레시피 검토 후
                                  시제품 제조도 가능합니다.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse7"
                                aria-expanded="false"
                                aria-controls="collapse7">
                                원부자재의 조달은 어떻게 하나요?
                              </button>
                            </h2>
                            <div
                              id="collapse7"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  기본적으로 모든 원부자재는 당사에서 구입하여 생산을 진행하고 있습니다.
                                  <br />
                                  다만, 제품의 특성에 따라 고객이 직접 원부자재를 공급하는 임가공 및 부분임가공 형태도
                                  가능합니다. 또한 원부자재 역시 품목별로 MOQ(최소 발주량)가 존재하므로 고객과 협의하여
                                  발주 수량을 조정하고 있습니다.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse8"
                                aria-expanded="false"
                                aria-controls="collapse8">
                                디자인 및 발주는 어떻게 하나요?
                              </button>
                            </h2>
                            <div
                              id="collapse8"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  제품의 용기 종류와 크기에 따라 전용 도안(키라인)을 제공해 드립니다. 해당 도안에 맞춰
                                  디자인 작업을 진행해 주시면 양사 간 표시사항을 검토한 후 계약 내용에 따라 확정된
                                  디자인으로 발주가 진행됩니다.
                                </p>
                                <p style={{ maxWidth: "600px" }} className="mt20">
                                  <img className="img100" src="/common/imgs/common/faq01.jpg" alt="" />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <FooterReact></FooterReact>
        </div>
      </div>
    </>
  );
};

export default Faq;
