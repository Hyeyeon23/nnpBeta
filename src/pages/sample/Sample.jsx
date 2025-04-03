import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model1 } from "../../components/Scene";
import { Can } from "../../components/Can";
import { SimpleCan } from "../../components/SimpleCan";
import { Soup } from "../../components/Soup";
import { PACK1000 } from "../../components/PACK1000";
import { PACK1000_WOOD } from "../../components/PACK1000_WOOD";

const Sample = () => {
  const [image, setImage] = useState("/sample.png"); // 기본 이미지 상태
  const [color1, setColor1] = useState(null);

  console.log("image", image);
  // 이미지 파일을 선택하는 함수
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // 선택된 파일
    if (file) {
      const url = URL.createObjectURL(file); // 파일을 URL로 변환
      setImage(url); // 이미지 상태 업데이트

      console.log("handleImageChange = ", url);
    }
  };

  const handleColor1Change = (e) => {
    console.log("handleColor1Change = ", e.target.value);
    setColor1(e.target.value);
  };

  return (
    <div className="justify-content-center text-center pt-5">
      <h1>
        <img src="./logo_nnp.png" style={{ width: "150px" }} className="mx-2" />

        자연과사람들 3D 모델링t
      </h1>
      <div className="mt-4 pb-4 canvas-container">
        <Canvas
          camera={{ position: [0, 3, 10], fov: 45 }}
          style={{ backgroundColor: "white" }}
          shadows
        >
          {/* 화면 움직이는 거  */}
          <OrbitControls minDistance={2} maxDistance={10} />
          {/* <ambientLight intensity={1} /> */}
          {/* 핀조명 */}
          <directionalLight position={[10, 10, 10]} intensity={4} />
          {/* 그림자 만드는 강렬한 수평의 빛  */}
          <directionalLight
            position={[5, 6, 8]} // 빛의 위치를 물체 위로 조정
            intensity={1.5} // 너무 강하면 그림자가 날아감
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
            <PACK1000_WOOD imageSrc={image} color1={color1}></PACK1000_WOOD>
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
        </Canvas>
        {/* 
        <Canvas style={{ height: "86vh", backgroundColor: "whitesmoke" }} camera={{ position: [3, 2, 15], fov: 35 }} shadows> // fov 낮으면 줌인 높으면 줌 아웃
          <OrbitControls autoRotate={true} />
          <mesh>
            <ambientLight intensity={1.7} />
            <directionalLight
              position={[40, 50, 30]} // 빛의 위기 x오른y위쪽z뒤쪽
              intensity={0.1}
              castShadow
              shadow-camera-near={0.1}  // 그림자를 만들기 시작하는 최소 거리 - 값이 작을수록 그림자 시작 위치가 물체랑 딱 붙어서 시작
              shadow-camera-far={100} // 그림자를 만들수 있는  최대 거리 
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-bias={-0.0002} // 그림자 더 강하게 
            />

            {/* <directionalLight position={[-1, 0, 1]} intensity={0.5} />
            <boxGeometry args={[4, 4 ,4]} />
            <meshStandardMaterial attach="material" color="yellow" /> */}

        {/* <Model1></Model1> */}
        {/* <Can></Can> */}
        {/* <SimpleCan></SimpleCan> */}
        {/* <Soup imageSrc={image}></Soup> */}

        {/* <PACK1000 imageSrc={image} color1={color1} ></PACK1000> */}
        {/* <PACK1000_WOOD></PACK1000_WOOD> */}

        {/* 그림자가 드리워질 바닥 메쉬 추가 1안 - 위에있는 물체와 한몸 같은*/}
        {/*
            <mesh
              receiveShadow  // 그림자 받기
              position={[0, 0, 0]}  // 바닥 위치 (모두 0은 원점을 의미 )
              rotation={[-Math.PI / 2, 0, 0]}  // 회전각 (현재 수평회전)
              scale={[3, 3, 3]}  // 바닥 크기
            >
              
              <circleGeometry args={[5, 32]} />  // 반지름, 세그먼트값(부드럽게정도)
              <meshStandardMaterial color="#FFFFFF" roughness={0.8} metalness={0} opacity={0.1} transparent={true} />  // 메쉬 재질 
              {/* roghness = 거칠기/ metalness = 금속성 정도 opacity 낮을수록 투명해짐 transparent 투명여부 
            </mesh>
           

            {/*  그림자가 드리워질 바닥 메쉬 추가 1안 - 그림자용 Plane 추가 
            <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[3, 3, 3]}>
              <planeGeometry args={[10, 10]} />
              <shadowMaterial opacity={0.1} transparent={true} />  {/* opacity 낮을 수록 연한 그림자 
            </mesh>
            <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[3, 3, 3]} renderOrder={2}>
              <circleGeometry args={[5, 32]} />
              <meshStandardMaterial color="#F8F8F8" roughness={0.9} metalness={0} opacity={0.1} transparent={true} />
            </mesh>
          </mesh>
        </Canvas>
         */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
        />
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
      </div>
    </div>
  );
};

export default Sample;
