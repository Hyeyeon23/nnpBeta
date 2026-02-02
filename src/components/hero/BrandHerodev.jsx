import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 이미 등록되어 있지 않다면 한 번만 등록
if (!gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BrandHerodev({ path }) {
  const heroRef = useRef(null);
  const captionRef = useRef(null);

  useEffect(() => {
    let ctx;

    // 페이지 전환 시 기존 트리거 제거
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.killTweensOf("*");

    // 렌더 완료를 기다려서 약간의 지연 후 초기화
    const timeout = setTimeout(() => {
      const hero = heroRef.current;
      const caption = captionRef.current;
      if (!hero || !caption) return;

      ctx = gsap.context(() => {
        gsap.to(caption, {
          yPercent: 5,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: () => `+=${hero.offsetHeight}`,
            scrub: true,
          },
        });
      }, hero);
    }, 100); // ✅ 100ms 정도 딜레이를 줘야 DOM이 완성된 후 초기화됨

    return () => {
      clearTimeout(timeout);
      ctx?.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [path]);

  return (
    <>
      {/* Banner area start */}
      <section id="hero" className="banner-2__area p-relative overflow-hidden z-1 ourbrand" ref={heroRef}>
        <div className="container custom-container-3 pt200">
          <div className="row">
            <div className="col-12">
              <div id="hero-caption" className="parallax-scroll-caption banner-2__content p-relative" ref={captionRef}>
                <div className="banner-2__content__shapes">
                  <div className="banner-2__content__shapes-shape-1">
                    <span className="brand_round01 f22 f_pp">#WIZUS</span>
                  </div>
                  <div className="banner-2__content__shapes-shape-2">
                    <span className="brand_round02 f22 f_pp">#자연과사람들이만든</span>
                  </div>
                  <div className="banner-2__content__shapes-shape-3">
                    <span className="brand_round01 f22 f_pp">#방방곡곡</span>
                  </div>
                </div>
                <div className="content-full-width parallax-scroll-caption text-align-center height-title">
                  <div className="inner center">
                    <h2 className="hero-title caption-timeline primary-font-title f_pp fw700 f250">
                      OUR<span style={{ opacity: 0 }}>-</span>
                      <b>Brand</b>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
