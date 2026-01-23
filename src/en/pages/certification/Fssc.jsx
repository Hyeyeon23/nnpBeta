import React from "react";
import MetaEN from "../../../components/common/MetaEN";

const FsscEN = () => {
  return (
    <>
      <MetaEN
        title={"Nature & People FSSC"}
        description={
          "Specialized in beverage OEM, ODM, Private Label, and B2B manufacturing, including exports. We expertly produce Aseptic Cartons, Gable Tops, and Cans."
        }></MetaEN>
      <section className="contant1100 mt200">
        <div className="row">
          <div className="col-lg-12">
            <p className="f52 fw600 grayn1 lh120 center">FSSC 22000 Certification</p>
          </div>
        </div>
      </section>

      <section>
        <div className="contant1160 mt100 mb200">
          <div className="row haccpBox">
            <div className="col-lg-6">
              <div>
                <p className="f40 fw600 f_pp grayn01 lh130 mt50">FSSC 22000</p>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="text-right">
                <img src="/common/imgs/company/FSSC.jpg" alt="haccp인증마크" />
              </p>
            </div>
          </div>

          <div className="row">
            {/* 20250929 수정 */}
            <div className="col-md-12 contant900 pb150">
              <p className="f18 lh170 mt50">
                Since obtaining our first ISO 22000 certification on October 8, 2011, Nature &amp; People has continued
                to apply global quality standards. It is an integrated certification combining ISO 9001 and HACCP,
                developed to systematically identify, assess, and control food safety hazards using scientific and
                logical approaches.
                <br />
                <br />
                <span className="fw500">
                  By linking these controls with a comprehensive management system, FSSC 22000 enables company-wide
                  participation—from top management to all employees—in ensuring continuous improvement of food safety.
                </span>
                <br />
                <br />
                Based on HACCP principles, our system was developed to scientifically and logically identify, assess,
                and control food safety hazards. By integrating these controls with our management system, we ensure
                systematic food safety management and continuous improvement through the participation of top management
                and all employees.
              </p>
            </div>

            {/* //20250929 수정 */}

            <div className="col-md-6">
              <ul className="fsscMark">
                <li>
                  <img src="/common/imgs/company/FSSC02.jpg" alt="IAF인증마크" />
                </li>
                <li>
                  <img src="/common/imgs/company/FSSC03.jpg" alt="FSSC 22000 인증마크" />
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <div className="fsscDot">
                <p className="f20">ISO 22000 (Food Safety Management System) – Obtained on October 8, 2011</p>
                <p className="f20">FSSC 22000 Certification – Obtained on June 4, 2015</p>
                <p className="f20">ISO 9001 Certification – Obtained on June 8, 2015</p>
                <p className="f20">
                  Through these certifications, Nature &amp; People has established a robust system that guarantees the
                  highest level of food safety for all products manufactured at our facilities.
                </p>
                <p className="f20">
                  By continually strengthening our food quality and safety management systems, we strive to deliver
                  safe, reliable, and high-quality beverages—solidifying our position as Korea’s leading OEM/ODM
                  beverage manufacturer.
                </p>
              </div>
            </div>
          </div>

          <div className="row lineTop mt100 pt100">
            <div className="col-md-4 col-4">
              <img src="/common/imgs/company/FSSC04.jpg" alt="" />
            </div>
            <div className="col-md-4 col-4">
              <img src="/common/imgs/company/FSSC05.jpg" alt="" />
            </div>
            <div className="col-md-4 col-4">
              <img src="/common/imgs/company/FSSC06.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FsscEN;
