import React, { useRef, useState } from "react";
import { SketchPicker } from "react-color";
import { images3d } from "../../utils/imagesImport";
const CustomBox = ({
  pin,
  setPin,
  horizon,
  setHorizon,
  color1,
  setColor1,
  handleSelectModel,
  handleDrop,
  handleImageChange,
}) => {
  const [paletteOpen, setPaletteOpen] = useState(false);

  // 게이지 관련
  const sliderRef = useRef(null);
  const [value1, setValue1] = useState(20); // 초기값
  const [value2, setValue2] = useState(60); // 초기값

  // 날개 색상 스포이드 픽 컬러
  const [pickedColor, setPickedColor] = useState(1);

  const updateSliderBackgroundPin = (e) => {
    const val = e.target.value;
    setValue1(val);
    setPin(parseFloat(scaleFrom100(val, 0, 3).toFixed(2)));
    console.log("빛값 val= " + val);
    console.log("빛값 pin = " + pin);
    e.target.style.setProperty("--val", `${val}%`);
  };

  const updateSliderBackgroundHorizon = (e) => {
    const val = e.target.value;
    setValue2(val);
    setHorizon(parseFloat(scaleFrom100(val, 0, 10).toFixed(2)));
    console.log("빛값 = " + val);
    console.log("빛값 = " + horizon);
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
      setColor1(result.sRGBHex);
    } catch (error) {
      console.log("스포이드 취소 또는 실패", error);
    }
  };

  const handleStaticColorClick = (color) => {
    setColor1(color);
  };

  const handlePreventDefault = (e) => {
    e.preventDefault();
  };
  const scaleTo100 = (value, minOriginal, maxOriginal) => {
    const minTarget = 0;
    const maxTarget = 100;

    return ((value - minOriginal) / (maxOriginal - minOriginal)) * (maxTarget - minTarget) + minTarget;
  };
  const scaleFrom100 = (value, minOriginal, maxOriginal) => {
    const minTarget = 0;
    const maxTarget = 100;

    return ((value - minTarget) / (maxTarget - minTarget)) * (maxOriginal - minOriginal) + minOriginal;
  };

  return (
    <div className=" pack_btn_left text-start mt-4 pack_ui">
      <h5 className="f18 fw300 black ">용기</h5>
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
      <ul class="packLight">
        <li>
          <p class="f18 fw500 black mt40">조명1</p>
          <div class="slider-container mt10">
            <input
              type="range"
              min="0"
              max="100"
              value={Math.round(scaleTo100(pin, 0, 3))}
              ref={sliderRef}
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
              ref={sliderRef}
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
  );
};

export default CustomBox;
