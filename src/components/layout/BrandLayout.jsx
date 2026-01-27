import React, { useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

import FooterReact from "../common/FooterReact";
import FooterReactEN from "../common/FooterReactEN";
import Header from "../common/Header";
import HeaderEN from "../common/HeaderEN";
import BrandHero from "../hero/BrandHero";
import Meta from "../common/Meta";
import MetaEN from "../common/MetaEN";

const BrandLayout = ({ lang, setLang }) => {
  const location = useLocation();

  // ✅ title을 "계산값"으로 만듦 (state 아님)
  const title = useMemo(() => {
    const pathname = location.pathname.replace(/^\/en/, "");

    if (lang === "ko") {
      switch (pathname) {
        case "/brand/wizus/greenlemon/":
          return "자연과사람들 브랜드 위져스 WIZUS 레몬,녹차";
        case "/brand/healthy/sikhye/":
          return "자연과사람들 브랜드 건강담은 식혜";
        case "/brand/pb/":
          return "자연과사람들 브랜드 자연과사람들이만든";
        default:
          return "자연과사람들";
      }
    } else {
      switch (pathname) {
        case "/brand/wizus/greenlemon/":
          return "Nature & People WIZUS";
        case "/brand/healthy/sikhye/":
          return "Nature & People Bang Bang Gok Gok";
        case "/brand/pb/":
          return "Made by Nature & People";
        default:
          return "Nature & People";
      }
    }
  }, [lang, location.pathname]);

  const isKo = lang === "ko";

  return (
    <>
      {/* 🔥 Meta는 계산된 title만 사용 */}
      {isKo ? (
        <Meta title={title} />
      ) : (
        <>
          <Meta title={title} />
          <MetaEN
            title={title}
            description="Specialized in beverage OEM, ODM, Private Label, and B2B manufacturing, including exports. We expertly produce Aseptic Cartons, Gable Tops, and Cans."
          />
        </>
      )}

      {isKo ? <Header lang={lang} setLang={setLang} /> : <HeaderEN lang={lang} setLang={setLang} />}

      <div id="smooth-wrapper">
        <div id="smooth-content" className="body-bg">
          <main>
            <BrandHero lang={lang} />
            <Outlet />
          </main>
          {isKo ? <FooterReact /> : <FooterReactEN />}
        </div>
      </div>
    </>
  );
};

export default BrandLayout;
