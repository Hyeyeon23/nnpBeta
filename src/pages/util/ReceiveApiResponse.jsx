import React from "react";
// src/pages/LoginSuccess.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ReceiveApiResponse = () => {
  //const navigate = useNavigate();

  useEffect(() => {
    const token = new URL(window.location.href).searchParams.get("token");
    console.log("received Token = ", token);
    if (token) {
      localStorage.setItem("nnpToken", token);
      //navigate("/nnpBeta/"); // 홈이나 원하는 페이지로 이동
    }
  }, []);

  return <div>로그인 완료 중...</div>;
};

export default ReceiveApiResponse;
