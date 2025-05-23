/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 result.gltf 
*/

import React, { useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { TextureLoader, Color, SRGBColorSpace } from 'three'
import { useCustomGLTF } from "../../hooks/useCustomGLTF";

export function PACK1000({ imageSrc, color1, ...props }) {

  const { nodes, materials } = useCustomGLTF('result.gltf')

  // 텍스처 로드 (예시로 '/path/to/texture.jpg' 경로를 사용)
  const texture = useTexture(imageSrc)
  texture.colorSpace = SRGBColorSpace // 일반적인 텍스처에는 이게 적절함

  // 특정 매터리얼에 텍스처 적용
  useEffect(() => {

    if (imageSrc !== '/sample.png') {
      if (materials.Material) {
        materials.Material.map = texture
        materials.Material.needsUpdate = true // 텍스처 적용 후 업데이트 필요
      }
    }

    if (color1) {
      // 날개 
      if (materials['매테리얼.001']) {
        materials['매테리얼.001'].color = new Color(color1)
        materials['매테리얼.001'].needsUpdate = true
      }

      // 날개 
      if (materials['materials.Material']) {
        materials['materials.Material'].color = new Color(color1)
        materials['materials.Material'].needsUpdate = true
      }
    }


  }, [materials, imageSrc, texture, color1])

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.큐브001.geometry} material={materials.Material} position={[-0.022, 1.865, -0.007]} scale={[0.836, 2, 0.836]} />
      <mesh castShadow receiveShadow geometry={nodes.실린더003.geometry} material={materials.매테리얼} position={[-0.054, 3.814, 0.002]} rotation={[0, 0, 0.131]} scale={[0.396, 0.106, 0.396]} />
      <mesh castShadow receiveShadow geometry={nodes.평면.geometry} material={materials['매테리얼.001']} position={[-0.023, 3.063, 0.841]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.737, 0.537, 0.537]} />
      <mesh castShadow receiveShadow geometry={nodes.평면001.geometry} material={materials['매테리얼.001']} position={[-0.023, 3.063, -0.853]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[0.737, 0.537, 0.537]} />
     
    </group>
  )
}

useGLTF.preload('/result.gltf')
