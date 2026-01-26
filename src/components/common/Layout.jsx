import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import useScrollTopPercentage from "../../hooks/useScrollPercentage";
import useWow from "../../hooks/wow";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Layout = ({ children }) => {
  const location = useLocation();
  useWow();
  useScrollTopPercentage();
  useLayoutEffect(() => {
    const wrapper = document.querySelector("#smooth-wrapper");
    const content = document.querySelector("#smooth-content");
    console.log("🔥 Layout render");

    // ❌ wrapper 자체가 없는 경우만 "완전 비적용 페이지"
    if (!wrapper) {
      const existing = ScrollSmoother.get();
      if (existing) {
        existing.kill();
        ScrollTrigger.clearScrollMemory();
        ScrollTrigger.refresh(true);
      }
      return;
    }

    // ⚠️ wrapper는 있는데 content가 없는 페이지
    // → 아무 것도 하지 않는다 (kill ❌, return ❌)
    if (!content) {
      // 그냥 통과
      return;
    }

    // 🔥 항상 기존 smoother 제거
    const existing = ScrollSmoother.get();
    if (existing) {
      existing.kill();
    }

    const smoother = ScrollSmoother.create({
      smooth: 0.5,
      effects: true,
      smoothTouch: false,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });
    console.log("🔥 smoother created");
    // 🔥 DOM 기준 재계산 (핵심)
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      console.log("unmounted");
      smoother.kill();
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh();
    };
  }, [location.pathname]); // 🔥 이게 없으면 실패

  return <>{children}</>;
};

export default Layout;
