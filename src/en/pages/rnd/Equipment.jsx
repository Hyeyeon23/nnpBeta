import React from "react";
import MetaEN from "../../../components/common/MetaEN";
const EquipmentEN = () => {
  return (
    <>
      <MetaEN
        title={"Nature & People R&D Equipment"}
        description={
          "Specialized in beverage OEM, ODM, Private Label, and B2B manufacturing, including exports. We expertly produce Aseptic Cartons, Gable Tops, and Cans."
        }></MetaEN>
      <section>
        <div className="contant1160 mt100">
          <div className="row">
            <div className="col-lg-12">
              <p className="f52 fw600 grayn1 lh160 rnd_ill">
                Food Safety Research Institute
                <br />
                <img
                  style={{ verticalAlign: "bottom" }}
                  src="../common/imgs/business/equ01.png"
                  alt="스포이드 일러스트"
                />{" "}
                Facilities &amp; Equipment
                <br />
              </p>
              <p className="f30 fw700 grayn3 f_pp italic lh160 mt10">Food Safety Research Institute Oranization Info</p>
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
                    <table className="tyleTable">
                      <colgroup>
                        <col width="30%" />
                        <col width="70%" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <td colSpan={2} />
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <p className="f40 fw600 mt10 pb20 grayn1">Milkoscan</p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <p className="lh170 f20">
                              A precision instrument that measures protein, milk fat, and lactose levels in soy
                              beverages and dairy products. It is also used to assess total solids and detect dilution
                              in raw milk, supporting rigorous quality control.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} className="pt20">
                            <img className="round20" src="../common/imgs/business/equ02.jpg" alt="Milkoscan" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="tab-pane fade" id="sig" role="tabpanel" aria-labelledby="sig-tab" tabIndex={0}>
                  <div className="typeBox">
                    <table className="tyleTable">
                      <colgroup>
                        <col width="30%" />
                        <col width="70%" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <td colSpan={2} />
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <p className="f38 fw600 mt10 pb20 grayn1 lh130">
                              Digital <br />
                              Refractometer
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <p className="lh170 f20">
                              As the solids content in a solution changes, so does its refractive index. This instrument
                              uses that property to measure the Brix (sweetness) of products. Sweetness is one of the
                              most critical factors defining product characteristics, and consumers are highly sensitive
                              to it—often using Brix as a key selection criterion.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} className="pt20">
                            <img
                              className="round20"
                              src="../common/imgs/business/equ03.jpg"
                              alt="Digital Refractometer"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="tab-pane fade" id="edge" role="tabpanel" aria-labelledby="edge-tab" tabIndex={0}>
                  <div className="typeBox">
                    <table className="tyleTable">
                      <colgroup>
                        <col width="30%" />
                        <col width="70%" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <td colSpan={2} />
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <p className="f38 fw600 mt10 pb20 grayn1 lh130">
                              Crude <br />
                              Protein Analyzer
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <p className="lh170 f20">
                              An instrument used to measure protein content in raw materials and finished products. By
                              monitoring the purity of protein ingredients and the protein level of finished goods, it
                              supports raw-material and product quality control.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} className="pt20">
                            <img
                              className="round20"
                              src="../common/imgs/business/equ04.jpg"
                              alt="Crude Protein Analyzer"
                            />
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
                  <div className="services__tab__title f45 fw600">Milkoscan</div>
                </div>

                <div
                  className="nav-link"
                  id="sig-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#sig"
                  role="tab"
                  aria-controls="sig"
                  aria-selected="false">
                  <div className="services__tab__title f45 fw600">Digital Refractometer</div>
                </div>

                <div
                  className="nav-link"
                  id="edge-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#edge"
                  role="tab"
                  aria-controls="edge"
                  aria-selected="false">
                  <div className="services__tab__title f45 fw600">Crude Protein Analyzer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EquipmentEN;
