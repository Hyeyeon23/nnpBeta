import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import FooterReact from "../../components/common/FooterReact";
import Meta from "../../components/common/Meta";

const RecruitInfo = ({ isInProgress }) => {
  const [recruit, setRecruit] = useState("");
  useEffect(() => {
    /* 공고 html 불러옴 */
    fetch(window.location.origin + "/html/recruit_info/20251024.txt")
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setRecruit(data);
      });
  }, []);

  return (
    <>
      {isInProgress == false ? (
        <section className="contant1100 mt200 mb200">
          <div className="content1100">
            <p className="f20 fw500 lh150 grayn1 center">현재 진행중인 채용공고가 없습니다.</p>
          </div>
        </section>
      ) : (
        <span dangerouslySetInnerHTML={{ __html: recruit }}></span>
      )}
    </>
  );
};

export default RecruitInfo;
