import React, { Suspense, useEffect, useState } from "react";

import { images3d } from "../../utils/imagesImport";

const SampleDev = () => {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <section className="pack_wrap">
            <div className="pack_btn_object">
              <p>
                <img src={images3d["sample.png"]} alt="정면" />
              </p>
            </div>
            <div className="pack_btn_left">
              <div>
                <p className="f18 fw500 black">용기</p>
                <select className="mt10">
                  <option>Tetra Pack-200ㅢ mid</option>
                  <option>Tetra Pack-200ㅢ mid</option>
                  <option>Tetra Pack-200ㅢ mid</option>
                  <option>Tetra Pack-200ㅢ mid</option>
                  <option>Tetra Pack-200ㅢ mid</option>
                  <option>Tetra Pack-200ㅢ mid</option>
                </select>

                <div className="slider-container" id="slider">
                  <div className="slider-track">
                    <div className="slider-fill" id="fill" style={{ width: "70%" }}></div>
                    <div className="slider-thumb" id="thumb" style={{ left: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pack_btn_footer">
              <ul>
                <li>
                  <button type="button">
                    <img src={images3d["btn_3d_01.png"]} alt="정면" />
                  </button>
                </li>
                <li>
                  <button type="button">
                    <img src={images3d["btn_3d_02.png"]} alt="뒷면" />
                  </button>
                </li>
                <li>
                  <button type="button">
                    <img src={images3d["btn_3d_03.png"]} alt="오른쪽" />
                  </button>
                </li>
                <li>
                  <button type="button">
                    <img src={images3d["btn_3d_04.png"]} alt="왼쪽" />
                  </button>
                </li>
                <li>
                  <button type="button">
                    <img src={images3d["btn_3d_05.png"]} alt="탑" />
                  </button>
                </li>
                <li>
                  <button type="button">
                    <img src={images3d["btn_3d_06.png"]} alt="바닥" />
                  </button>
                </li>
                <li>
                  <button type="button">
                    <img src={images3d["btn_3d_save.png"]} alt="save" />
                  </button>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
      <div id="scroll-percentage">
        <span id="scroll-percentage-value"></span>
      </div>
    </div>
  );
};

export default SampleDev;
