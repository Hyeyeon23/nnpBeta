import React, { useEffect } from "react";
HeaderEN;
import Meta from "../../../components/common/Meta";
import HeaderEN from "../../../components/common/HeaderEN";
import FooterReactEN from "../../../components/common/FooterReactEN";
const ContainerEN = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const mainScript = document.createElement("script");
      mainScript.src = "/common/js/main.js";
      mainScript.async = false;
      document.body.appendChild(mainScript);

      // cleanup 함수
      return () => {
        if (mainScript && document.body.contains(mainScript)) {
          document.body.removeChild(mainScript);
        }
      };
    }, 500); // 500ms 지연

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Meta title={"자연과사람들 용기유형"}></Meta>
      <HeaderEN></HeaderEN>
      <div id="smooth-wrapper" className="body-bg">
        <div>
          <main>
            <section className="subTop_type">
              <div className="container">
                <div className="subTop">
                  <div className="w80 centerH3">
                    <div className="centerH3_inner">
                      <p className="f36 fw400 lh100 f_pp text-left grayn1 mt80">
                        Your Trusted Aseptic Beverage Partner
                      </p>
                      <p className="f90 fw600 lh140 mt40 mb100 text-left grayn1">
                        Containers of <br />
                        Nature & People
                      </p>
                    </div>
                    {/* //centerH3_inner */}
                  </div>
                  {/* //centerH3 */}
                </div>
              </div>
            </section>

            <section className="breadcrumb-section__area breadcrumb-section breadcrumb-section-4 breadcrumb-section-2__space border-bottom border-top busiType">
              <div className="container">
                <div className="breadcrumb-section__shape__wrap">
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                </div>

                <div className="row contant1100">
                  <div className="col-md-12 mb50">
                    <img src="../common/imgs/business/busi01.jpg" alt="멸균팩 제품" />
                  </div>

                  <div className="col-md-6">
                    <p className="f60 fw500 lh150">Aseptic Pack Products</p>
                  </div>

                  <div className="col-md-6">
                    <p className="f27 fw400 lh150 text-left">
                      With manufacturing technology refined through decades of experience, our aseptic packaging ensures
                      excellent portability and long-term shelf stability. We provide a complete one-stop solution, from
                      small-volume sampling to full-scale mass production.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 20250929 수정 */}
            <section className="contant1100 services-section__area services-section section-space">
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
                            <tr>
                              <td colSpan={2}>
                                <p className="f22 fw400 grayn1">Convenient Straw-Type Drinks</p>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}>
                                <p className="f40 fw600 mt10 pb20 grayn1">TETRA MID</p>
                              </td>
                            </tr>
                            <tr>
                              <th>Capacity(㎖)</th>
                              <td>190, 200</td>
                            </tr>
                            <tr>
                              <th>MOQ(ea)</th>
                              <td>180,000</td>
                            </tr>
                            <tr>
                              <th>MOQ</th>
                              <td>302,000</td>
                            </tr>
                            <tr>
                              <th>
                                Packaging <br />
                                Material
                              </th>
                              <td>24 pack tray, 16 pack gift set</td>
                            </tr>
                            <tr>
                              <th>
                                Drinking <br />
                                Method
                              </th>
                              <td>STRW</td>
                            </tr>
                            <tr>
                              <td colSpan={2} className="pt20">
                                <img src="../common/imgs/business/tertamid.jpg" alt="tertamid" />
                              </td>
                            </tr>
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
                            <tr>
                              <td colSpan={2}>
                                <p className="f22 fw400 grayn1">Customized Capacity Design</p>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}>
                                <p className="f40 fw600 mt10 pb20 grayn1">SIG COMBIBLOC</p>
                              </td>
                            </tr>
                            <tr>
                              <th>Capacity(㎖)</th>
                              <td>125 ~ 250</td>
                            </tr>
                            <tr>
                              <th>MOQ(ea)</th>
                              <td>200,000</td>
                            </tr>
                            <tr>
                              <th>MOQ</th>
                              <td>
                                125 : 500,000 / 150 : 570,000
                                <br />
                                200 : 460,000 / 250 : 330,000
                              </td>
                            </tr>
                            <tr>
                              <th>
                                Packaging <br />
                                Material
                              </th>
                              <td>24 pack tray</td>
                            </tr>
                            <tr>
                              <th>
                                Drinking <br />
                                Method
                              </th>
                              <td>STRW</td>
                            </tr>
                            <tr>
                              <td colSpan={2} className="pt20">
                                <img src="../common/imgs/business/sig.jpg" alt="sig" />
                              </td>
                            </tr>
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
                            <tr>
                              <td colSpan={2}>
                                <p className="f22 fw400 grayn1">대용량 음료</p>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}>
                                <p className="f40 fw600 mt10 pb20 grayn1">SIG COMBIBLOC</p>
                              </td>
                            </tr>
                            <tr>
                              <th>Capacity(㎖)</th>
                              <td>950, 1000</td>
                            </tr>
                            <tr>
                              <th>MOQ(ea)</th>
                              <td>50,000</td>
                            </tr>
                            <tr>
                              <th>MOQ</th>
                              <td>79,000</td>
                            </tr>
                            <tr>
                              <th>
                                Packaging <br />
                                Material
                              </th>
                              <td>12 pack tray W/A</td>
                            </tr>
                            <tr>
                              <th>
                                Drinking <br />
                                Method
                              </th>
                              <td>CAP</td>
                            </tr>
                            <tr>
                              <td colSpan={2} className="pt20">
                                <img src="../common/imgs/business/tetra1000.jpg" alt="sig" />
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="tetrape"
                        role="tabpanel"
                        aria-labelledby="tetrape-tab"
                        tabIndex={0}>
                        <div className="typeBox">
                          <table cellSpacing="0" border="0" className="tyleTable">
                            <colgroup>
                              <col width="30%" />
                              <col width="70%" />
                            </colgroup>
                            <tr>
                              <td colSpan={2}>
                                <p className="f22 fw400 grayn1">프리미엄 멸균팩</p>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}>
                                <p className="f40 fw600 mt10 pb20 grayn1">TETRA P/E</p>
                              </td>
                            </tr>
                            <tr>
                              <th>Capacity(㎖)</th>
                              <td>200, 250</td>
                            </tr>
                            <tr>
                              <th>MOQ(ea)</th>
                              <td>150,000</td>
                            </tr>
                            <tr>
                              <th>MOQ</th>
                              <td>200 : 289,000 / 250 : 246,000</td>
                            </tr>
                            <tr>
                              <th>
                                Packaging <br />
                                Material
                              </th>
                              <td>18pack tray</td>
                            </tr>
                            <tr>
                              <th>
                                Drinking <br />
                                Method
                              </th>
                              <td>CAP</td>
                            </tr>
                            <tr>
                              <td colSpan={2} className="pt20">
                                <img src="../common/imgs/business/tetraPE.jpg" alt="sig" />
                              </td>
                            </tr>
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
                        <div className="services__tab__title f45 fw600">
                          TETRA MID <span className="gra">190, 200ml</span>
                          <br />
                          <span className="f20 fw400 grayn1 mt20">
                            The most widely used format for soy beverages and protein drinks.
                          </span>
                        </div>
                      </div>

                      <div
                        className="nav-link"
                        id="sig-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#sig"
                        role="tab"
                        aria-controls="sig"
                        aria-selected="false">
                        <div className="services__tab__title f45 fw600">
                          SIG COMBIBLOC <span className="gra">125~250ml</span>
                          <br />
                          <span className="f20 fw400 grayn1 mt20">
                            Choose from small sizes up to 250mL based on your business strategy
                          </span>
                        </div>
                      </div>

                      <div
                        className="nav-link"
                        id="edge-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#edge"
                        role="tab"
                        aria-controls="edge"
                        aria-selected="false">
                        <div className="services__tab__title f45 fw600">
                          TETRA EDGE <span className="gra">950, 1000ml</span>
                          <br />
                          <span className="f20 fw400 grayn1 mt20">
                            Sizes used for large-format beverages and cooking stocks
                          </span>
                        </div>
                      </div>

                      <div
                        className="nav-link"
                        id="tetrape-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#tetrape"
                        role="tab"
                        aria-controls="tetrape"
                        aria-selected="false">
                        <div className="services__tab__title f45 fw600">
                          TETRA P/E <span className="gra">200, 250ml</span>
                          <br />
                          <span className="f20 fw400 grayn1 mt20">
                            A packaging format suited to premium product lines
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* //20250929 수정 */}

            <section className="breadcrumb-section__area breadcrumb-section breadcrumb-section-4 breadcrumb-section-2__space border-bottom border-top busiType">
              <div className="container">
                <div className="breadcrumb-section__shape__wrap">
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                </div>

                <div className="row contant1100">
                  <div className="col-md-12 mb50">
                    <img src="../common/imgs/business/busi02.jpg" alt="캔 제품" />
                  </div>

                  <div className="col-md-6">
                    <p className="f60 fw500 lh150">Canned Products</p>
                  </div>

                  <div className="col-md-6">
                    <p className="f27 fw400 lh150 text-left">
                      Aluminum cans offer excellent portability and shelf stability, allowing a wide range of beverages
                      to be produced in various volumes.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="contant1100 services-section__area services-section section-space">
              <div className="row align-items-center flex-lg-row mt50 flex">
                <div className="col-md-5">
                  <div className="services__content__wrapper">
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="canslim"
                        role="tabpanel"
                        aria-labelledby="canslim-tab"
                        tabIndex={0}>
                        <div className="typeBox">
                          <table cellSpacing="0" border="0" className="tyleTable">
                            <colgroup>
                              <col width="30%" />
                              <col width="70%" />
                            </colgroup>
                            <tr>
                              <td colSpan={2}>
                                <p className="f22 fw400 grayn1">RTD Focused Cans</p>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}>
                                <p className="f40 fw600 mt10 pb20 grayn1">CAN(slim)</p>
                              </td>
                            </tr>
                            <tr>
                              <th>Capacity(㎖)</th>
                              <td>175, 200, 240</td>
                            </tr>
                            <tr>
                              <th>MOQ(ea)</th>
                              <td>500,000</td>
                            </tr>
                            <tr>
                              <th>
                                Packaging <br />
                                Material
                              </th>
                              <td>30 pack tray, 30 pack W/A</td>
                            </tr>
                            <tr>
                              <td colSpan={2} className="pt20">
                                <img src="../common/imgs/business/can01.jpg" alt="canslim" />
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="canstubby"
                        role="tabpanel"
                        aria-labelledby="canstubby-tab"
                        tabIndex={0}>
                        <div className="typeBox">
                          <table cellSpacing="0" border="0" className="tyleTable">
                            <colgroup>
                              <col width="30%" />
                              <col width="70%" />
                            </colgroup>
                            <tr>
                              <td colSpan={2}>
                                <p className="f22 fw400 grayn1">한 손에 꽉 찬 용량</p>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}>
                                <p className="f40 fw600 mt10 pb20 grayn1">CAN(stubby)</p>
                              </td>
                            </tr>
                            <tr>
                              <th>Capacity(㎖)</th>
                              <td>238, 350</td>
                            </tr>
                            <tr>
                              <th>MOQ(ea)</th>
                              <td>330,000</td>
                            </tr>
                            <tr>
                              <th>
                                Packaging <br />
                                Material
                              </th>
                              <td>24입 TRAY, 24입 W/A, 12입 GIFT</td>
                            </tr>
                            <tr>
                              <td colSpan={2} className="pt20">
                                <img src="../common/imgs/business/can02.jpg" alt="canstubby" />
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-7 mb30m">
                  <div className="services__tab__wrapper type">
                    <div className="nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <div
                        className="nav-link active"
                        id="canslim-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#canslim"
                        role="tab"
                        aria-controls="canslim"
                        aria-selected="true">
                        <div className="services__tab__title f45 fw600">
                          CAN(slim) <span className="gra">175, 200, 240ml</span>
                          <br />
                          <span className="f20 fw400 grayn1 mt20">Ideal for sports drinks and coffee beverages.</span>
                        </div>
                      </div>

                      <div
                        className="nav-link"
                        id="canstubby-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#canstubby"
                        role="tab"
                        aria-controls="canstubby"
                        aria-selected="false">
                        <div className="services__tab__title f45 fw600">
                          CAN(stubby) <span className="gra">238, 350ml</span>
                          <br />
                          <span className="f20 fw400 grayn1 mt20">식혜등의 대용량 캔에 적합한 사이즈</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="blog10__area body-bg section-space-top section-space-bottom-160">
              <div className="container">
                <p className="center f40 fw600 grayn1">Products Manufactured by Nature & People</p>

                <div className="blog10__filter mt70">
                  <button className="active" data-filter="*">
                    ALL
                  </button>
                  <button data-filter=".type01">TETRA MID</button>
                  <button data-filter=".type02">SIG COMBIBLOC</button>
                  <button data-filter=".type03">TETRA EDGE</button>
                  <button data-filter=".type04">TETRA P/E</button>
                  <button data-filter=".type05">CAN(slim)</button>
                  <button data-filter=".type06">CAN(stubby)</button>
                </div>

                <div className="row mb-minus-30 grid product">
                  <div className="col-lg-3 col-4 grid-item type01 ">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/TetraPack-200ml-mid_서울우유-협동조합(검은깨검은콩).jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-content mt20">
                        <div className="blog1__item-category">
                          <ul>
                            <li>
                              <span className="cb01">Soy Milk</span>
                            </li>
                          </ul>
                        </div>
                        <p className="f18 grayn1 mt10 mt10m">Seoul Milk Cooperative One Doo-mil PLUS Soy Beverage</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type01">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb ">
                        <img
                          src="../common/imgs/thum/TetraPack-200ml-mid_서울우유-협동조합(원두밀).jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-content mt20">
                        <div className="blog1__item-category">
                          <ul>
                            <li>
                              <span className="cb01">Soy Milk</span>
                            </li>
                          </ul>
                        </div>
                        <p className="f18 grayn1 mt10 mt10m">Seoul Milk Cooperative One Doo-mil PLUS Soy Beverage</p>
                      </div>
                    </div>
                  </div>

                  {/*
<div class="col-lg-3 col-4 grid-item type01">
  <div class="blog1__item mb-30">
    <div class="blog1__item-thumb">
      <img src="../common/imgs/thum/TetraPack-200ml-mid_자연과사람들두유-검은콩.jpg" alt="img not found">
    </div>
    <div class="blog1__item-category mt20">
      <ul>
        <li><span class="cb01">두유(멸균)</span></li>
      </ul>
    </div> 
    <p class="f18 grayn1 mt10 mt10m">자연과사람들<br />건강한두유 검은콩</p>
  </div>
</div>

<div class="col-lg-3 col-4 grid-item type01">
  <div class="blog1__item mb-30">
    <div class="blog1__item-thumb">
      <img src="../common/imgs/thum/TetraPack-200ml-mid_자연과사람들두유-아호검.jpg" alt="img not found">
    </div>
    <div class="blog1__item-category mt20">
      <ul>
        <li><span class="cb01">두유(멸균)</span></li>
      </ul>
    </div> 
    <p class="f18 grayn1 mt10 mt10m">자연과사람들<br />건강한두유 아몬드호두검은콩</p>
  </div>
</div>

<div class="col-lg-3 col-4 grid-item type01">
  <div class="blog1__item mb-30">
    <div class="blog1__item-thumb">
      <img src="../common/imgs/thum/TetraPack-200ml-mid_자연과사람들두유-플레인.jpg" alt="img not found">
    </div>
    <div class="blog1__item-category mt20">
      <ul>
        <li><span class="cb01">두유(멸균)</span></li>
      </ul>
    </div> 
    <p class="f18 grayn1 mt10 mt10m">자연과사람들<br />건강한두유 플레인</p>
  </div>
</div>
*/}

                  <div className="col-lg-3 col-4 grid-item type01">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="../common/imgs/thum/TetraPack-200ml-mid_파스퇴르.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb02">Sterilized Milk</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">Pasteur Barunmokjang Milk</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04 ">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="../common/imgs/thum/200250mLA3CompactFlex케어웰_rth400.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb03">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">Korean Enteral Nutrition Carewell RTH Fiber 400</p>
                    </div>
                  </div>

                  {/*
<div class="col-lg-3 col-4 grid-item type04 ">
  <div class="blog1__item mb-30">
    <div class="blog1__item-thumb">
      <img src="../common/imgs/thum/200250mLA3-Compact-Flex_케어웰-구수한맛.jpg" alt="img not found">
    </div>
    <div class="blog1__item-category mt20">
      <ul>
        <li><span class="cb03">Patient Care Foods</span></li>
      </ul>
    </div> 
    <p class="f18 grayn1 mt10 mt10m">Korean Enteral Nutrition  Carewell Savory Flavor</p>
  </div>
</div>
*/}

                  <div className="col-lg-3 col-4 grid-item type04 ">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="../common/imgs/thum/200250mL-A3-Compact-Flex_케어웰-디엠.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb03">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">Korean Enteral Nutrition Carewell DM</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04 ">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/200250mL-A3-Compact-Flex_그린비아-프로틴밀-초코.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">Mixed Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">Dr. Chung’s Food Greenbia Proteinmeal Active — Chocolate</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/200250mL-A3-Compact-Flex_그린비아-프로틴밀-아호.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">Mixed Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">
                        Dr. Chung’s Food Greenbia Proteinmeal Active — Almond &amp; Walnut
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/200250mL-A3-Compact-Flex_위져스-프로틴에잇-녹차.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">Mixed Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">Nature &amp; People Wizus Protein 8 Green Tea Latte</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/200250mL-A3-Compact-Flex_위져스-프로틴에잇-레몬아이스티.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">Mixed Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">Nature &amp; People Wizus Protein 8 Lemon Iced Tea</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="../common/imgs/thum/200250mL-A3-Compact-Flex_더단백초코.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">Mixed Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">Binggrae The Protein Drink Chocolate</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/200250mL-A3-Compact-Flex이지프로틴-시리얼.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">Mixed Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">Lotte Wellfood Easy Protein</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/200250mL-A3-Compact-Flex_이지프로틴_초코.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">Mixed Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">Lotte Wellfood Easy Protein Chocolate</p>
                    </div>
                  </div>

                  {/*
<div class="col-lg-3 col-4 grid-item type04">
  <div class="blog1__item mb-30">
    <div class="blog1__item-thumb">
      <img src="../common/imgs/thum/200250mL-A3-Compact-Flex_프쌤-바나나.jpg" alt="img not found">
    </div>
    <div class="blog1__item-category mt20">
      <ul>
        <li><span class="cb04">Mixed Beverages</span></li>
      </ul>
    </div>
    <p class="f18 grayn1 mt10 mt10m">파워풀엑스 프쌤 바나나맛</p>
  </div>
</div>
*/}
                  {/*
<div class="col-lg-3 col-4 grid-item type04">
  <div class="blog1__item mb-30">
    <div class="blog1__item-thumb">
      <img src="../common/imgs/thum/200250mL-A3-Compact-Flex_빙그레-야채랑사과.jpg" alt="img not found">
    </div>
    <div class="blog1__item-category mt20">
      <ul>
        <li><span class="cb05">Fruit & Vegetable Juice</span></li>
      </ul>
    </div>
    <p class="f18 grayn1 mt10 mt10m">빙그레 야채랑사과</p>
  </div>
</div>
*/}
                  {/*
<div class="col-lg-3 col-4 grid-item type04">
  <div class="blog1__item mb-30">
    <div class="blog1__item-thumb">
      <img src="../common/imgs/thum/200250mL-A3-Compact-Flex_빙그레-오늘의-과일-야채-사과.jpg" alt="img not found">
    </div>
    <div class="blog1__item-category mt20">
      <ul>
        <li><span class="cb05">Fruit & Vegetable Juice</span></li>
      </ul>
    </div>
    <p class="f18 grayn1 mt10 mt10m">빙그레 오늘의 과일 야채 사과</p>
  </div>
</div>
*/}
                  {/*
<div class="col-lg-3 col-4 grid-item type04">
  <div class="blog1__item mb-30">
    <div class="blog1__item-thumb">
      <img src="../common/imgs/thum/200250mL-A3-Compact-Flex_빙그레-오늘의-과일-야채-ABC.jpg" alt="img not found">
    </div>
    <div class="blog1__item-category mt20">
      <ul>
        <li><span class="cb05">Fruit & Vegetable Juice</span></li>
      </ul>
    </div>
    <p class="f18 grayn1 mt10 mt10m">빙그레 오늘의 과일 야채 ABC</p>
  </div>
</div>
*/}

                  <div class="col-lg-3 col-4 grid-item type04">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/200250mL-A3-Compact-Flex_닥터바리스타-버터커피.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb06">Coffee</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Genieat Dr. Barista Butter Coffee</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type04">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/200250mL-A3-Compact-Flex_소이비랩-저당두유.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb01">Soy Milk</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Genieat Soybi Lab Low-Sugar Soy Milk</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/TetraPack-1000ml-edge_그린비아-디엠.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb08">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food Greenbia DM 1000</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/TetraPack-1000ml-edge_그린비아-티에프.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb08">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food Greenbia TF 1000</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/TetraPack-1000ml-edge_그린비아-화이바-엣지-1000.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb08">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food Greenbia Fiber Edge 1000</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/TetraPack-1000ml-edge_케어웰-어드벤스-1000.jpg"
                          alt="img not found"></img>
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb08">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Korean Enteral Food Carewell Advance 1000</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/TetraPack-1000ml-edge_매일두유-99.9.jpg"
                          alt="img not found"></img>
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb01">Soy Milk</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Maeil Dairy Maeil Soy Milk 99.9</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/TetraPack-1000ml-edge_풀무원-요리육수-사골.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb09">Sauce(Broth)</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Pulmuone Cooking Broth — Beef Bone (Sagol)</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/TetraPack-1000ml-edge_풀무원-요리육수-전골.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb09">Sauce(Broth)</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Pulmuone Cooking Broth — Hotpot (Jeongol)</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/TetraPack-1000ml-edge_풀무원-요리육수-해물.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb09">Sauce(Broth)</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Pulmuone Cooking Broth — Seafood</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/TetraPack-1000ml-edge_검은콩고칼슘_엣지.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb01">Soy Milk</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">
                        Dr. Chung’s Food Vegemil Black Bean Soy Milk High Calcium (Pack)
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/TetraPack-1000ml-edge_아몬드와호두_엣지.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb01">Soy Milk</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food Vegemil Almond & Walnut Soy Milk (Pack)</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/TetraPack-1000ml-edge_진한콩국물_검은콩.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb01">Soy Milk</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food Rich Black Bean Soup Base(Konggukmul)</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/TetraPack-1000ml-edge_진한콩국물.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb01">Soy Milk</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food Rich Bean Soup Base (Konggukmul)</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/TetraPack-1000ml-edge_베지밀_에이_엣지.jpg"
                          alt="img not found"></img>
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb01">Soy Milk</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food Vegemil Mild Soy Milk A</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/TetraPack-1.jpg" alt="img not found"></img>
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb01">Soy Milk</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food Vegemil Sweet Soy Milk B</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/TetraPack-1000ml-edge_담백한채소육수.jpg"
                          alt="img not found"></img>
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb09">Sauce(Broth)</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food Mild Vegetable Broth</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/TetraPack-1000ml-edge_시원한채소육수.jpg"
                          alt="img not found"></img>
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb09">Sauce(Broth)</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food Refreshing Vegetable Broth</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/TetraPack-1000ml-edge_구수한사골육수.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb09">Sauce(Broth)</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food Savory Beef Bone Broth</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/TetraPack-1000ml-edge_그린덴마크-귀리.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb04">Mixed Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dongwon F&B Denmark Green Oat Drink</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type03">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/TetraPack-1000ml-edge_그린덴마크-아몬드.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb04">Mixed Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dongwon F&B Denmark Green Almond Drink</p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mini_딸기맛우유.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb10">Processed Milk</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Binggrae Strawberry Flavored Milk MINI</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mini_바나나맛우유.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb10">Processed Milk</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Binggrae Banana Flavored Milk MINI</p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mini_비타-초코-우유.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb10">Processed Milk</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Chung Jung One Vita Strawberry Milk</p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mini_그린비아-키즈모아.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb04">Mixed Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Greenbia KidsMore</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mini_야채가득V19.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb05">Fruit & Vegetable Juice</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Healthy Veggie V19</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mini_따옴오가닉-사과비트.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb05">Fruit & Vegetable Juice</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Binggrae Ttaom Organic Apple Beet</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/SIG-Combibloc-mini_따옴오가닉-오렌지브로콜리.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb05">Fruit & Vegetable Juice</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Binggrae Ttaom Organic Orange Broccoli</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mini_고마워-감귤C.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb11">Fruit & Vegetable Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Chung Jung One Thank You Tangerine C</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mini_힘내-파인애플씨.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb11">Fruit & Vegetable Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Chung Jung One Cheer Up Pineapple C</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mini_사랑해-사과C.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb11">Fruit & Vegetable Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Chung Jung One Love You Apple C</p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mini_최고야-포도씨C.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb11">Fruit & Vegetable Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Chung Jung One The Best Grape C</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/SIG-Combibloc-mini_담백한베지밀에이-검은콩두유.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb01">Soy Milk</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Mild Vegemil A Black Bean Soy milk</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/SIG-Combibloc-mini_달콤한베지밀비-검은콩두유.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb01">Soy Milk</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Sweet Vegemil B Black Bean Soy milk</p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-4 grid-item  type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mid_빅썬-사과.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb11">Fruit & Vegetable Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Binggrae BigSun Apple</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item  type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mid_내사랑-오렌지-드링크.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb11">Fruit & Vegetable Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Woongjin My Love Orange Drink</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item  type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mid_내사랑-사과-드링크.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb11">Fruit & Vegetable Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Woongjin My Love Apple Drink</p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-4 grid-item  type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mid_내사랑-포도-드링크.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb11">Fruit & Vegetable Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Woongjin My Love Grape Drink</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item  type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/SIG-Combibloc-mid_웰치-오렌지망고-드링크.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb11">Fruit & Vegetable Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Nongshim Welch’s Orange Mango Drink</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item  type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mid_웰치-포도-드링크.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb11">Fruit & Vegetable Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Nongshim Welch’s Grape Drink</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item  type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/SIG-Combibloc-mid_과일이꼭꼭씹히는애플망고두유.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb12">Particle Drinks</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Chewy Fruit Apple Mango Soy milk</p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-4 grid-item  type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/SIG-Combibloc-mid_검은콩과-검은참깨-베지밀-두유.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb01">Soy Milk</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Vegemil Black Bean & Black Sesame Soy milk</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mid_케어웰-어드밴스200.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb08">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Korean Enteral Food Carewell Advance 200</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/SIG-Combibloc-mid_케어웰-당뇨식.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb08">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Korean Enteral Food – Carewell Diabetes Formula</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/SIG-Combibloc-mid_그린비아-플러스케어-당뇨식.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb08">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food – Greenbia PlusCare Diabetes Formula</p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-4 grid-item type02">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img
                          src="../common/imgs/thum/SIG-Combibloc-mid_그린비아-플러스케어-화이바.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb08">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food – Greenbia PlusCare Fiber</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type05">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/200-DIA_그린비아-고단백-솔루션.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb08">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food – Greenbia High-Protein Solution</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type05">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/200-DIA_그린비아-마일드케어.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb08">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food – Greenbia MildCare</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type05">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/200-DIA_그린비아-알디플러스.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb08">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food – Greenbia RD Plus</p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-4 grid-item type05">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/200-DIA_그린비아-디엠.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb08">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food – Greenbia DM</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type05">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/200-DIA_그린비아-티에프.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb08">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food Greenbia TF</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type05">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/200-DIA_그린비아-알디.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb08">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food – Greenbia RD</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type05">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/200-DIA_그린비아-화이바.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb08">Patient Care Foods</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Dr. Chung’s Food – Greenbia Fiber</p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-4 grid-item   type05">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/200-DIA_싼타페-헤이즐넛향.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb06">Coffee</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Paldo Santafé Hazelnut</p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-4 grid-item   type05">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/200-DIA_토레타.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb04">Mixed Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Coca-Cola Toreta</p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-4 grid-item   type05">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/200-DIA_파워에이드-마운틴블라스트.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb04">Mixed Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Coca-Cola POWERADE Mountain Blast</p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-4 grid-item type06">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/202-DIA_큰집식혜.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb04">Mixed Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Haitai HTB Big House Sikhye</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type06">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/202-DIA_노브랜드식혜.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb04">Mixed Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Emart No Brand Sikhye</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-4 grid-item type06">
                    <div class="blog1__item mb-30">
                      <div class="blog1__item-thumb">
                        <img src="../common/imgs/thum/202-DIA_Oh!-우리집-식혜.jpg" alt="img not found" />
                      </div>
                      <div class="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span class="cb04">Mixed Beverages</span>
                          </li>
                        </ul>
                      </div>
                      <p class="f18 grayn1 mt10 mt10m">Home Sikhye</p>
                    </div>
                  </div>
                  {/* 			<!-- //20250929 수정--> */}
                </div>
              </div>
            </section>
          </main>
          <FooterReactEN></FooterReactEN>
        </div>
      </div>
    </>
  );
};

export default ContainerEN;
