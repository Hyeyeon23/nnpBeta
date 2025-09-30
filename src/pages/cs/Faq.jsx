import React from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/Header";
import FooterReact from "../../components/common/FooterReact";
import Meta from "../../components/common/Meta";

const Faq = () => {
  return (
    <>
      <Meta title="자연과사람들 자주묻는 질문"></Meta>
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
                          {/* Accordion Item 1 */}
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

                          {/* Accordion Item 2 */}
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

                          {/* Accordion Item 3 */}
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

                          {/* Accordion Item 4 */}
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

                          {/* Accordion Item 5 */}
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

                          {/* Accordion Item 6 */}
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

                          {/* Accordion Item 7 */}
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

                          {/* Accordion Item 8 */}
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

                          {/* Accordion Item 9 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse9"
                                aria-expanded="false"
                                aria-controls="collapse9">
                                제품의 소비기한은 얼마나 되나요?
                              </button>
                            </h2>
                            <div
                              id="collapse9"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  소비기한은 포장 용기와 제품의 유형에 따라 달라집니다.
                                  <br />
                                  멸균팩 제품 : 두유 및 과채음료류 6개월, 멸균우유 10주~4개월
                                  <br />
                                  캔 제품 : 제품 유형 및 제조 조건에 따라 1년에서 최대 2년
                                  <br />
                                  최종 소비기한은 제품의 특성과 품목 유형, 유통 조건 등을 종합적으로 고려하여 별도 협의
                                  후 결정됩니다.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Accordion Item 10 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse10"
                                aria-expanded="false"
                                aria-controls="collapse10">
                                제품의 용량을 조절할 수 있나요?
                              </button>
                            </h2>
                            <div
                              id="collapse10"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  당사는 현재 125ml부터 1000ml까지 다양한 용량의 제품 생산이 가능합니다. 설비 유형별
                                  생산 가능 용량은 홈페이지의 Business&gt;용기유형 메뉴에서 자세히 확인하실 수 있습니다.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Accordion Item 11 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse11"
                                aria-expanded="false"
                                aria-controls="collapse11">
                                두유에 사용되는 콩은 수입산으로 알고 있는데, 유전자재조합(GMO) 콩인가요?
                              </button>
                            </h2>
                            <div
                              id="collapse11"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  아니요. 저희는 유전자재조합(GMO) 콩을 전혀 사용하지 않습니다.
                                  <br />
                                  현재 국내의 콩 생산량이 너무 적어 불가피하게 수입산 콩을 이용하고 있지만, 정부를 통해
                                  수입된 비유전자재조합 콩을 사용하고 있습니다. 또한 모회사인 정식품 중앙연구소
                                  안정성센터에서 GMO 분석 장비(Real Time PCR)를 통해 한 번 더 유전자재조합 여부를
                                  검사합니다.
                                  <br />
                                  농약 잔류 검사도 함께 철저히 진행되므로 안심하고 드실 수 있습니다.
                                  <br />
                                  두유의 원료인 콩에 대하여 정부에서 보증하는 구분생산유통증명서를 발급받고 있습니다.
                                </p>
                                <p className="mt20">
                                  ※ 구분 생산·유통 증명서란? 원료 종자의 구입, 생산, 보관, 선별, 운반, 선적 등 전 과정에
                                  걸쳐 최종 제품 생산자 및 판매자가 인수하기까지 유전자재조합 농산물과 구분하여
                                  관리하였음을 입증하는 서류입니다.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Accordion Item 12 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse12"
                                aria-expanded="false"
                                aria-controls="collapse12">
                                보관 시 주의사항이 있나요?
                              </button>
                            </h2>
                            <div
                              id="collapse12"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  당사에서 제조하는 제품은 살균 또는 멸균 처리된 제품으로, 직사광선을 피한 서늘한 곳에서
                                  상온 보관이 가능합니다. 다만, 운반 및 보관 중 충격에 주의해 주시고, 제품 개봉 시에는
                                  칼이나 가위 등 날카로운 도구 사용을 삼가 주세요.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Accordion Item 13 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse13"
                                aria-expanded="false"
                                aria-controls="collapse13">
                                소량 생산도 가능한가요?
                              </button>
                            </h2>
                            <div
                              id="collapse13"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  당사는 일정 규모 이상의 연속 생산을 기본으로 하고 있으나, 독창적인 아이디어가 실현될
                                  수 있도록 가급적 유연하게 대응하고자 합니다. 따라서 자세한 내용은 홈페이지를 통해
                                  상담을 요청해주시기 바랍니다. *메인화면에 용기별 발주관련 문의사항이 있습니다.{" "}
                                  <a href="/">
                                    <span className="btn01 mt50 f13">메인바로가기</span>
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Accordion Item 14 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse14"
                                aria-expanded="false"
                                aria-controls="collapse14">
                                제품 기획부터 생산까지의 리드타임은 얼마나 소요되나요?
                              </button>
                            </h2>
                            {/* 20250929 수정 */}
                            <div
                              id="collapse14"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  OEM: 대량생산 가능 여부 확인을 위해 시험생산을 거칩니다. 부자재(멸균팩) 리드타임을
                                  포함해 최소 5개월 이상 소요됩니다.
                                  <br />
                                  ODM: OEM과 달리 개발부터 시작하기 때문에, 최소 6개월 이상 소요됩니다.
                                </p>
                              </div>
                            </div>
                            {/* //20250929 수정 */}
                          </div>

                          {/* Accordion Item 15 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse15"
                                aria-expanded="false"
                                aria-controls="collapse15">
                                재활용 가능한가요?
                              </button>
                            </h2>
                            <div
                              id="collapse15"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>용기와 분리배출 방식에 따라 부분적으로 가능합니다.</p>
                                <table cellSpacing="0" border="0" className="faqTable mt10">
                                  <colgroup>
                                    <col width="8%" />
                                    <col width="14%" />
                                    <col width="13%" />
                                    <col width="25%" />
                                    <col width="40%" />
                                  </colgroup>
                                  <tbody>
                                    <tr>
                                      <th>용기</th>
                                      <th>분리배출표시</th>
                                      <th>배출 전 세척</th>
                                      <th>배출 전 방식</th>
                                      <th>주의사항</th>
                                    </tr>
                                    <tr>
                                      <td>멸균팩</td>
                                      <td>
                                        <img src="/common/imgs/common/faq02.gif" alt="" />
                                      </td>
                                      <td>헹군 후 건조</td>
                                      <td>
                                        전용 수거함 또는 <br />
                                        끝으로 묶어 배출
                                      </td>
                                      <td>
                                        일반 종이와 구분하여 배출
                                        <br />
                                        빨대, 플라스틱 부착물 등 제거 후 배출 권장
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>알미늄</td>
                                      <td>
                                        <img src="/common/imgs/common/faq03.gif" alt="" />
                                      </td>
                                      <td>헹굼 권장</td>
                                      <td>일반 재활용 수거함(캔류)</td>
                                      <td>
                                        빨대, 플라스틱 부착물 등<br /> 제거 후 배출 권장
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p className="mt5">
                                  ※ 멸균팩은 다중 재질로 이루어진 복합 적층 구조로, 일반 종이류와 달리 재활용을 위해서는
                                  별도의 분리배출 방법이 필요합니다.
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
