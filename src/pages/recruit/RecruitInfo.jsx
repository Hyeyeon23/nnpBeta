import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import FooterReact from "../../components/common/FooterReact";
import Meta from "../../components/common/Meta";

const RecruitInfo = () => {
  const [isInProgress, setIsInProgress] = useState(false);
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

            {isInProgress == false ? (
              <section className="contant1100 mt200 mb200">
                <div className="content1100">
                  <p className="f20 fw500 lh150 grayn1 center">현재 진행중인 채용공고가 없습니다.</p>
                </div>
              </section>
            ) : (
              <span dangerouslySetInnerHTML={{ __html: recruit }}></span>
            )}
          </main>

          <FooterReact></FooterReact>
        </div>
      </div>
    </>
  );
};

export default RecruitInfo;
