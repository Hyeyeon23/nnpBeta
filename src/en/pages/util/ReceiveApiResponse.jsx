import React from "react";
// src/pages/LoginSuccess.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ReceiveApiResponse = () => {
  useEffect(() => {
    const token = new URL(window.location.href).searchParams.get("token");

    if (token) {
      localStorage.setItem("nnpToken", token);

      window.location.href = "/dev";
    }
  }, []);

  return <div></div>;
};

export default ReceiveApiResponse;
