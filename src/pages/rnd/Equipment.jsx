import React from "react";

const Equipment = () => {
  return (
    <>
      <section>
        <div className="contant1160 mt100">
          <div className="row">
            <div className="col-lg-12">
              <p className="f52 fw600 grayn1 lh160 rnd_ill">
                식품안전연구소
                <br />
                <img
                  style={{ verticalAlign: "bottom" }}
                  src="/common/imgs/business/equ01.png"
                  alt="스포이드 일러스트"
                />{" "}
                시설 및 장비현황
                <br />
              </p>
              <p className="f30 fw700 grayn3 f_pp italic lh160 mt10">
                Food Safety Research Institute Organization Info
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contant1160 services-section__area services-section section-space">
        <div className="row align-items-center flex-lg-row mt50 flex">
          <div className="col-md-5">
            <div className="services__content__wrapper">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="tetramid"
                  role="tabpanel"
                  aria-labelledby="tetramid-tab"
                  tabIndex={0}>
                  <div className="typeBox">
                    <table cellSpacing="0" border="0" className="tyleTable">
                      <colgroup>
                        <col width="30%" />
                        <col width="70%" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <td colSpan={2}>
                            <p className="f22 fw400 grayn1">Milkoscan</p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <p className="f40 fw600 mt10 pb20 grayn1">밀코스캔</p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <p className="lh170 f20">
                              두유 및 유제품의 단백질, 유지방, 유당의 함량을 측정하는 장비로서 원유의 고형분과 가수
                              여부를 검사하며 제품의 품질관리에 이용합니다.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} className="pt20">
                            <img className="round20" src="/common/imgs/business/equ02.jpg" alt="Milkoscan" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="tab-pane fade" id="sig" role="tabpanel" aria-labelledby="sig-tab" tabIndex={0}>
                  <div className="typeBox">
                    <table cellSpacing="0" border="0" className="tyleTable">
                      <colgroup>
                        <col width="30%" />
                        <col width="70%" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <td colSpan={2}>
                            <p className="f22 fw400 grayn1">Refractometer</p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <p className="f38 fw600 mt10 pb20 grayn1">디지털당도계(굴절계)</p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <p className="lh170 f20">
                              용액중에 함유된 고형분의 함량에 따라 빛의 굴절율은 달라지게 되며, 이런 빛의 성질을 이용해
                              제품중의 당도를 측정하는 기기입니다. 제품의 성상을 결정하는데 가장 중요한 요소가 당도이며,
                              고객들 또한 이에 가장 민감하게 반응하여 당도가 제품선택의 기준이 되기도 합니다.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} className="pt20">
                            <img className="round20" src="/common/imgs/business/equ03.jpg" alt="Refractometer" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="tab-pane fade" id="edge" role="tabpanel" aria-labelledby="edge-tab" tabIndex={0}>
                  <div className="typeBox">
                    <table cellSpacing="0" border="0" className="tyleTable">
                      <colgroup>
                        <col width="30%" />
                        <col width="70%" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <td colSpan={2}>
                            <p className="f22 fw400 grayn1">Protein Analyzer</p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <p className="f38 fw600 mt10 pb20 grayn1">조단백 분석기</p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <p className="lh170 f20">
                              원재료와 제품들의 단백질 함량을 측정하는 장비로서 단백질 원재료의 순도와 완제품의 단백질
                              함량을 모니터링하여 원료 및 제품의 품질관리에 이용합니다.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} className="pt20">
                            <img className="round20" src="/common/imgs/business/equ04.jpg" alt="Protein Analyzer" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div className="services__tab__wrapper type mb30m">
              <div className="nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <div
                  className="nav-link active"
                  id="tetramid-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tetramid"
                  role="tab"
                  aria-controls="tetramid"
                  aria-selected="true">
                  <div className="services__tab__title f45 fw600">밀코스캔</div>
                </div>
                <div
                  className="nav-link"
                  id="sig-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#sig"
                  role="tab"
                  aria-controls="sig"
                  aria-selected="false">
                  <div className="services__tab__title f45 fw600">디지털당도계(굴절계)</div>
                </div>
                <div
                  className="nav-link"
                  id="edge-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#edge"
                  role="tab"
                  aria-controls="edge"
                  aria-selected="false">
                  <div className="services__tab__title f45 fw600">조단백 분석기</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Equipment;
