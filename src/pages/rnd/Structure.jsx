import React from "react";

const Structure = () => {
  return (
    <>
      <section>
        <div className="contant1160 mt100">
          <div className="row">
            <div className="col-lg-7">
              <p className="f52 fw600 grayn1 lh160 rnd_ill">
                식품안전연구소
                <br />
                <img
                  style={{ verticalAlign: "bottom" }}
                  src="/common/imgs/business/member01.png"
                  alt="현미경 일러스트"
                />{" "}
                조직 구성
                <br />
              </p>
              <p className="f30 fw700 grayn3 f_pp italic lh160 mt10">Food Safety Research Institute Oranization</p>
            </div>
          </div>
        </div>

        <div className="contant1160 mt100">
          <div className="row">
            <div className="col-lg-6">
              <p>
                <img className="round20" src="/common/imgs/business/member02.jpg" alt="비커에 실험하는 모습" />
              </p>
            </div>
            <div className="col-lg-6">
              {/* accordion */}
              <div className="faq-section__content rnd_member">
                <p className="f45 fw500 mt50m">품질안전 연구실</p>
                <div className="accordion mt40" id="accordionExamplee">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button grayn1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne">
                        이화학분석
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExamplee">
                      <div className="accordion-body">
                        <p>
                          HACCP(식품안전관리인증기준)에 준하여 관리되는 시스템으로 제품에 영향을 미치는 모든 처리공정의
                          확인검사로서 관능, 가수, pH, 당도, 산도, 비중, 분리도 등 검사하여 생산 전과 생산 중의 제품의
                          이상 유무를 철저히 확인하고 있습니다. 또한, 각 라인에서 생산되는 모든 제품에 대하여 정해진
                          시간단위로 수거하여 제품의 적합성 검사를 실시하고 있습니다.
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
                        미생물분석
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExamplee">
                      <div className="accordion-body">
                        <p>
                          모든 제품에 대해 식품공전에 의거하여 세균, 대장균, 효모 등 정확하고 신속한 미생물 검사를
                          실행하고 있으며 제품 불량에 대한 원인규명을 위해 분리동정도 병행하고 있습니다.
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
                        원부자재 안정성 분석
                      </button>
                    </h2>
                    <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionExamplee">
                      <div className="accordion-body">
                        <p>
                          원부자재가 입고되면 품질안전연구실에서 시험성적서 및 수량, 유통기한 여부 등을 확인하여 품질
                          안정성을 확보 후 사용합니다.
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
                        기기분석
                      </button>
                    </h2>
                    <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionExamplee">
                      <div className="accordion-body">
                        <p>밀코스캔, 디지털당도계, 밀도계 등 설계된 규격 확인을 위한 다양한 기기를 갖추고 있습니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* //accordion */}
            </div>
          </div>
        </div>

        <div className="contant1160 mt100 mb200">
          <div className="row">
            <div className="col-lg-6">
              <p>
                <img className="round20" src="/common/imgs/business/member03.jpg" alt="비커에 실험하는 모습" />
              </p>
            </div>
            <div className="col-lg-6">
              {/* accordion */}
              <div className="faq-section__content rnd_member">
                <p className="f45 fw500 mt50m">제품개발실</p>
                <div className="accordion mt40" id="accordionExamplee2">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button grayn1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse5"
                        aria-expanded="true"
                        aria-controls="collapse5">
                        연구지원
                      </button>
                    </h2>
                    <div
                      id="collapse5"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExamplee2">
                      <div className="accordion-body">
                        <p>
                          식품분석에 필요한 최첨단 정밀분석 기기를 갖추고, 제품개발 분석지원 및 완제품, 각종원료 등을
                          분석함으로써 보다 과학적이고 체계적으로 최고의 품질을 유지·관리하도록 지원하고 있습니다.
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
                        제품개발
                      </button>
                    </h2>
                    <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionExamplee2">
                      <div className="accordion-body">
                        <p>
                          두유 및 일반음료 등을 개발하고 있으며 더 많은 연구와 투자로 더욱 더 좋은 제품을 개발하기 위해
                          노력하고 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* //accordion */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Structure;
