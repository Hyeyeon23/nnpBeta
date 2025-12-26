import React, { useEffect } from "react";
import Header from "../../components/common/Header";
import FooterReact from "../../components/common/FooterReact";
import Meta from "../../components/common/Meta";
const Container = () => {
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
      <Header></Header>
      <div id="smooth-wrapper" className="body-bg">
        <div>
          <main>
            <section className="subTop_type">
              <div className="container">
                <div className="subTop">
                  <div className="w80 centerH3">
                    <div className="centerH3_inner">
                      <p className="f36 fw400 lh100 f_pp text-left grayn1 mt80">
                        믿고 맡길 수 있는 ASEPTIC 음료 파트너
                      </p>
                      <p className="f90 fw600 lh140 mt40 mb100 text-left grayn1">
                        자연과사람들의
                        <br />
                        용기유형
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
                    <img src="/common/imgs/business/busi01.jpg" alt="멸균팩 제품" />
                  </div>
                  <div className="col-md-6">
                    <p className="f60 fw500 lh150">멸균팩 제품</p>
                  </div>
                  <div className="col-md-6">
                    <p className="f27 fw400 lh150 text-left">
                      오랜 경험으로 축적한 설비 기술을 보유하여, 장기간 보존이 가능한 멸균팩은 휴대성과 안정성이
                      뛰어납니다. 소용량 샘플링부터 대량 생산까지 원스톱 솔루션을 제공합니다.
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
                            <tbody>
                              <tr>
                                <td colSpan={2}>
                                  <p className="f22 fw400 grayn1">간편한 빨대 음용</p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={2}>
                                  <p className="f40 fw600 mt10 pb20 grayn1">TETRA MID</p>
                                </td>
                              </tr>
                              <tr>
                                <th>용량(㎖)</th>
                                <td>190, 200</td>
                              </tr>
                              <tr>
                                <th>MOQ(ea)</th>
                                <td>180,000</td>
                              </tr>
                              <tr>
                                <th>부자재MOQ</th>
                                <td>302,000</td>
                              </tr>
                              <tr>
                                <th>포장입수</th>
                                <td>24입 TRAY, 16입 GIFT</td>
                              </tr>
                              <tr>
                                <th>음용형태</th>
                                <td>STRW</td>
                              </tr>
                              <tr>
                                <td colSpan={2} className="pt20">
                                  <img src="/common/imgs/business/tertamid.jpg" alt="tertamid" />
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
                                  <p className="f22 fw400 grayn1">용량 맞춤 설계</p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={2}>
                                  <p className="f40 fw600 mt10 pb20 grayn1">SIG COMBIBLOC</p>
                                </td>
                              </tr>
                              <tr>
                                <th>용량(㎖)</th>
                                <td>125 ~ 250</td>
                              </tr>
                              <tr>
                                <th>MOQ(ea)</th>
                                <td>200,000</td>
                              </tr>
                              <tr>
                                <th>부자재MOQ</th>
                                <td>
                                  125 : 500,000 / 150 : 570,000
                                  <br />
                                  200 : 460,000 / 250 : 330,000
                                </td>
                              </tr>
                              <tr>
                                <th>포장입수</th>
                                <td>24입 TRAY</td>
                              </tr>
                              <tr>
                                <th>음용형태</th>
                                <td>STRW</td>
                              </tr>
                              <tr>
                                <td colSpan={2} className="pt20">
                                  <img src="/common/imgs/business/sig.jpg" alt="sig" />
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
                                  <p className="f22 fw400 grayn1">대용량 음료</p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={2}>
                                  <p className="f40 fw600 mt10 pb20 grayn1">SIG COMBIBLOC</p>
                                </td>
                              </tr>
                              <tr>
                                <th>용량(㎖)</th>
                                <td>950, 1000</td>
                              </tr>
                              <tr>
                                <th>MOQ(ea)</th>
                                <td>50,000</td>
                              </tr>
                              <tr>
                                <th>부자재MOQ</th>
                                <td>79,000</td>
                              </tr>
                              <tr>
                                <th>포장입수</th>
                                <td>12입 W/A</td>
                              </tr>
                              <tr>
                                <th>음용형태</th>
                                <td>CAP</td>
                              </tr>
                              <tr>
                                <td colSpan={2} className="pt20">
                                  <img src="/common/imgs/business/tetra1000.jpg" alt="sig" />
                                </td>
                              </tr>
                            </tbody>
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
                            <tbody>
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
                                <th>용량(㎖)</th>
                                <td>200, 250</td>
                              </tr>
                              <tr>
                                <th>MOQ(ea)</th>
                                <td>150,000</td>
                              </tr>
                              <tr>
                                <th>부자재MOQ</th>
                                <td>200 : 289,000 / 250 : 246,000</td>
                              </tr>
                              <tr>
                                <th>포장입수</th>
                                <td>18입 W/A</td>
                              </tr>
                              <tr>
                                <th>음용형태</th>
                                <td>CAP</td>
                              </tr>
                              <tr>
                                <td colSpan={2} className="pt20">
                                  <img src="/common/imgs/business/tetraPE.jpg" alt="sig" />
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
                        <div className="services__tab__title f45 fw600">
                          TETRA MID <span className="gra">190, 200ml</span>
                          <br />
                          <span className="f20 fw400 grayn1 mt20">두유 및 단백질음료로 가장 대중적인 사이즈</span>
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
                          SIG COMBIBLOC<span className="gra">125~250ml</span>
                          <br />
                          <span className="f20 fw400 grayn1 mt20">
                            작은사이즈 부터 250ml까지 비지니스 전략에 따라 선택
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
                          TETRA EDGE<span className="gra">950, 1000ml</span>
                          <br />
                          <span className="f20 fw400 grayn1 mt20">대용량 음료 및 요리육수에 사용되는 사이즈</span>
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
                          TETRA P/E<span className="gra">200, 250ml</span>
                          <br />
                          <span className="f20 fw400 grayn1 mt20">프리미엄 제품군에 어울리는 용기유형</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* //20250929 수정 */}

            <section className="breadcrumb-section__area breadcrumb-section breadcrumb-section-4 breadcrumb-section-2__space  border-bottom border-top busiType">
              <div className="container">
                <div className="breadcrumb-section__shape__wrap ">
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                </div>

                <div className="row contant1100">
                  <div className="col-md-12 mb50">
                    <img src="/common/imgs/business/busi02.jpg" alt="캔 제품" />
                  </div>
                  <div className="col-md-6">
                    <p className="f60 fw500 lh150">캔 제품</p>
                  </div>
                  <div className="col-md-6">
                    <p className="f27 fw400 lh150 text-left">
                      휴대가 간편하고 보존성이 뛰어난 알루미늄 캔으로 다양한 음료를 여러 가지 용량으로 제조할 수
                      있습니다. 소용량 샘플링부터 대량 생산까지 원스톱 솔루션을 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="contant1100 services-section__area services-section section-space">
              <div className="row align-items-center  flex-lg-row mt50 flex">
                <div className="col-md-5 ">
                  <div className="services__content__wrapper">
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="canslim"
                        role="tabpanel"
                        aria-labelledby="canslim-tab"
                        tabIndex="0">
                        <div className="typeBox">
                          <table cellspacing="0" border="0" className="tyleTable">
                            <colgroup>
                              <col width="30%" />
                              <col width="70%" />
                            </colgroup>
                            <tr>
                              <td colSpan="2">
                                <p className="f22 fw400 grayn1">RTD 특화 캔</p>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="2">
                                <p className="f40 fw600 mt10 pb20 grayn1">CAN(slim)</p>
                              </td>
                            </tr>
                            <tr>
                              <th>용량(㎖)</th>
                              <td>175, 200, 240</td>
                            </tr>
                            <tr>
                              <th>MOQ(ea)</th>
                              <td>500,000</td>
                            </tr>

                            <tr>
                              <th>포장입수</th>
                              <td>30입 TRAY, 30입 W/A</td>
                            </tr>
                            <tr>
                              <td colSpan="2" className="pt20">
                                <img src="/common/imgs/business/can01.jpg" alt="tertamid" />
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
                        tabIndex="0">
                        <div className="typeBox">
                          <table cellspacing="0" border="0" className="tyleTable">
                            <colgroup>
                              <col width="30%" />
                              <col width="70%" />
                            </colgroup>
                            <tr>
                              <td colSpan="2">
                                <p className="f22 fw400 grayn1">한 손에 꽉 찬 용량</p>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="2">
                                <p className="f40 fw600 mt10 pb20 grayn1">CAN(stubby)</p>
                              </td>
                            </tr>
                            <tr>
                              <th>용량(㎖)</th>
                              <td>238, 350</td>
                            </tr>
                            <tr>
                              <th>MOQ(ea)</th>
                              <td>330,000</td>
                            </tr>
                            <tr>
                              <th>포장입수</th>
                              <td>24입 TRAY, 24입 W/A, 12입 GIFT</td>
                            </tr>
                            <tr>
                              <td colSpan="2" className="pt20">
                                <img src="/common/imgs/business/can02.jpg" alt="canstubby" />
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
                          <span className="f20 fw400 grayn1 mt20">스포츠음료 및 커피에 적합한 사이즈 </span>
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
                          CAN(stubby)<span className="gra">238, 350ml</span>
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
                <p className="center f40 fw600 grayn1">자연과사람들 생산 품목</p>
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

                <div className="row mb-minus-30 grid product ">
                  <div className="col-lg-3 col-4 grid-item type01 ">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/TetraPack-200ml-mid_서울우유-협동조합(검은깨검은콩).jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-content mt20">
                        <div className="blog1__item-category">
                          <ul>
                            <li>
                              <span className="cb01">두유</span>
                            </li>
                          </ul>
                        </div>
                        <p className="f18 grayn1 mt10 mt10m">
                          서울우유 협동조합 <br />
                          칼슘이가득한 검은깨콩두유
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type01">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb ">
                        <img
                          src="/common/imgs/thum/TetraPack-200ml-mid_서울우유-협동조합(원두밀).jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-content mt20">
                        <div className="blog1__item-category">
                          <ul>
                            <li>
                              <span className="cb01">두유</span>
                            </li>
                          </ul>
                        </div>
                        <p className="f18 grayn1 mt10 mt10m">
                          서울우유 협동조합 <br />
                          원두밀 PLUS 콩두
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type01">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/TetraPack-200ml-mid_파스퇴르.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb02">멸균우유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">파스퇴르 바른목장우유</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04 ">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200250mLA3CompactFlex케어웰_rth400.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb03">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">
                        한국엔테랄
                        <br />
                        케어웰 RTH 화이바 400
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04 ">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200250mLA3-Compact-Flex_케어웰-구수한맛.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb03">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">
                        한국엔테랄
                        <br />
                        케어웰 구수한맛
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04 ">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200250mL-A3-Compact-Flex_케어웰-디엠.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb03">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">한국엔테랄 케어웰 디엠</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04 ">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/200250mL-A3-Compact-Flex_그린비아-프로틴밀-초코.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 그린비아 프로틴밀 Active 초코</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/200250mL-A3-Compact-Flex_그린비아-프로틴밀-아호.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 그린비아 프로틴밀 Active 아몬드와 호두</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/200250mL-A3-Compact-Flex_위져스-프로틴에잇-녹차.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">자연과사람들 위져스 프로틴8 녹차라떼</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/200250mL-A3-Compact-Flex_위져스-프로틴에잇-레몬아이스티.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">자연과사람들 위져스 프로틴8 레몬아이스티</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200250mL-A3-Compact-Flex_더단백초코.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">빙그레 더단백 드링크 초코</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/200250mL-A3-Compact-Flex이지프로틴-시리얼.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">롯데웰푸드 이지프로틴 시리얼</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200250mL-A3-Compact-Flex_이지프로틴_초코.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">롯데웰푸드 이지프로틴 초코</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200250mL-A3-Compact-Flex_프쌤-바나나.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">파워풀엑스 프쌤 바나나맛</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/200250mL-A3-Compact-Flex_빙그레-야채랑사과.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb05">과채주스</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">빙그레 야채랑사과</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/200250mL-A3-Compact-Flex_빙그레-오늘의-과일-야채-ABC.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb05">과채주스</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">빙그레 오늘의 과일 야채 ABC</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/200250mL-A3-Compact-Flex_닥터바리스타-버터커피.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb06">커피</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">지니어트 닥터바리스타 버터커피</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type04">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/200250mL-A3-Compact-Flex_소이비랩-저당두유.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb01">두유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">지니어트 소이비랩 저당두유</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/TetraPack-1000ml-edge_그린비아-디엠.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb08">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 그린비아 디엠 1000</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/TetraPack-1000ml-edge_그린비아-티에프.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb08">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 그린비아 티에프 1000</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/TetraPack-1000ml-edge_그린비아-화이바-엣지-1000.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb08">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 그린비아 화이바 엣지 1000</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/TetraPack-1000ml-edge_케어웰-어드벤스-1000.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb08">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">한국엔터랄푸드 케어웰 어드벤스 1000</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/TetraPack-1000ml-edge_매일두유-99.9.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb01">두유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">매일유업 매일두유 99.9</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/TetraPack-1000ml-edge_풀무원-요리육수-사골.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb09">소스(육수)</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">풀무원식품 풀무원 요리육수 사골</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/TetraPack-1000ml-edge_풀무원-요리육수-전골.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb09">소스(육수)</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">풀무원식품 풀무원 요리육수 전골</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/TetraPack-1000ml-edge_풀무원-요리육수-해물.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb09">소스(육수)</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">풀무원식품 풀무원 요리육수 해물</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/TetraPack-1000ml-edge_검은콩고칼슘_엣지.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb01">두유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 베지밀 검은콩 두유 고칼슘 팩</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/TetraPack-1000ml-edge_아몬드와호두_엣지.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb01">두유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 베지밀 아몬드와 호두두유 팩</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/TetraPack-1000ml-edge_진한콩국물_검은콩.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb01">두유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 진한 콩국물 검은콩</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/TetraPack-1000ml-edge_진한콩국물.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb01">두유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 진한 콩국물</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/TetraPack-1000ml-edge_베지밀_에이_엣지.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb01">두유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 담백한 두유 베지밀 에이</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/TetraPack-1.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb01">두유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 달콤한 두유 베지밀 비</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/TetraPack-1000ml-edge_담백한채소육수.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb09">소스(육수)</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 담백한 채소육수</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/TetraPack-1000ml-edge_시원한채소육수.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb09">소스(육수)</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 시원한 채소육수</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/TetraPack-1000ml-edge_구수한사골육수.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb09">소스(육수)</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 구수한 사골육수</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/TetraPack-1000ml-edge_그린덴마크-귀리.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">동원F&amp;B 그린덴마크 귀리</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4 grid-item type03">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/TetraPack-1000ml-edge_그린덴마크-아몬드.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">동원F&amp;B 그린덴마크 아몬드</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mini_딸기맛우유.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb10">가공유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">빙그레 딸기맛우유 MINI</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mini_바나나맛우유.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb10">가공유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">빙그레 바나나맛우유 MINI</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mini_비타-딸기-우유.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb10">가공유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">대상 비타 딸기 우유</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mini_비타-초코-우유.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb10">가공유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">대상 비타 초코 우유</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mini_그린비아-키즈모아.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 그린비아 키즈모아</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mini_야채가득V19.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb05">과채주스</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 건강담은야채가득V19</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mini_따옴오가닉-사과비트.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb05">과채주스</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">빙그레 따옴오가닉 사과비트</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/SIG-Combibloc-mini_따옴오가닉-오렌지브로콜리.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb05">과채주스</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">빙그레 따옴오가닉 오렌지브로콜리</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mini_고마워-감귤C.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb11">과채음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">대상 고마워 감귤C</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mini_힘내-파인애플씨.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb11">과채음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">대상 힘내 파인애플C</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mini_사랑해-사과C.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb11">과채음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">대상 사랑해 사과C</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mini_최고야-포도씨C.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb11">과채음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">대상 최고야 포도C</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/SIG-Combibloc-mini_담백한베지밀에이-검은콩두유.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb01">두유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 담백한베지밀에이 검은콩두유</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/SIG-Combibloc-mini_달콤한베지밀비-검은콩두유.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb01">두유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 달콤한베지밀비 검은콩두유</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mid_빅썬-사과.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb11">과채음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">빙그레 빅썬 사과</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mid_내사랑-오렌지-드링크.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb11">과채음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">웅진식품 내사랑 오렌지 드링크</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mid_내사랑-사과-드링크.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb11">과채음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">웅진식품 내사랑 사과 드링크</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mid_내사랑-포도-드링크.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb11">과채음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">웅진식품 내사랑 포도 드링크</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mid_웰치-오렌지망고-드링크.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb11">과채음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">농심 웰치 오렌지망고 드링크</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mid_웰치-포도-드링크.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb11">과채음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">농심 웰치 포도 드링크</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/SIG-Combibloc-mid_과일이꼭꼭씹히는애플망고두유.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb12">파티클 음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 과일이꼭꼭씹히는애플망고두유</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/SIG-Combibloc-mid_검은콩과-검은참깨-베지밀-두유.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb01">두유</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 검은콩과 검은참깨 베지밀 두유</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mid_케어웰-어드밴스200.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb08">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">한국엔테랄푸드 케어웰 어드밴스200</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/SIG-Combibloc-mid_케어웰-당뇨식.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb08">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">한국엔테랄푸드 케어웰 당뇨식</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/SIG-Combibloc-mid_그린비아-플러스케어-당뇨식.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb08">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 그린비아 플러스케어 당뇨식</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4 grid-item type02">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img
                          src="/common/imgs/thum/SIG-Combibloc-mid_그린비아-플러스케어-화이바.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb08">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 그린비아 플러스케어 화이바</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type05">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200-DIA_그린비아-고단백-솔루션.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb08">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 그린비아 고단백 솔루션</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type05">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200-DIA_그린비아-마일드케어.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb08">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 그린비아 마일드케어</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type05">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200-DIA_그린비아-알디플러스.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb08">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 그린비아 알디플러스</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type05">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200-DIA_그린비아-디엠.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb08">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 그린비아 디엠</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type05">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200-DIA_그린비아-티에프.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb08">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 그린비아 티에프</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type05">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200-DIA_그린비아-알디.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb08">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 그린비아 그린비아 알디</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type05">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200-DIA_그린비아-화이바.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb08">환자용식품</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">정식품 그린비아 화이바</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4 grid-item type05">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200-DIA_싼타페-오리지날.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb06">커피</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">팔도 싼타페 오리지날</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type05">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200-DIA_싼타페-헤이즐넛향.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb06">커피</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">팔도 싼타페 헤이즐넛향</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type05">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200-DIA_디앤카페-오리지날.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb06">커피</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">동아오츠카 디앤카페 오리지날</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type05">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200-DIA_토레타.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">코카콜라 토레타</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type05">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200-DIA_파워에이드-마운틴블라스트.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">코카콜라 파워에이드 마운틴블라스트</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type05">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/200-DIA_박카스-에이.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">동아제약 박카스 에이</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type06">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/202-DIA_큰집식혜.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">해태htb 큰집식혜</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type06">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/202-DIA_노브랜드식혜.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">이마트 노브랜드 식혜</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-4 grid-item type06">
                    <div className="blog1__item mb-30">
                      <div className="blog1__item-thumb">
                        <img src="/common/imgs/thum/202-DIA_Oh!-우리집-식혜.jpg" alt="img not found" />
                      </div>
                      <div className="blog1__item-category mt20">
                        <ul>
                          <li>
                            <span className="cb04">혼합음료</span>
                          </li>
                        </ul>
                      </div>
                      <p className="f18 grayn1 mt10 mt10m">아워홈 Oh! 우리집 식혜</p>
                    </div>
                  </div>
                  {/* 20250929 수정 */}
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

export default Container;
