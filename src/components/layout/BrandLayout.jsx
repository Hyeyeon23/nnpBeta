import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FooterReact from "../common/FooterReact";
import FooterReactEN from "../common/FooterReactEN";

import Header from "../common/Header";
import BrandHero from "../hero/BrandHero";
import Meta from "../common/Meta";

import HeaderEN from "../common/HeaderEN";

const BrandLayout = ({ lang, setLang }) => {
  const location = useLocation();
  const [title, setTitle] = useState("자연과 사람들 브랜드");
  useEffect(() => {
    console.log(location);

    switch (location.pathname) {
      case "/brand/wizus/greenlemon":
        setTitle("자연과사람들 브랜드 위져스 WIZUS 레몬,녹차");
        break;
      case "/brand/healthy/sikhye":
        setTitle("자연과사람들 브랜드 건강담은 식혜");
        break;
      case "/brand/pb":
        setTitle("자연과사람들 브랜드 자연과사람들이만든");
        break;
    }

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
  }, [location.pathname]);

  if (lang === "ko") {
    return (
      <>
        <Meta title={title}></Meta>
        <Header lang={lang} setLang={setLang}></Header>
        <div id="smooth-wrapper">
          <div id="smooth-content" className="body-bg">
            <main>
              <BrandHero key={location} lang={lang}></BrandHero>
              {/* <BrandHerodev path={location.pathname}></BrandHerodev> */}
              <Outlet></Outlet>
            </main>
            <FooterReact key={location}></FooterReact>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Meta title={title}></Meta>
      <HeaderEN lang={lang} setLang={setLang}></HeaderEN>
      <div id="smooth-wrapper">
        <div id="smooth-content" className="body-bg">
          <main>
            <BrandHero key={location} lang={lang}></BrandHero>
            {/* <BrandHerodev path={location.pathname}></BrandHerodev> */}
            <Outlet></Outlet>
          </main>
          <FooterReactEN key={location}></FooterReactEN>
        </div>
      </div>
    </>
  );
};

export default BrandLayout;
