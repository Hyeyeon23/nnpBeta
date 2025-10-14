import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

const Google2 = () => {
  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log("로그인 성공:", credentialResponse);
      // 로그인 성공 시 수행할 로직 (예: 사용자 정보 저장, API 호출 등)
    },
    onError: (error) => console.log("로그인 실패:", error),
  });

  return (
    <button onClick={() => login()}>
      <img src="/common/imgs/3d/btn_naver.png" alt="네이버로그인"></img>
      {/* 커스텀 버튼의 텍스트나 아이콘 등 원하는 스타일을 적용 */}
      <span>Google로 로그인</span>
    </button>
  );
};

export default Google2;
