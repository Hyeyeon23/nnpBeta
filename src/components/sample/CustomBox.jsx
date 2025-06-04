import React, { useRef, useState } from "react";
import { SketchPicker } from "react-color";

const CustomBox = ({ pin, setPin, color1, setColor1, handleSelectModel, handleDrop }) => {
  // 게이지 관련
  const percent = useRef("50");
  const isDragging = useRef(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  // 게이지 바 코드
  const updatePercent = (clientX) => {
    const rect = percent.current.getBoundingClientRect();
    let newPercent = ((clientX - rect.left) / rect.width) * 10;
    newPercent = Math.max(0, Math.min(10, newPercent));
    setPin(newPercent);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    updatePercent(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      updatePercent(e.clientX);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    updatePercent(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging.current) {
      updatePercent(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };
  return (
    <div className=" pack_btn_left text-start mt-4">
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

      <div
        className="slider-container mt-10"
        ref={percent}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        <div className="slider-track">
          <div className="slider-fill" style={{ width: `${pin * 10}%` }}></div>
          <div className="slider-thumb" style={{ left: `${pin * 10}%` }}></div>
        </div>
      </div>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="bg-bg-dark-subtle text-light-emphasis text-xl-center form-control-lg mt-4"
        style={{
          zIndex: 1,
          border: "2px dashed #ccc",
          padding: "20px",
        }}>
        <h5>image drag and drop</h5>
      </div>
      <div>
        <p className="bg-opacity-50 my-2 p-1" onClick={() => setPaletteOpen(!paletteOpen)}>
          wing color ⇒
        </p>
        {paletteOpen && (
          <div
            style={{
              position: "absolute",
              top: 235,
              left: "24%", // 버튼 오른쪽 바로 옆에 붙음
              marginLeft: 8,
              zIndex: 1000,
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}>
            <SketchPicker
              className=""
              disableAlpha={true}
              color={color1 ?? { r: 0, g: 0, b: 0, a: 1 }}
              onChange={(c) => {
                setColor1(c.hex);
                console.log(color1);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomBox;
