import React, { useEffect } from "react";

function Kakao() {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("56a0d464869ca69fa332efeb5436ada5"); // 실제 키 입력
      console.log("Kakao SDK 초기화 완료");
    }
  }, []);

  const loginWithKakao = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:8080/auth/kakao/redirect", // 실제 Redirect URI 입력
    });
  };

  return (
    <div>
      <button onClick={loginWithKakao}>
        <img
          src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
          width="222"
          alt="카카오 로그인 버튼"
        />
      </button>
      <p id="token-result"></p>
    </div>
  );
}

export default Kakao;
