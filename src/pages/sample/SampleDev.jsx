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
import { SIG200_mid } from "../../components/container/SIG200_mid";
import { CAN175 } from "../../components/container/CAN175";
import { CAN200 } from "../../components/container/CAN200";
import { CAN238 } from "../../components/container/CAN238";
import { images3d } from "../../utils/imagesImport";
import Footer from "../../components/common/footer";

const SampleDev = () => {
  const [image, setImage] = useState("/sample.png"); // 기본 이미지 상태
  const [pin, setPin] = useState(5);
  const [horizon, setHorizon] = useState(1.5);
  const [color1, setColor1] = useState(null);
  const [loadSpin, setLoadSpin] = useState(false);
  const [model, setModel] = useState("PACK1000_Lightless");
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="pack_wrap">
              <div className="pack_btn_object">
                <Canvas camera={{ position: [0, 3, 10], fov: 45 }} style={{ backgroundColor: "white" }} shadows>
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
      </div>
      <Footer></Footer>
    </>
  );
};

export default SampleDev;
