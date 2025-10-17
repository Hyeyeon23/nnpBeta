import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import FooterReact from "../../components/common/FooterReact";
import Meta from "../../components/common/Meta";

const RecruitInfo = () => {
  const [isInProgress, setIsInProgress] = useState(true);
  const [recruit, setRecruit] = useState("");
  useEffect(() => {
    /* 공고 html 불러옴 */
    fetch("/html/recruit_info/20251017.html")
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setRecruit(data);
      });
  }, []);

  return (
    <>
      <Meta title={"자연과사람들 채용공고 "}></Meta>
      <Header color={"white"}></Header>
      <div id="smooth-wrapper" className="body-bg">
        <div>
          <main>
            <section className="subTop_recruit">
              <div className="container">
                <div className="subTop">
                  <div className="w80 centerH3">
                    <div className="centerH3_inner">
                      <p className="f36 fw600 lh100 white f_pp">Company</p>
                      <p className="f66 fw600 lh100 white mt60">채용정보</p>
                      <p className="f30 fw400 white lh150 mt40 mb100">
                        창의적 인재양성, 합리적 인사평가로 모든 구성원이
                        <br />
                        만족과 보람을 느끼도록 최선의 노력을 다하고 있습니다.
                      </p>
                      <div className="tab-wrap"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {isInProgress == false ? (
              <section className="contant1100 mt200 mb200">
                <div className="content1100">
                  <p className="f20 fw500 lh150 grayn1 center">현재 진행중인 채용공고가 없습니다.</p>
                </div>
              </section>
            ) : (
              <>
                <section className="contant1100 mt200 mb100">
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="f52 fw600 grayn1 lh140">2025년 신입사원 수시 채용</p>
                      <div className="recruit_t_box mt50 mb80">
                        <table className="recruit_t">
                          <colgroup>
                            <col width="20%" />
                            <col width="15%" />
                            <col width="15%" />
                            <col width="50%" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>모집분야</th>
                              <th>직군</th>
                              <th>학력</th>
                              <th>담당업무</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>자재관리</td>
                              <td>사무직</td>
                              <td>
                                대졸
                                <br />
                                이상
                              </td>
                              <td>
                                - 자재 소요량 산출, 구매요청 및 재고 관리
                                <br />- 공장 내외부 자재창고관리
                                <br />- 인원관리 및 기타 물류 관련 업무
                              </td>
                            </tr>
                            <tr>
                              <td>
                                품질관리
                                <br />
                                (인증)
                              </td>
                              <td>사무직</td>
                              <td>
                                대졸
                                <br />
                                이상
                              </td>
                              <td>
                                - HACCP 인증 유지 및 대응
                                <br />- FSSC 22000, ISO 9001 인증 유지 및 대응
                                <br />- GMP, 할랄 인증 유지 및 대응
                                <br />- 거래처 위생점검 및 실사 대응
                                <br />- 식품 관련 법령 제·개정 사항 확인
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table className="recruit_t">
                          <colgroup>
                            <col width="40%" />
                            <col width="30%" />
                            <col width="30%" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>자격 및 우대사항</th>
                              <th>근무지</th>
                              <th>비고</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <br />- 상경계열 우대
                                <br />- 자재업무 경력자 우대
                                <br />
                              </td>
                              <td>전남 담양</td>
                              <td>
                                신입/경력
                                <br />
                                (2년 이하)
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <br />- 식품/화학/생명 계열 우대
                                <br />- 식품공학/미생물 전공자 우대
                                <br />
                                <br />
                                <br />
                              </td>
                              <td>
                                <br />
                                전남 담양
                                <br />
                                <br />
                                <br />
                              </td>
                              <td>
                                <br />
                                신입/경력
                                <br />
                                (2년 이하)
                                <br />
                                <br />
                                <br />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mt30">
                      <div className="rec_txt">
                        <p>근무형태</p>
                        <ul>
                          <li>사무직 : 정규직</li>
                          <li>주 5일 근무제도(주 40시간) 시행</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 mt30">
                      <div className="rec_txt">
                        <p>임금</p>
                        <ul>
                          <li>사무직 : 연봉 약 4,400만원</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mt30">
                      <div className="rec_txt">
                        <p>처우</p>
                        <ul>
                          <li>직책, 근속, 자격, 직무, 가족수당 등 지급(해당자)</li>
                          <li>대학생자녀 학자금, 미취학자녀 지원금 지급, 복지포인트 지급, 경조사 지원</li>
                          <li>휴양시설 지원, 하계휴가비, 동호회 활동지원, 단체보험, 통근버스</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 mt30">
                      <div className="rec_txt">
                        <p>지원자격</p>
                        <ul>
                          <li>2025년 기졸업자 및 졸업 예정자</li>
                          <li>해외여행 결격사유가 없는 자</li>
                          <li>기타 당사 취업규칙 상 결격사유에 해당하지 않는 자</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mt30">
                      <div className="rec_txt">
                        <p>공통 우대사항</p>
                        <ul>
                          <li>외국어능력 및 지원분야 관련 자격증 소지자</li>
                          <li>보훈대상자 및 장애인 지원자는 관련법령에 의거 우대</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 mt30">
                      <div className="rec_txt">
                        <p>지원기간 및 방법</p>
                        <ul>
                          <li>지원서 접수기간 : 2025.10.17(금) ~ 2025.11.02(일) 24:00</li>
                          <li>지원방법 : 사람인 접수</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 mt30">
                      <div className="rec_txt">
                        <p>제출서류</p>
                        <ul>
                          <li>
                            사무직 : 당사 양식 입사지원서, 자기소개서, 성적증명서, 경력증명서(해당 지원자만),
                            졸업증명서, 자격증 사본(직무 관련)
                          </li>
                          <li className="blue" style={{ background: "none" }}>
                            ※모든 서류는 반드시 전자 형태로 송부할 것
                            <br />
                            ※입사지원서, 졸업증명서 등 서류 미제출 시 채용과정에서 불이익 발생할 수 있음
                          </li>
                          <li>이력서 수신처 : hippo81@innp.co.kr</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 mt30">
                      <div className="rec_txt">
                        <p>전형절차</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="planning-section__area planning-section body-bg section-space-bottom mView1200">
                  <div className="content1100">
                    <div className="row">
                      <div className="col-md-12">
                        <p className="center">
                          <img src="/common/imgs/company/recruit_step.png" alt="" />
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="planning-section__area planning-section body-bg section-space-bottom wView1200">
                  <div className="planning-section__wrapper mb-minus-30 recruit_step_wrap">
                    <div className="planning-section__single__wrapper mb-30 p-relative">
                      <div className="planning-section__number grayn5 f60 fw700">01</div>
                      <div className="planning-section__shape">
                        <img src="/common/imgs/icon/planning-arrow-icon.png" alt="icon" />
                      </div>
                      <div className="planning-section__content recruit_step">
                        <h3 className="planning-section__title f30 fw500">서류접수</h3>
                      </div>
                    </div>

                    <div className="planning-section__single__wrapper mb-30 p-relative">
                      <div className="planning-section__number grayn2 f60 fw700">02</div>
                      <div className="planning-section__shape">
                        <img src="/common/imgs/icon/planning-arrow-icon.png" alt="icon" />
                      </div>
                      <div className="planning-section__content">
                        <h3 className="planning-section__title f30 fw500">서류전형</h3>
                      </div>
                    </div>

                    <div className="planning-section__single__wrapper mb-30 p-relative">
                      <div className="planning-section__number grayn2 f60 fw700">03</div>
                      <div className="planning-section__shape">
                        <img src="/common/imgs/icon/planning-arrow-icon.png" alt="icon" />
                      </div>
                      <div className="planning-section__content">
                        <h3 className="planning-section__title f30 fw500">인적성검사</h3>
                      </div>
                    </div>

                    <div className="planning-section__single__wrapper mb-30 p-relative">
                      <div className="planning-section__number grayn2 f60 fw700">04</div>
                      <div className="planning-section__shape">
                        <img src="/common/imgs/icon/planning-arrow-icon.png" alt="icon" />
                      </div>
                      <div className="planning-section__content">
                        <h3 className="planning-section__title f30 fw500">1차 면접</h3>
                      </div>
                    </div>

                    <div className="planning-section__single__wrapper mb-30 p-relative">
                      <div className="planning-section__number grayn2 f60 fw700">05</div>
                      <div className="planning-section__shape">
                        <img src="/common/imgs/icon/planning-arrow-icon.png" alt="icon" />
                      </div>
                      <div className="planning-section__content">
                        <h3 className="planning-section__title f30 fw500">신체검사</h3>
                      </div>
                    </div>

                    <div className="planning-section__single__wrapper mb-30 p-relative">
                      <div className="planning-section__number grayn2 f60 fw700">06</div>
                      <div className="planning-section__shape">
                        <img src="/common/imgs/icon/planning-arrow-icon.png" alt="icon" />
                      </div>
                      <div className="planning-section__content">
                        <h3 className="planning-section__title f30 fw500">2차 면접</h3>
                      </div>
                    </div>

                    <div className="planning-section__single__wrapper mb-30 p-relative">
                      <div className="planning-section__number grayn5 f60 fw700">07</div>
                      <div className="planning-section__shape">
                        <img src="/common/imgs/icon/planning-arrow-icon.png" alt="icon" />
                      </div>
                      <div className="planning-section__content recruit_step">
                        <h3 className="planning-section__title f27 fw500">최종합격자 발표</h3>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="contant1100 mb200">
                  <div className="row">
                    <div className="col-md-12 mt30">
                      <div className="rec_txt">
                        <p>채용문의</p>
                        <ul>
                          <li className="blue" style={{ background: "none" }}>
                            ※ 자세한 사항은 070-5154-3662번으로 문의바랍니다
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-12 mt100">
                      <div className="center">
                        <button
                          type="button"
                          className="mt50 title-btn rr-btn btn-transparent form-btn"
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "/common/imgs/company/recruitFile.zip";
                            link.download = "recruitFile.zip"; // 파일 이름 지정 가능
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}>
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                          지원서 다운로드
                        </button>
                        <button
                          type="button"
                          className="mt50 ml20 title-btn rr-btn btn-transparent form-btn"
                          onClick={() =>
                            window.open("https://www.saramin.co.kr/zf_user/jobs/view?rec_idx=52045483", "_blank")
                          }>
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                          지원하기
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}
          </main>

          <FooterReact></FooterReact>
        </div>
      </div>
    </>
  );
};

export default RecruitInfo;
