import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model1 } from './components/Scene';
import { Can } from './components/Can'
import { SimpleCan } from './components/SimpleCan'
import { Soup } from './components/Soup'
import { PACK1000 } from './components/PACK1000';


function App() {
  const [image, setImage] = useState('/sample.png'); // 기본 이미지 상태
  const [color1, setColor1] = useState(null);

  console.log("image", image)
  // 이미지 파일을 선택하는 함수
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // 선택된 파일
    if (file) {
      const url = URL.createObjectURL(file); // 파일을 URL로 변환
      setImage(url); // 이미지 상태 업데이트

      console.log("handleImageChange = " , url);
    }
  }

  const handleColor1Change = (e) => {
    console.log("handleColor1Change = ", e.target.value)
    setColor1(e.target.value)  
  }

  return (
    <div className='justify-content-center text-center pt-5' >
      <h1>Three.js Test</h1>
      <div className='mt-4'>
        <Canvas style={{ height: "76vh", backgroundColor: "grey" }} camera={{ position: [0, 5, 10], fov: 50 }}>
          <OrbitControls autoRotate={true} />
          <mesh>
            <ambientLight intensity={3} />
            {/* <directionalLight position={[-1, 0, 1]} intensity={0.5} />
            <boxGeometry args={[4, 4 ,4]} />
            <meshStandardMaterial attach="material" color="yellow" /> */}

            {/* <Model1></Model1> */}
            {/* <Can></Can> */}
            {/* <SimpleCan></SimpleCan> */}
            {/* <Soup imageSrc={image}></Soup> */}

            <PACK1000 imageSrc={image} color1={color1} ></PACK1000>
          </mesh>
        </Canvas>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}
        />
        <label for="colorPicker" style={{ position: 'absolute', top: 60, left: 90, zIndex: 1 }}>날개 색</label>
        <input type="color" id="colorPicker" onChange={handleColor1Change} style={{ position: 'absolute', top: 60, left: 20, zIndex: 1 }}/>
      </div>
    </div>
  )

}

export default App
