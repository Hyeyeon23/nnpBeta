import React, { Suspense, useEffect, useRef, useState } from "react";
import { ChromePicker } from "react-color";
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
import { images3d } from "../../utils/imagesImport";
import Footer from "../../components/common/footer";
import Header from "../../components/common/Header";

const SampleDev = () => {
  const groupRef = useRef();

  // 캔버스 샘플링 기능 관련
  const [image, setImage] = useState("/sample.png"); // 기본 이미지 상태
  const [pin, setPin] = useState(1); // 핀조명 밝기
  const [horizon, setHorizon] = useState(1.5); // 수평조명 밝기
  const [color1, setColor1] = useState(null);
  const [loadSpin, setLoadSpin] = useState(false);
  const [camPosition, setCamPosition] = useState([0, 3, 10]);
  const [model, setModel] = useState("PACK1000_Lightless");

  // 게이지 관련
  const percent = useRef("50");
  const isDragging = useRef(false);

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

  // 다운로드 exporter
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

  // 다운로드 버튼에 걸린 이벤트
  const handleDownload = () => {
    if (groupRef.current) {
      exportGLB(groupRef.current);
    }
  };

  const handleChangeCameraPostion = (position) => {
    console.log("handleChangeCameraPostion = ", position);
    setCamPosition(position);
  };

  // 카메라 업데이터 생성
  const CameraUpdater = ({ cameraPosition }) => {
    const { camera } = useThree();

    useEffect(() => {
      camera.position.set(...cameraPosition);
      camera.lookAt(0, 0, 0); // 필요 시 타겟을 지정
    }, [cameraPosition, camera]);

    return null;
  };

  return (
    <>
      <Header></Header>
      <div className="justify-content-center text-center">
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
          <Canvas camera={{ position: [0, 3, 10], fov: 60 }} style={{ backgroundColor: "#F8F8F8" }} shadows>
            <CameraUpdater cameraPosition={camPosition} />
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
                  {model === "PACK1000_WOOD" && <PACK1000_WOOD imageSrc={image} color1={color1}></PACK1000_WOOD>}
                  {model === "PACK1000_Lightless" && (
                    <PACK1000_Lightless imageSrc={image} color1={color1}></PACK1000_Lightless>
                  )}
                  {model === "PACK200_mid" && <PACK200_mid imageSrc={image} color1={color1}></PACK200_mid>}
                  {model === "PACK200_CF" && <PACK200_CF imageSrc={image} color1={color1}></PACK200_CF>}
                  {model === "PACK250_CF" && <PACK250_CF imageSrc={image} color1={color1}></PACK250_CF>}
                  {model === "SIG120_mini" && <SIG120_mini imageSrc={image} color1={color1}></SIG120_mini>}
                  {model === "SIG150_mini" && <SIG150_mini imageSrc={image} color1={color1}></SIG150_mini>}
                  {model === "SIG200_mid" && <SIG200_mid imageSrc={image} color1={color1}></SIG200_mid>}
                  {model === "CAN175" && <CAN175 imageSrc={image} color1={color1}></CAN175>}
                  {model === "CAN200" && <CAN200 imageSrc={image} color1={color1}></CAN200>}
                  {model === "CAN238" && <CAN238 imageSrc={image} color1={color1}></CAN238>}
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
                  <meshStandardMaterial color="F8F8F8" roughness={0.9} metalness={0} opacity={0.7} transparent={true} />
                </mesh>
              </mesh>
            </Suspense>
          </Canvas>
          {/* 캔버스 끝 */}
          <div className=" pack_btn_left text-start">
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
              onDragOver={handleDragOver}
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
              <ChromePicker
                disableAlpha={true}
                color={color1 ?? { r: 0, g: 0, b: 0, a: 1 }} // color1이 null이거나 undifined 일 때만 후자 설정 적용
                onChange={(c) => {
                  setColor1(c.hex);
                  console.log(color1);
                }}></ChromePicker>
            </div>
          </div>
          <div className="pack_btn_footer">
            <ul>
              <li>
                <button type="button" onClick={() => handleChangeCameraPostion([0, 3, 10])}>
                  <img src={images3d["btn_3d_01.png"]} alt="정면" />
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleChangeCameraPostion([0, 0, -10])}>
                  <img src={images3d["btn_3d_02.png"]} alt="뒷면" />
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleChangeCameraPostion([10, 0, 0])}>
                  <img src={images3d["btn_3d_03.png"]} alt="오른쪽" />
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleChangeCameraPostion([-10, 0, 0])}>
                  <img src={images3d["btn_3d_04.png"]} alt="왼쪽" />
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleChangeCameraPostion([0, 10, 0])}>
                  <img src={images3d["btn_3d_05.png"]} alt="탑" />
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleChangeCameraPostion([0, -10, 0])}>
                  <img src={images3d["btn_3d_06.png"]} alt="바닥" />
                </button>
              </li>
              <li>
                <button type="button" onClick={handleDownload}>
                  <img src={images3d["btn_3d_save.png"]} alt="save" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SampleDev;
