import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FooterReact from "../common/FooterReact";
import Header from "../common/Header";

const BrandLayout = () => {
  const location = useLocation();
  useEffect(() => {
    const existingScripts = document.querySelectorAll('script[src="/common/js/main.js"]');

    // 기존 스크립트 제거
    existingScripts.forEach((script) => {
      script.parentNode.removeChild(script);
    });

    // 기존 이벤트 제거 (만약 main.js가 전역 이벤트 바인딩 했다면, 여기서 직접 제거 필요)
    // 예: window.removeEventListener("scroll", someFunction) 등
    // main.js 내부에서 전역 이벤트를 바인딩했다면 main.js를 다시 로드하는 것만으로는 완전 제거가 안 될 수 있음

    // 새로 main.js 추가
    const mainScript = document.createElement("script");
    mainScript.src = "/common/js/main.js";
    mainScript.async = false;
    document.body.appendChild(mainScript);

    return () => {
      // 언마운트 시 스크립트 제거
      if (mainScript && document.body.contains(mainScript)) {
        document.body.removeChild(mainScript);
      }
    };
  }, [location]);
  return (
    <>
      <Header></Header>
      <div id="smooth-wrapper">
        <div id="smooth-content" className="body-bg">
          <Outlet></Outlet>
          <FooterReact></FooterReact>
        </div>
      </div>
    </>
  );
};

export default BrandLayout;
