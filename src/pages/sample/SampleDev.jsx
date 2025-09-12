import React, { Suspense, useEffect, useRef, useState } from "react";

import { Canvas, useThree } from "@react-three/fiber";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import { Environment, OrbitControls } from "@react-three/drei";
import { PACK1000_WOOD } from "../../components/container/PACK1000_WOOD";
import { PACK1000_Lightless } from "../../components/container/PACK1000_Lightless";
import { PACK200_mid } from "../../components/container/PACK200_mid";
import { PACK200_CF } from "../../components/container/PACK200_CF";
import { PACK250_CF } from "../../components/container/PACK250_CF";
import { SIG120_mini } from "../../components/container/SIG120_mini";
import { SIG150_mini } from "../../components/container/SIG150_mini";
import { SIG200_mid } from "../../components/container/SIG200_mid";
import { CAN175 } from "../../components/container/CAN175";
import { CAN200 } from "../../components/container/CAN200";
import { CAN238 } from "../../components/container/CAN238";

import Footer from "../../components/common/footer";
import Header from "../../components/common/Header";
import CustomBox from "../../components/sample/CustomBox";

import { imageTransfer } from "../../api/3D";
const SampleDev = () => {
  const groupRef = useRef();
  const canvasRef = useRef(null); // 이미지 다운할 떄 씀

  // 캔버스 샘플링 기능 관련
  const [pin, setPin] = useState(1); // 핀조명 밝기
  const [horizon, setHorizon] = useState(1.5); // 수평조명 밝기

  const [camPosition, setCamPosition] = useState([0, 3, 10]);
  const camPositionRef = useRef([0, 3, 10]); // 렌더링 없이 카메라 이동 시 위치만 기억(기타 요소 리렌더링할 때 카메라 위치값 기억 )
  const [model, setModel] = useState("PACK1000_Lightless");

  const [loadSpin, setLoadSpin] = useState(false);

  // 모델 별 이미지 state 구분
  const [image, setImage] = useState("/sample.png"); // 기본 이미지 상태
  const [imageTetra1000, setImageTetra1000] = useState(null); // 테트라 1000ml 날개색깔
  const [imageTetra200mid, setImageTetra200mid] = useState(null); // 테트라 200ml mid 날개색깔
  const [imageTetra200cf, setImageTetra200cf] = useState(null); // 테트라 200ml cf 날개색깔
  const [imageTetra250cf, setImageTetra250cf] = useState(null); // 테트라 250ml cf 날개색깔
  const [imageSig120mini, setImageSig120mini] = useState(null); // 시그니처 120ml mini 날개색깔
  const [imageSig150mini, setImageSig150mini] = useState(null); // 시그니처 150ml mini 날개색깔
  const [imageSig200mid, setImageSig200mid] = useState(null); // 시그니처 200ml mid 날개색깔
  const [imageCan175, setImageCan175] = useState(null); // 캔 175ml 날개색깔
  const [imageCan200, setImageCan200] = useState(null); // 캔 200ml 날개색깔
  const [imageCan238, setImageCan238] = useState(null); // 캔 238ml 날개색깔

  // 모델별 날개 색깔 state 구분
  const [colorTetra1000, setColorTetra1000] = useState(null); // 테트라 1000ml 날개색깔
  const [colorTetra200mid, setColorTetra200mid] = useState(null); // 테트라 200ml mid 날개색깔
  const [colorTetra200cf, setColorTetra200cf] = useState(null); // 테트라 200ml cf 날개색깔
  const [colorTetra250cf, setColorTetra250cf] = useState(null); // 테트라 250ml cf 날개색깔
  const [colorSig120mini, setColorSig120mini] = useState(null); // 시그니처 120ml mini 날개색깔
  const [colorSig150mini, setColorSig150mini] = useState(null); // 시그니처 150ml mini 날개색깔
  const [colorSig200mid, setColorSig200mid] = useState(null); // 시그니처 200ml mid 날개색깔
  const [colorCan175, setColorCan175] = useState(null); // 캔 175ml 날개색깔
  const [colorCan200, setColorCan200] = useState(null); // 캔 200ml 날개색깔
  const [colorCan238, setColorCan238] = useState(null); // 캔 238ml 날개색깔

  // 물체각도 및 다운로드 컴포넌트에 'on' class 부여 state
  const [poseOn, setPoseOn] = useState(1); // css 효과

  console.log("image", image);

  // 이미지 파일을 선택하는 함수
  const handleImageChange = (e) => {
    const file = e.target.files?.[0]; // 선택된 파일

    if (file) {
      const url = URL.createObjectURL(file); // 파일을 URL로 변환
      console.log("handleImageChange = ", url);

      const savedUrl = imageTransfer(file);
      console.log("savedUrl = ", savedUrl);

      switch (model) {
        case "PACK1000_Lightless":
          setImageTetra1000(url);
          break;
        case "PACK200_mid":
          setImageTetra200mid(url);
          break;
        case "PACK200_CF":
          setImageTetra200cf(url);
          break;
        case "PACK250_CF":
          setImageTetra250cf(url);
          break;
        case "SIG120_mini":
          setImageSig120mini(url);
          break;
        case "SIG150_mini":
          setImageSig150mini(url);
          break;
        case "SIG200_mid":
          setImageSig200mid(url);
          break;
        case "CAN175":
          setImageCan175(url);
          break;
        case "CAN200":
          setImageCan200(url);
          break;
        case "CAN238":
          setImageCan238(url);
          break;
        default:
          setImage(url); // 이미지 상태 업데이트
          return false;
      }
    }
    setLoadSpin(false);

    e.target.value = "";
  };

  /**
   * 사진 드롭 시 적용
   * @param {} e
   */
  const handleDrop = async (e) => {
    e.preventDefault();
    setCamPosition(camPositionRef.current);
    const file = e.dataTransfer.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("파일 크기가 5MB를 초과합니다.");
        return;
      }

      const urlLocal = URL.createObjectURL(file); // 파일을 URL로 변환(로컬)

      const url = await imageTransfer(file);
      console.log("savedUrl = ", url);

      // catch Error에서 잡지 못한 에러가 url에 있을때 (undefined..) 체크

      switch (model) {
        case "PACK1000_Lightless":
          setImageTetra1000(url);
          break;
        case "PACK200_mid":
          setImageTetra200mid(url);
          break;
        case "PACK200_CF":
          setImageTetra200cf(url);
          break;
        case "PACK250_CF":
          setImageTetra250cf(url);
          break;
        case "SIG120_mini":
          setImageSig120mini(url);
          break;
        case "SIG150_mini":
          setImageSig150mini(url);
          break;
        case "SIG200_mid":
          setImageSig200mid(url);
          break;
        case "CAN175":
          setImageCan175(url);
          break;
        case "CAN200":
          setImageCan200(url);
          break;
        case "CAN238":
          setImageCan238(url);
          break;
        default:
          setImage(url); // 이미지 상태 업데이트
          return false;
      }
    }
  };

  /**
   * 날개 색깔 바꾸는
   * @param {} color
   * @returns
   */
  const handleColor1Change = (color) => {
    console.log("handleColor1Change = ", color);
    setCamPosition(camPositionRef.current); // 렌더링 트리거용
    switch (model) {
      case "PACK1000_Lightless":
        setColorTetra1000(color);
        break;
      case "PACK200_mid":
        setColorTetra200mid(color);
        break;
      case "PACK200_CF":
        setColorTetra200cf(color);
        break;
      case "PACK250_CF":
        setColorTetra250cf(color);
        break;
      case "SIG120_mini":
        setColorSig120mini(color);
        break;
      case "SIG150_mini":
        setColorSig150mini(color);
        break;
      case "SIG200_mid":
        setColorSig200mid(color);
        break;
      case "CAN175":
        setColorCan175(color);
        break;
      case "CAN200":
        setColorCan200(color);
        break;
      case "CAN238":
        setColorCan238(color);
        break;
      default:
        return false;
    }
  };

  /**
   * 용기 바꾸기
   * @param {} e
   */
  const handleSelectModel = (e) => {
    e.preventDefault();
    setModel(e.target.value);
  };

  //단순 이미지 캡쳐 다운로드
  const handleCaptureImg = () => {
    if (!canvasRef.current) return;

    const dataURL = canvasRef.current.toDataURL("image/jpeg", 1.0);

    const link = document.createElement("a");
    link.download = "capture.jpg";
    link.href = dataURL;
    link.click();
  };

  // 카메라 포지션 바꾸는 기능(캡쳐위해서)
  const handleChangeCameraPostion = (position, idx) => {
    console.log("handleChangeCameraPostion = ", position);
    setCamPosition(position);
    setPoseOn(idx);
  };

  // 카메라 업데이터 생성 카메라 포지션을 바꾸기 위해서
  const CameraUpdater = ({ cameraPosition }) => {
    const { camera } = useThree();

    useEffect(() => {
      camera.position.set(...cameraPosition);
      camera.lookAt(0, 0, 0);
    }, [cameraPosition, camera]);

    return null;
  };

  /**
   * 카메라 이동 위치 기억(캠 리렌더링 방지 위해)
   */
  const onCameraMoving = (e) => {
    const { x, y, z } = e.target.object.position;

    camPositionRef.current = [x, y, z];
  };
  /**
   * 수평 조명 세팅(카메라 위치 유지)
   * @param {*} light
   */
  const changeHorizonLight = (light) => {
    setCamPosition(camPositionRef.current);
    setHorizon(light);
  };
  /**
   * 핀 조명 세팅(카메라 위치 유지)0
   * @param {} light
   */
  const changePinLight = (light) => {
    setCamPosition(camPositionRef.current);
    setPin(light);
  };

  // GLB 파일 다운을 위한 함수 목록인데 언젠간 쓸 수도 있음

  // 다운로드 exporter(glb 파일)
  function exportGLB(group) {
    const exporter = new GLTFExporter();
    // exporter.parse(대상객체, 콜백함수, 옵션)
    exporter.parse(
      group,
      (result) => {
        // ArrayBuffer형식 glb
        if (result instanceof ArrayBuffer) {
          saveArrayBuffer(result, "model.glb");
        } else {
          //binarty: false , gltf 형식 json 문자열
          const output = JSON.stringify(result, null, 2);
          saveString(output, "model.gltf");
        }
      },
      { binary: true }
    );
  }

  // 바이너리 데이터를 blob -> 다운로드
  function saveArrayBuffer(buffer, filename) {
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    saveBlob(blob, filename);
  }

  // 문자열 데이터를 blob -> 다운로드
  function saveString(text, filename) {
    const blob = new Blob([text], { type: "text/plain" });
    saveBlob(blob, filename);
  }
  // 다운로드 함수 (링크생성 - 클릭이벤트자동 - url 해제 )
  function saveBlob(blob, filename) {
    const link = document.createElement("a"); // 임시 url로 변환
    link.href = URL.createObjectURL(blob); // blob을 가리키는 가짜 링크 생성
    link.download = filename; // 파일이름 세팅
    link.click();
    URL.revokeObjectURL(link.href); // 메모리 정리
  }

  return (
    <>
      <div class="backtotop-wrap cursor-pointer">
        <svg class="backtotop-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      <Header></Header>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="pack_wrap">
              <div className="justify-content-center">
                {/* <h1>
          <img src="./logo_nnp.png" style={{ width: "150px" }} className="mx-2" />
          자연과사람들 3D 모델링
        </h1> */}
                {loadSpin && (
                  <div
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white bg-opacity-50"
                    style={{ zIndex: 1050 }}>
                    <div className="spinner-border" role="status"></div>
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
                <div className="pb-4 canvas-container pack_wrap" style={{ position: "relative" }}>
                  <Canvas
                    onCreated={({ gl }) => {
                      gl.setClearColor("#F8F8F8"); // ← 명시적으로 배경 지정
                      canvasRef.current = gl.domElement;
                    }}
                    gl={{ preserveDrawingBuffer: true }}
                    camera={{ position: [0, 3, 10], fov: 60 }}
                    style={{ backgroundColor: "#F8F8F8" }}
                    shadows>
                    <CameraUpdater cameraPosition={camPosition} />
                    <Suspense fallback={null}>
                      {/* 화면 움직이는 거  */}
                      <OrbitControls minDistance={2} maxDistance={10} onChange={onCameraMoving} />
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
                      {/* 환경 조명 */}
                      <Environment preset="forest" />
                      {/* 반대쪽에서 약한 빛 추가 */}
                      <directionalLight
                        position={[-5, 3, -8]} // 기존 빛의 반대 방향
                        intensity={1.5} // 약한 빛
                        color={"#ffffff"} // 빛 색상 (조정 가능)
                      />
                      <group name="target" ref={groupRef}>
                        <mesh position={[0, -1.1, 0]} castShadow>
                          {model === "PACK1000_WOOD" && (
                            <PACK1000_WOOD imageSrc={image} color1={colorTetra1000}></PACK1000_WOOD>
                          )}
                          {model === "PACK1000_Lightless" && (
                            <PACK1000_Lightless imageSrc={imageTetra1000} color1={colorTetra1000}></PACK1000_Lightless>
                          )}
                          {model === "PACK200_mid" && (
                            <PACK200_mid imageSrc={imageTetra200mid} color1={colorTetra200mid}></PACK200_mid>
                          )}
                          {model === "PACK200_CF" && (
                            <PACK200_CF imageSrc={imageTetra200cf} color1={colorTetra200cf}></PACK200_CF>
                          )}
                          {model === "PACK250_CF" && (
                            <PACK250_CF imageSrc={imageTetra250cf} color1={colorTetra250cf}></PACK250_CF>
                          )}
                          {model === "SIG120_mini" && (
                            <SIG120_mini imageSrc={imageSig120mini} color1={colorSig120mini}></SIG120_mini>
                          )}
                          {model === "SIG150_mini" && (
                            <SIG150_mini imageSrc={imageSig150mini} color1={colorSig150mini}></SIG150_mini>
                          )}
                          {model === "SIG200_mid" && (
                            <SIG200_mid imageSrc={imageSig200mid} color1={colorSig200mid}></SIG200_mid>
                          )}
                          {model === "CAN175" && <CAN175 imageSrc={imageCan175} color1={colorCan175}></CAN175>}
                          {model === "CAN200" && <CAN200 imageSrc={imageCan200} color1={colorCan200}></CAN200>}
                          {model === "CAN238" && <CAN238 imageSrc={imageCan238} color1={colorCan238}></CAN238>}
                        </mesh>
                      </group>
                      <mesh>
                        {/*  그림자가 드리워질 바닥 메쉬 추가 1안 - 그림자용 Plane + 바닥 plane 더블 구성*/}
                        <mesh receiveShadow position={[0, -1.01, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[3, 3, 3]}>
                          <planeGeometry args={[10, 10]} />
                          <shadowMaterial opacity={0.4} transparent={true} /> // opacity 낮을 수록 연한 그림자
                        </mesh>
                        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[3, 3, 3]} renderOrder={2}>
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
                  {/* 캔버스 끝 */}
                  <CustomBox
                    model={model}
                    pin={pin}
                    changePinLight={changePinLight}
                    horizon={horizon}
                    changeHorizonLight={changeHorizonLight}
                    handleColor1Change={handleColor1Change}
                    handleSelectModel={handleSelectModel}
                    handleDrop={handleDrop}
                    handleImageChange={handleImageChange}>
                    {" "}
                  </CustomBox>
                  <div className="pack_btn_footer wView">
                    <ul>
                      <li>
                        <button type="button">
                          <div
                            className={`btn_3d_01 ${poseOn === 1 ? "on" : ""}`}
                            onClick={() => handleChangeCameraPostion([0, 3, 10], 1)}></div>
                        </button>
                      </li>
                      <li>
                        <button type="button" onClick={() => handleChangeCameraPostion([0, 0, -10], 2)}>
                          <div className={`btn_3d_02 ${poseOn === 2 ? "on" : ""}`}></div>
                        </button>
                      </li>
                      <li>
                        <button type="button" onClick={() => handleChangeCameraPostion([10, 0, 0], 3)}>
                          <div className={`btn_3d_03 ${poseOn === 3 ? "on" : ""}`}></div>
                        </button>
                      </li>
                      <li>
                        <button type="button" onClick={() => handleChangeCameraPostion([-10, 0, 0], 4)}>
                          <div className={`btn_3d_04 ${poseOn === 4 ? "on" : ""}`}></div>
                        </button>
                      </li>
                      <li>
                        <button type="button" onClick={() => handleChangeCameraPostion([0, 10, 0], 5)}>
                          <div className={`btn_3d_05 ${poseOn === 5 ? "on" : ""}`}></div>
                        </button>
                      </li>
                      <li>
                        <button type="button" onClick={() => handleChangeCameraPostion([0, -10, 0], 6)}>
                          <div className={`btn_3d_06 ${poseOn === 6 ? "on" : ""}`}></div>
                        </button>
                      </li>
                      <li>
                        <button type="button" onClick={handleCaptureImg}>
                          <div className="btn_3d_07"></div>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default SampleDev;
