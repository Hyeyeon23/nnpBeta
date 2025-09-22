import React, { useEffect } from "react";

const Road = () => {
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
    <section>
      <div className="contant1160 mb200">
        {/* 서울사무소 */}
        <div className="row loadLine">
          <div className="col-sm-12 mt200">
            <p className="f52 fw500 grayn1 center">자연과사람들 서울사무소</p>
            <div className="mapWrapper mt100">
              <div
                id="daumRoughmapContainer1616651843627"
                className="root_daum_roughmap root_daum_roughmap_landing"></div>
            </div>
          </div>
          <div className="col-md-4">
            <ul className="load_ul">
              <li>
                <img src="common/imgs/company/load_point.jpg" alt="" />
              </li>
              <li className="f18">
                <p className="fw600 f18 grayn1 mb10">주소</p>
                서울 중구 퇴계로8길 16 (우)04634
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="load_ul">
              <li>
                <img src="common/imgs/company/load_call.jpg" alt="" />
              </li>
              <li className="f18">
                <p className="fw600 f18 grayn1 mb10">TEL</p>
                02-6263-9000
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="load_ul">
              <li>
                <img src="common/imgs/company/load_map.jpg" alt="" />
              </li>
              <li className="f18">
                <p className="fw600 f18 grayn1 mb10">오시는 길</p>
                회현역 1번출구, 도보 2분
              </li>
            </ul>
          </div>
        </div>

        {/* 담양공장 */}
        <div className="row loadLine">
          <div className="col-sm-12 mt200">
            <p className="f52 fw500 grayn1 center">자연과사람들 담양공장</p>
            <div className="mapWrapper mt100">
              <div
                id="daumRoughmapContainer1509327278533"
                className="root_daum_roughmap root_daum_roughmap_landing"></div>
            </div>
          </div>
          <div className="col-md-6">
            <ul className="load_ul">
              <li>
                <img src="common/imgs/company/load_point.jpg" alt="" />
              </li>
              <li className="f18 lh150">
                <p className="fw600 f18 grayn1 mb10">주소</p>
                전라남도 담양군 금성면 금성공단길 10
                <br />
                (우)57353
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="load_ul">
              <li>
                <img src="common/imgs/company/load_call.jpg" alt="" />
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
                <img src="common/imgs/company/load_map.jpg" alt="" />
              </li>
              <li className="flexible f18 lh150">
                <p className="f18 grayn1 mb10">
                  <span className="fw600 mb10">서울에서 오시는 길</span>
                  <br />
                  서울 → 경부고속도로 → 호남고속도로 → 서대전 <br className="mView" />
                  → 논산 → 전주 → 정읍 → 장성JC(순천방면) <br className="mView" />
                  → 담양JC(대구방면,88고속도로) → 담양IC <br className="mView" />→ ㈜자연과사람들
                </p>
                <p className="f18 grayn1 mb10">
                  <span className="fw600 mb10">광주에서 오시는 길</span>
                  <br />
                  광주공항 → 우산동 → 월곡동 → <br className="mView" />
                  광산IC(고속도로 진입) → 호남고속도로경유 → 서광주
                  <br className="mView" />
                  → T.G → 고서분기점(대구방면,99고속도로) <br className="mView" />→ 담양IC(순천방면,약7km) →
                  ㈜자연과사람들
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Road;
