import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PACK1000_WOOD } from "../../components/container/PACK1000_WOOD";
import Progressive from "../../components/sample/Progressive";
import { PACK1000_Lightless } from "../../components/container/PACK1000_Lightless";
import { PACK200_mid } from "../../components/container/PACK200_mid";
import { PACK200_CF } from "../../components/container/PACK200_CF";
import { PACK250_CF } from "../../components/container/PACK250_CF";
import { SIG120_mini } from "../../components/container/SIG120_mini";
import { SIG150_mini } from "../../components/container/SIG150_mini";

const Sample = () => {
  const [image, setImage] = useState("/sample.png"); // 기본 이미지 상태
  const [pin, setPin] = useState(5);
  const [horizon, setHorizon] = useState(1.5);
  const [color1, setColor1] = useState(null);
  const [loadSpin, setLoadSpin] = useState(false);
  const [model, setModel] = useState("PACK1000_Lightless");

  console.log("image", image);
  // 이미지 파일을 선택하는 함수
  const handleImageChange = (e) => {
    const file = e.target.files?.[0]; // 선택된 파일

    if (file) {
      const url = URL.createObjectURL(file); // 파일을 URL로 변환
      setImage(url); // 이미지 상태 업데이트

      console.log("handleImageChange = ", url);
    }
    setLoadSpin(false);

    e.target.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const url = URL.createObjectURL(file); // 파일을 URL로 변환
      setImage(url); // 이미지 상태 업데이트

      console.log("handleImageChange = ", url);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleColor1Change = (e) => {
    console.log("handleColor1Change = ", e.target.value);
    setColor1(e.target.value);
  };

  const handleSelectModel = (e) => {
    e.preventDefault();
    setModel(e.target.value);
  };
  return (
    <div className="justify-content-center text-center pt-5">
      <h1>
        <img src="./logo_nnp.png" style={{ width: "150px" }} className="mx-2" />
        자연과사람들 3D 모델링
      </h1>
      {loadSpin && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white bg-opacity-50"
          style={{ zIndex: 1050 }}
        >
          <div className="spinner-border" role="status"></div>
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <div className="mt-4 pb-4 canvas-container">
        <Canvas
          camera={{ position: [0, 3, 10], fov: 45 }}
          style={{ backgroundColor: "white" }}
          shadows
        >
          <Suspense fallback={null}>
            {/* 화면 움직이는 거  */}
            <OrbitControls minDistance={2} maxDistance={10} />
            {/* <ambientLight intensity={1} /> */}
            {/* 핀조명 */}
            <directionalLight position={[10, 10, 10]} intensity={pin} />
            {/* 그림자 만드는 강렬한 수평의 빛  */}
            <directionalLight
              position={[5, 6, 8]} // 빛의 위치를 물체 위로 조정
              intensity={horizon} // 너무 강하면 그림자가 날아감
              castShadow
              shadow-mapSize-width={1024} // 그림자 품질 조정
              shadow-mapSize-height={1024}
              shadow-camera-near={0.5} // 조명 카메라 범위 조정
              shadow-camera-far={200}
              shadow-camera-left={-10} // 그림자가 너무 작으면 범위를 키워야 함
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            {/* 반대쪽에서 약한 빛 추가 */}
            <directionalLight
              position={[-5, 3, -8]} // 기존 빛의 반대 방향
              intensity={1.5} // 약한 빛
              color={"#ffffff"} // 빛 색상 (조정 가능)
            />
            <mesh position={[0, -1.1, 0]} castShadow>
              {model === "PACK1000_WOOD" && (
                <PACK1000_WOOD imageSrc={image} color1={color1}></PACK1000_WOOD>
              )}
              {model === "PACK1000_Lightless" && (
                <PACK1000_Lightless
                  imageSrc={image}
                  color1={color1}
                ></PACK1000_Lightless>
              )}
              {model === "PACK200_mid" && (
                <PACK200_mid imageSrc={image} color1={color1}></PACK200_mid>
              )}
              {model === "PACK200_CF" && (
                <PACK200_CF imageSrc={image} color1={color1}></PACK200_CF>
              )}
              {model === "PACK250_CF" && (
                <PACK250_CF imageSrc={image} color1={color1}></PACK250_CF>
              )}
              {model === "SIG120_mini" && (
                <SIG120_mini imageSrc={image} color1={color1}></SIG120_mini>
              )}
              {model === "SIG150_mini" && (
                <SIG150_mini imageSrc={image} color1={color1}></SIG150_mini>
              )}
            </mesh>
            <mesh>
              {/*  그림자가 드리워질 바닥 메쉬 추가 1안 - 그림자용 Plane + 바닥 plane 더블 구성*/}
              <mesh
                receiveShadow
                position={[0, -1.01, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[3, 3, 3]}
              >
                <planeGeometry args={[10, 10]} />
                <shadowMaterial opacity={0.4} transparent={true} /> // opacity
                낮을 수록 연한 그림자
              </mesh>
              <mesh
                position={[0, -1, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[3, 3, 3]}
                renderOrder={2}
              >
                <circleGeometry args={[5, 32]} />
                <meshStandardMaterial
                  color="F8F8F8"
                  roughness={0.9}
                  metalness={0}
                  opacity={0.7}
                  transparent={true}
                />
              </mesh>
            </mesh>
          </Suspense>
        </Canvas>

        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="bg-bg-dark-subtle text-light-emphasis text-xl-center form-control-lg"
          style={{
            position: "absolute",
            top: 190,
            left: 20,
            zIndex: 1,
            border: "2px dashed #ccc",
            padding: "20px",            
          }}
        >
          image drag and drop
        </div>
        <label
          for="colorPicker"
          style={{ position: "absolute", top: 60, left: 90, zIndex: 1 }}
        >
          날개 색
        </label>
        <input
          type="color"
          id="colorPicker"
          onChange={handleColor1Change}
          style={{ position: "absolute", top: 60, left: 20, zIndex: 1 }}
        />
        <Progressive
          value={pin}
          onChange={setPin}
          top1={100}
          left1={20}
          top2={95}
          left2={160}
          lbl={"핀조명"}
        ></Progressive>
        <Progressive
          value={horizon}
          onChange={setHorizon}
          top1={150}
          left1={20}
          top2={145}
          left2={160}
          lbl={"수평조명"}
          min={-4}
          max={3}
        ></Progressive>
        <select
          style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
          onChange={handleSelectModel}
        >
          <option value="PACK1000_Lightless">PACK1000_Lightless</option>
          <option value="PACK1000_WOOD">PACK1000_WOOD</option>
          <option value="PACK200_mid">PACK200_mid</option>
          <option value="PACK200_CF">PACK200_CF</option>
          <option value="PACK250_CF">PACK250_CF</option>
          <option value="SIG120_mini">SIG120_mini</option>
          <option value="SIG150_mini">SIG150_mini</option>
        </select>
      </div>
    </div>
  );
};

export default Sample;
