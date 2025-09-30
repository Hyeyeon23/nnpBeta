import React, { useEffect } from "react";
import { loginWithKakao } from "../../api/SnsLogin";

function Kakao() {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("56a0d464869ca69fa332efeb5436ada5"); // 실제 키 입력
      console.log("Kakao SDK 초기화 완료");
    }
  }, []);

  return (
    <p>
      <a href="#!" onClick={loginWithKakao}>
        <img src="/common/imgs/3d/btn_kakao.png" alt="카카오로그인" />
      </a>
    </p>
  );
}

export default Kakao;
