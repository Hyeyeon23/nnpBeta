import React from "react";
import Header from "../../components/common/Header";
import FooterReact from "../../components/common/FooterReact";

const RecruitInfo = () => {
  return (
    <>
      <Header></Header>
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
                      <div className="tab-wrap">
                        {/* 
                  <div id="roundNav">
                    <ul className="subNav">
                      <li className="f20 active"><a href="">채용공고</a></li>
                      <li className="f20"><a href="">인사제도</a></li>
                      <li className="f20"><a href="">채용절차</a></li>
                      <li className="f20"><a href="">복지제도</a></li>
                    </ul>
                  </div>
                   <script>
                    {`
                      $(function() {
                        var lnb = $("#roundNav").offset().top;
                        $(window).scroll(function() {
                          var window = $(this).scrollTop();
                          if(lnb <= window) {
                            $("#roundNav").addClass("fixed");
                          } else {
                            $("#roundNav").removeClass("fixed");
                          }
                        })
                      });
                    `}
                  </script>
                  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 채용공고 없을때 */}
            <section className="contant1100 mt200 mb200">
              <div className="content1100">
                <p className="f20 fw500 lh150 grayn1 center">현재 진행중인 채용공고가 없습니다.</p>
              </div>
            </section>
            {/* //채용공고 없을때 */}

            {/* 채용공고 있을때 */}
            {/* 
      <section className="contant1100 mt200 mb100">
        <div className="row">
          <div className="col-lg-12">
            <p className="f52 fw600 grayn1 lh140 ">
              2025년 생산기술직 신입사원<br />
              (정규직 전환형 인턴)<br />
              수시 채용
            </p>
            <div className="recruit_t_box mt50 mb80">
              <table className="recruit_t">
                <colgroup>
                  <col width="25%" />
                  <col width="15%" />
                  <col width="15%" />
                  <col width="45%" />
                </colgroup>
                <tr>
                  <th>직무</th>
                  <th>인원</th>
                  <th>학력</th>
                  <th>관련전공(우대)</th>
                </tr>
                <tr>
                  <td>Operator( 음료배합,기계조작 )</td>
                  <td>0명</td>
                  <td>고졸(이상)</td>
                  <td>공고,전문대학 공학관련(식품, 화공, 전기, 기계 등)</td>
                </tr>
              </table>
              <table className="recruit_t">
                <colgroup>
                  <col width="33%" />
                  <col width="33%" />
                  <col width="33%" />
                </colgroup>
                <tr>
                  <th>자격(증)사항</th>
                  <th>구분</th>
                  <th>근무지</th>
                </tr>
                <tr>
                  <td>자격무관</td>
                  <td>
                    신입/<br />전환형 인턴
                  </td>
                  <td>
                    전남<br />담양군
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt30">
            <div className="rec_txt">
              <p>근무형태</p>
              <ul>
                <li>1년 계약직(1년근무 후 평가에 따라 정규직 전환)</li>
                <li>주,야간 3교대, 주5일제 근무 (필요 시 주말 근무)</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mt30">
            <div className="rec_txt">
              <p>임금</p>
              <ul>
                <li>연봉 약 3,500만원 이상 (하계휴가비 포함)</li>
                <li>3교대 정상 근무 시 약 4,500만원 (1년차, 각종 수당 포함 시)</li>
                <li>*근무시간에 따라 달라 질 수 있음</li>
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
                <li>대학생자녀 학자금, 미취학자녀 지원금 지급, 휴양시설 지원</li>
                <li>
                  하계휴가비, 사내식당운영, 동호회 활동지원, 단체보험, 통근버스 운행
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mt30">
            <div className="rec_txt">
              <p>지원자격</p>
              <ul>
                <li>2025년 기졸업자 및 졸업예정자</li>
                <li>병역필 또는 면제로 해외여행 결격사유가 없는 자</li>
                <li>3교대 근무 가능한 자</li>
                <li>기타 당사 취업규칙 상 결격사유에 해당하지 않는 자</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt30">
            <div className="rec_txt">
              <p>지원기간 및 방법</p>
              <ul>
                <li>지원서 접수기간 : 2025.07.29(화) ~ 2025.08.10(일)</li>
                <li>
                  지원방법 : 사람인, 홈페이지, 이메일 접수(hippo81@innp.co.kr)
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mt30">
            <div className="rec_txt">
              <p>제출서류</p>
              <ul>
                <li>
                  당사 양식 입사지원서, 자기소개서, 최종학교 성적/졸업증명서,
                  자격증 사본(직무 관련 자격증에 한함)
                </li>
                <li className="blue" style={{ background: "none" }}>
                  ※모든 서류는 전부 첨부 파일 형태로 송부할 것.(실물 서류 금지)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt30">
            <div className="rec_txt">
              <p>채용 프로세스</p>
              <ul>
                <li>
                  공정하고 객관적인 채용 절차를 통해 최고의 인재를 확보하기 위해
                  노력합니다.
                </li>
                <li>서류전형 합격자와 면접합격자는 개별 통보합니다.</li>
                <li className="blue" style={{ background: "none" }}>
                  ※모든 서류는 채용을 위해서만 이용되며, 채용 종료 시 5일 이내로
                  전산에서 삭제합니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="planning-section__area planning-section body-bg section-space-bottom mView1200">
        <div className="content1100">
          <div className="row">
            <div className="col-md-12">
              <p className="center">
                <img src="common/imgs/company/recruit_step.png" alt="" />
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
              <img src="common/imgs/icon/planning-arrow-icon.png" alt="icon" />
            </div>
            <div className="planning-section__content recruit_step">
              <h3 className="planning-section__title f30 fw500">서류전형</h3>
            </div>
          </div>
          <div className="planning-section__single__wrapper mb-30 p-relative">
            <div className="planning-section__number grayn2 f60 fw700">02</div>
            <div className="planning-section__shape">
              <img src="common/imgs/icon/planning-arrow-icon.png" alt="icon" />
            </div>
            <div className="planning-section__content">
              <h3 className="planning-section__title f30 fw500">인적성 검사</h3>
            </div>
          </div>
          <div className="planning-section__single__wrapper mb-30 p-relative">
            <div className="planning-section__number grayn2 f60 fw700">03</div>
            <div className="planning-section__shape">
              <img src="common/imgs/icon/planning-arrow-icon.png" alt="icon" />
            </div>
            <div className="planning-section__content">
              <h3 className="planning-section__title f30 fw500">1차 면접</h3>
            </div>
          </div>
          <div className="planning-section__single__wrapper mb-30 p-relative">
            <div className="planning-section__number grayn2 f60 fw700">04</div>
            <div className="planning-section__shape">
              <img src="common/imgs/icon/planning-arrow-icon.png" alt="icon" />
            </div>
            <div className="planning-section__content">
              <h3 className="planning-section__title f30 fw500">신체검사</h3>
            </div>
          </div>
          <div className="planning-section__single__wrapper mb-30 p-relative">
            <div className="planning-section__number grayn2 f60 fw700">05</div>
            <div className="planning-section__shape">
              <img src="common/imgs/icon/planning-arrow-icon.png" alt="icon" />
            </div>
            <div className="planning-section__content">
              <h3 className="planning-section__title f30 fw500">2차 면접</h3>
            </div>
          </div>
          <div className="planning-section__single__wrapper mb-30 p-relative">
            <div className="planning-section__number grayn5 f60 fw700">06</div>
            <div className="planning-section__shape">
              <img src="common/imgs/icon/planning-arrow-icon.png" alt="icon" />
            </div>
            <div className="planning-section__content recruit_step">
              <h3 className="planning-section__title f27 fw500">
                최종합격자 발표
              </h3>
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
                type="submit"
                className="mt50 title-btn rr-btn btn-transparent form-btn "
              >
                <span>
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                지원서 다운로드
              </button>
              <button
                type="submit"
                className="mt50 ml20 title-btn rr-btn btn-transparent form-btn "
              >
                <span>
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                지원하기
              </button>
            </div>
          </div>
        </div>
      </section>
      */}
            {/* //채용공고 있을때 */}
          </main>

          <FooterReact></FooterReact>
        </div>
      </div>
    </>
  );
};

export default RecruitInfo;
