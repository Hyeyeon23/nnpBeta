import React, { useEffect } from "react";
import MetaEN from "../../../components/common/MetaEN";

const RoadEN = () => {
  useEffect(() => {
    // 서울사무소 지도
    new window.daum.roughmap.Lander({
      timestamp: "1616651843627",
      key: "2522v",
      mapWidth: "100%",
      mapHeight: "540",
    }).render();

    // 담양공장 지도
    new window.daum.roughmap.Lander({
      timestamp: "1509327278533",
      key: "k8o8",
      mapWidth: "950",
      mapHeight: "540",
    }).render();
  }, []);
  return (
    <>
      <MetaEN
        title={"Nature & People Load"}
        description={
          "Specialized in beverage OEM, ODM, Private Label, and B2B manufacturing, including exports. We expertly produce Aseptic Cartons, Gable Tops, and Cans."
        }></MetaEN>
      <section>
        <div className="contant1160 mb200">
          {/* 서울사무소 */}
          <div className="row loadLine">
            <div className="col-sm-12 mt200">
              <p className="f52 fw500 grayn1 center ">Nature & People Seoul Office</p>{" "}
              <div className="mapWrapper mt100">
                <div
                  id="daumRoughmapContainer1616651843627"
                  className="root_daum_roughmap root_daum_roughmap_landing"></div>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="load_ul">
                <li>
                  <img src="/common/imgs/company/load_point.jpg" alt="" />
                </li>
                <li className="f18 lh160">
                  <p className="fw600 f18 grayn1 mb10 ">Address</p>04634) 16, Toegye-ro 8-gil,
                  <br /> Jung-gu, Seoul, <br />
                  Republic of Korea
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="load_ul">
                <li>
                  <img src="/common/imgs/company/load_call.jpg" alt="" />
                </li>
                <li className="f18">
                  <p className="fw600 f18 grayn1 mb10">TEL</p> 02-6263-9000
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="load_ul">
                <li>
                  <img src="/common/imgs/company/load_map.jpg" alt="" />
                </li>
                <li className="f18 lh160">
                  <p className="fw600 f18 grayn1 mb10">Location</p> 2-minute walk from <br />
                  Hoehyeon Station (Exit 1)
                </li>
              </ul>
            </div>
          </div>

          {/* 담양공장 */}
          <div className="row loadLine">
            <div className="col-sm-12 mt200">
              <p className="f52 fw500 grayn1 center">Nature & People Damyang Plant</p>
              <div className="mapWrapper mt100">
                <div
                  id="daumRoughmapContainer1509327278533"
                  className="root_daum_roughmap root_daum_roughmap_landing"></div>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="load_ul">
                <li>
                  <img src="/common/imgs/company/load_point.jpg" alt="" />
                </li>
                <li className="f18 lh150">
                  <p className="fw600 f18 grayn1 mb10">주소</p>(57353) 10, Geumseonggongdan-gil, <br />
                  Geumseong-myeon, Damyang-gun,
                  <br />
                  Jeollanam-do, Republic of Korea
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="load_ul">
                <li>
                  <img src="/common/imgs/company/load_call.jpg" alt="" />
                </li>
                <li className="f18 lh150">
                  <p className="fw600 f18 grayn1 mb10">TEL</p>
                  061-380-1100
                </li>
              </ul>
            </div>
            <div className="col-md-12">
              <ul className="load_ul load_flex">
                <li className="fixed">
                  <img src="/common/imgs/company/load_map.jpg" alt="" />
                </li>
                <li className="flexible f18 lh150">
                  <p className="f18 grayn1 mb10">
                    <span className="fw600 mb10">Directions from Seoul</span>
                    <br />
                    Seoul → Gyeongbu Expressway → Honam Expressway →<br class="mView" /> Seodaejeon → Nonsan → Jeonju →
                    Jeongeup → <br class="mView" />
                    Jangseong Junction (toward Suncheon) →<br class="mView" />
                    Damyang Junction (toward Daegu, Route 88) → <br class="mView" />
                    Damyang IC → Nature & People
                  </p>{" "}
                  <br />
                  <p class="f18 grayn1 mb10">
                    <span class="fw600 mb10">Directions from Gwangju </span>
                    Gwangju Airport → Usan-dong → Wolgok-dong → <br class="mView" />
                    Gwangsan IC (enter expressway) → via Honam Expressway → <br class="mView" />
                    Seogwangju Toll Gate → <br class="mView" />
                    Goseo Junction (toward Daegu, Route 99) → <br class="mView" />
                    Damyang IC (toward Suncheon, approx. 7 km) → <br class="mView" />
                    Nature & People
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoadEN;
