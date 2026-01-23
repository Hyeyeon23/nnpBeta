import React, { useEffect, useState } from "react";

import MetaEN from "../../../components/common/MetaEN";
import { useOutletContext } from "react-router-dom";

const RecruitInfo = () => {
  const [recruit, setRecruit] = useState("");
  const { isInProgress } = useOutletContext();
  useEffect(() => {
    /* 공고 html 불러옴 */
    fetch(window.location.origin + "/html/recruit_info/20251106.txt")
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setRecruit(data);
      });
  }, []);

  return (
    <>
      <MetaEN
        title={"Nature & People Recruit Info"}
        description={
          "Specialized in beverage OEM, ODM, Private Label, and B2B manufacturing, including exports. We expertly produce Aseptic Cartons, Gable Tops, and Cans."
        }></MetaEN>
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
