import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model1 } from './components/Scene';


function App() {

  return (
    <div className='justify-content-center text-center pt-5' >
      <h1>Three.js Test</h1>
      <div className='mt-4'>
        <Canvas style={{ height: "76vh"}}>        
          <OrbitControls autoRotate={true} />
          <mesh>
            <ambientLight intensity={1} />
            {/* <directionalLight position={[-1, 0, 1]} intensity={0.5} />
            <boxGeometry args={[4, 4 ,4]} />
            <meshStandardMaterial attach="material" color="yellow" /> */}

            <Model1></Model1>
          </mesh>
        </Canvas>
      </div>
    </div>
  )

}

export default App
