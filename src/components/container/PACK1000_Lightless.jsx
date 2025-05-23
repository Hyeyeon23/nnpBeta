/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 PACK1000_WOOD.gltf 
*/

import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { TextureLoader, Color, SRGBColorSpace } from "three";
import * as THREE from "three";
import { useCustomGLTF } from "../../hooks/useCustomGLTF";

export function PACK1000_Lightless({ imageSrc, color1, ...props }) {

  const { scene, nodes, materials } = useCustomGLTF("PACK1000_Lightless.glb");
  const loader = new THREE.TextureLoader();

  /* 그림자 받기 */
  if (scene) {
    // scene이 존재하는 경우, scene 내의 모든 메쉬들에 castShadow 적용
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true; // 그림자 생성
        child.receiveShadow = true; // 그림자 받기
      }
    });
  }

  /* 사진 설정 있는 객체 조회 (단 한번 실행) */
  const targetMeshes = [];
  scene.traverse((child) => {
    if (
      child.isMesh &&
      child.material &&
      child.material.map &&
      child.material.map.name === "사이즈-조절-채소육수"
    ) {
      targetMeshes.push(child);
    }
  });

  /* 이미지 변경 */
  // 텍스쳐 이름을 바탕으로 텍스쳐를 찾아서 교체하는 함수
  const updateTexture = (textureName, imageSrc) => {

    loader.load(imageSrc, (newTexture) => {
      targetMeshes.forEach((child) => {
        const map = child.material.map;

        // 설정들 복사
        newTexture.encoding = map.encoding;
        newTexture.wrapS = map.wrapS;
        newTexture.wrapT = map.wrapT;
        newTexture.repeat.copy(map.repeat);
        newTexture.offset.copy(map.offset);
        newTexture.anisotropy = map.anisotropy;
        newTexture.flipY = map.flipY;
        newTexture.center.copy(map.center);
        newTexture.colorSpace = "srgb";

        newTexture.anisotropy = Math.min(map.anisotropy, 4);

        // 새 텍스쳐로 교체해준 다음에도 계속 같은 이름 값으로 찾을 수 있게
        newTexture.name = textureName;
        child.material.map = newTexture;
        child.material.needsUpdate = true;
      });
    });

  };
  
  useEffect(() => {
    if (imageSrc !== "/sample.png") {
      console.log("new image upload");
      updateTexture("사이즈-조절-채소육수", imageSrc);
    }

    if (color1) {
      // 날개
      if (materials["매테리얼.002"]) {
        materials["매테리얼.002"].color = new Color(color1);
        materials["매테리얼.002"].needsUpdate = true;
      }

      // 날개
      if (materials["materials.material"]) {
        materials["materials.material"].color = new Color("white");
        materials["materials.material"].needsUpdate = true;
      }
    }
  }, [imageSrc, nodes, color1, materials]); // imageSrc 또는 nodes가 변경될 때마다 텍스쳐 업데이트

  return <primitive object={scene} {...props} castShadow />;
}

useGLTF.preload("/PACK1000_Lightless.glb");
