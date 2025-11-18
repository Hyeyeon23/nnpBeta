import React, { useEffect, useState } from "react";
import { images3d } from "../../utils/imagesImport";
import { scaleFrom100, scaleTo100 } from "../../utils/scaleHelpers";
const CustomBox = ({
  model,
  pin,
  changePinLight,
  horizon,
  changeHorizonLight,
  handleColor1Change,
  handleSelectModel,
  handleDrop,
  handleImageChange,
}) => {
  // 모바일 커스텀 박스 오픈 클로즈 state
  const [isMboxExpanded, setIsMboxExpanded] = useState(false);
  const [isPackUIPointerEvents, setIsPackUIPointerEvents] = useState("auto");
  // 날개 색상 스포이드 픽 컬러
  const [pickedColor, setPickedColor] = useState(1);
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // 리스너 함수
    const handler = (event) => {
      if (!event.matches) {
        setIsPackUIPointerEvents("auto");
      } else {
        setIsPackUIPointerEvents("none");
      }
    };

    // 이벤트 리스너 등록 (최신 표준)
    mediaQuery.addEventListener("change", handler);

    if (isMobile) {
      setIsPackUIPointerEvents("none");
    }

    // cleanup
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  /**
   * 핀조명 슬라이드 바 조작 시 값 변환 및 반영
   * @param {*} e
   */
  const updateSliderBackgroundPin = (e) => {
    const val = e.target.value;
    changePinLight(parseFloat(scaleFrom100(val, 0, 3).toFixed(2)));
    e.target.style.setProperty("--val", `${val}%`);
  };

  /**
   * 수평조명 슬라이드 바 조작 시 값 변환 및 반영
   * @param {*} e
   */
  const updateSliderBackgroundHorizon = (e) => {
    const val = e.target.value;
    changeHorizonLight(parseFloat(scaleFrom100(val, 0, 10).toFixed(2)));
    e.target.style.setProperty("--val", `${val}%`);
  };

  /* 
    날개 색상 스포이드 color picking 기능 
  */
  const handleEyeDropperClick = async () => {
    if (!window.EyeDropper) {
      alert("이 브라우저는 EyeDropper API를 지원하지 않습니다.");
      return;
    }

    const eyeDropper = new window.EyeDropper();
    try {
      const result = await eyeDropper.open();
      setPickedColor(result.sRGBHex);
      handleColor1Change(result.sRGBHex);
    } catch (error) {
      console.log("스포이드 취소 또는 실패", error);
    }
  };

  /**
   * 날개 색상 모델별로 바꾸기
   * @param {} color 선택된 날개 색상
   */
  const handleStaticColorClick = (color) => {
    handleColor1Change(color);
  };

  /**
   * 파일 첨부 공간에 드래그시 기본 동작 막음
   * @param {} e
   */
  const handlePreventDefault = (e) => {
    e.preventDefault();
  };

  /**
   * 모바일 화면에서 커스텀 박스 노출/히든 토글
   */
  const handleMobileBoxToggle = () => {
    if (isMobile) {
      setIsMboxExpanded((prev) => {
        const next = !prev;
        setIsPackUIPointerEvents(next ? "auto" : "none");
        return next;
      });
    }
  };

  return (
    <div className={`toggle-container ${isMboxExpanded ? "expanded" : ""}`}>
      <div
        className="wrap_btn_mo"
        style={{
          pointerEvents: "none",
        }}>
        <div className="fileBtn_mo_only mView" style={{ pointerEvents: "auto" }}>
          <label for="fileElem_mo" id="drop-label-mo">
            <img src={images3d["btn_save_mo.png"]} alt="upload icon" />
          </label>
          <input type="file" id="fileElem_mo" accept="image/*" onChange={handleImageChange} hidden />
        </div>
        <button className="toggle-btn mView" onClick={handleMobileBoxToggle} style={{ pointerEvents: "auto" }}>
          +
        </button>
        <div className="toggle-box">
          <div className="toggle-content">
            <div className="pack_ui" style={{ pointerEvents: isPackUIPointerEvents }}>
              <h1 className="f22">나만의 팩을 만들어 보세요</h1>
              <p className="f18 fw500 black">용기</p>
              <select className="mt-10 black w-auto " onChange={handleSelectModel}>
                <option value="PACK1000_Lightless">테트라 1000ml (채소육수)</option>
                {/* <option value="PACK1000_WOOD">PACK1000_WOOD</option> */}
                <option value="PACK200_mid">테트라_200ml_mid (베지밀비)</option>
                <option value="PACK200_CF">테트라_200ml_compact_flex (영양케어)</option>
                <option value="PACK250_CF">테트라_250ml_compact_flex (프로틴밀)</option>
                <option value="SIG120_mini">SIG_120ml_mini (에브릿)</option>
                <option value="SIG150_mini">SIG_150ml_mini (프로틴케어미니)</option>
                <option value="SIG200_mid">SIG_200ml_mid (베지밀비)</option>
                <option value="CAN175">CAN_175ml (사과드링크)</option>
                <option value="CAN200">CAN_200ml (마일케어구수한맛)</option>
                <option value="CAN238">CAN_238ml (방방곡곡식혜)</option>
              </select>
              {/*  도면다운  */}
              <div className="downloadFile">
                <p>
                  {model === "PACK1000_Lightless" && (
                    <a href="/common/imgs/3d/dieline/01_tetra_1000ml (297X168).zip">
                      <span>⬇️</span> TETRA_1000ml.zip
                    </a>
                  )}
                  {model === "PACK200_mid" && (
                    <a href="/common/imgs/3d/dieline/02_TETRA_200ml_mini (297X194).zip">📂 TETRA_200ml.zip</a>
                  )}
                  {model === "PACK200_CF" && (
                    <a href="/common/imgs/3d/dieline/03_TETRA_200ml_compact flex (297X158).zip">
                      📂 TETRA_200ml_compact.zip
                    </a>
                  )}
                  {model === "PACK250_CF" && (
                    <a href="/common/imgs/3d/dieline/04_TETRA_250ml_compact flex (297X158).zip">
                      📂 TETRA_250ml_compact.zip
                    </a>
                  )}
                  {model === "SIG120_mini" && (
                    <a href="/common/imgs/3d/dieline/05_SIG_120ml_mini (297X168).zip">📂 SIG_120ml_mini.zip</a>
                  )}
                  {model === "SIG150_mini" && (
                    <a href="/common/imgs/3d/dieline/06_SIG_150ml_mini (297X194).zip">📂 SIG_150ml_mini.zip</a>
                  )}
                  {model === "SIG200_mid" && (
                    <a href="/common/imgs/3d/dieline/07_SIG_200ml_mid (297X194).zip">📂 SIG_200ml_mid.zip</a>
                  )}
                  {model === "CAN175" && (
                    <a href="/common/imgs/3d/dieline/08_CAN_175ml (297X176).zip">📂 CAN_175ml.zip</a>
                  )}
                  {model === "CAN200" && (
                    <a href="/common/imgs/3d/dieline/09_CAN_200ml (297X176).zip">📂 CAN_175ml.zip</a>
                  )}
                  {model === "CAN238" && (
                    <a href="/common/imgs/3d/dieline/10_CAN_238ml (297X176).zip">📂 CAN_238ml.zip</a>
                  )}
                </p>
              </div>
              {/* //도면다운  */}

              <ul class="packLight">
                <li>
                  <p class="f18 fw500 black mt40">조명1</p>
                  <div class="slider-container mt10">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={Math.round(scaleTo100(pin, 0, 3))}
                      onChange={updateSliderBackgroundPin}
                      style={{ "--val": `${Math.round(scaleTo100(pin, 0, 3))}%` }}
                      className="slider blue-slider"
                      id="blueSlider"
                    />
                  </div>
                </li>
                <li>
                  <p class="f18 fw500 black mt40">조명2</p>
                  <div class="slider-container mt10">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={Math.round(scaleTo100(horizon, 0, 10))}
                      onChange={updateSliderBackgroundHorizon}
                      style={{ "--val": `${Math.round(scaleTo100(horizon, 0, 10))}%` }}
                      className="slider green-slider"
                    />
                  </div>
                </li>
              </ul>
              {/* 팩날개 */}
              <div className="packColor">
                <p className="f18 fw500 black mt40">팩 날개 색상</p>
                <div className="container_color mt10">
                  <div
                    className="eyedropper"
                    id="eyedropper"
                    onClick={handleEyeDropperClick}
                    style={{ backgroundColor: pickedColor }}>
                    <img src={images3d["color.png"]} alt="eyedropper icon" />
                  </div>
                  <div className="color-palette">
                    <div
                      className="color-box"
                      style={{ background: "#ff3f7e" }}
                      data-color="#ff3f7e"
                      onClick={() => handleStaticColorClick("#ff3f7e")}></div>
                    <div
                      className="color-box"
                      style={{ background: "#ffca28" }}
                      data-color="#ffca28"
                      onClick={() => handleStaticColorClick("#ffca28")}></div>
                    <div
                      className="color-box"
                      style={{ background: "#00d96f" }}
                      data-color="#00d96f"
                      onClick={() => handleStaticColorClick("#00d96f")}></div>
                    <div
                      className="color-box"
                      style={{ background: "#4285f4" }}
                      data-color="#4285f4"
                      onClick={() => handleStaticColorClick("#4285f4")}></div>
                    <div
                      className="color-box"
                      style={{ background: "#a14eff" }}
                      data-color="#a14eff"
                      onClick={() => handleStaticColorClick("#a14eff")}></div>
                  </div>
                </div>
              </div>
              {/* 팩날개  끝 */}
              <div class="wView">
                <p class="f18 fw500 black mt40 clear mt80m">파일 첨부</p>
                <div id="drop-area" class="mt10" onDrop={handleDrop} onDragOver={handlePreventDefault}>
                  <input type="file" id="fileElem" accept="image/*" onChange={handleImageChange} hidden />
                  <label for="fileElem" id="drop-label">
                    <img src={images3d["file.png"]} alt="upload icon" />
                  </label>
                </div>
                <div id="upload-status">파일을 첨부해주세요.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomBox;
