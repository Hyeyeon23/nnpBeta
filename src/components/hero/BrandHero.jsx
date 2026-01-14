import React from "react";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrandHero = ({ lang }) => {
  const heroRef = useRef(null);
  const captionRef = useRef(null);

  //   useEffect(() => {
  //     if (!heroRef.current || !captionRef.current) return;

  //     const heroHeight = heroRef.current.offsetHeight;

  //     gsap.to(captionRef.current, {
  //       duration: 1,
  //       yPercent: 5,
  //       opacity: 0.5,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: heroRef.current,
  //         start: "top top",
  //         end: `+=${heroHeight}`,
  //         scrub: true,
  //       },
  //     });
  //   }, []);

  if (lang === "ko") {
    return (
      <>
        {/* Banner area start */}
        <section id="hero" className="banner-2__area p-relative overflow-hidden z-1 ourbrand" ref={heroRef}>
          <div className="container custom-container-3 pt200">
            <div className="row">
              <div className="col-12">
                <div
                  id="hero-caption"
                  className="parallax-scroll-caption banner-2__content p-relative"
                  ref={captionRef}>
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
                    <span className="brand_round02 f22 f_pp">#Made by Nature & People</span>
                  </div>
                  <div className="banner-2__content__shapes-shape-3">
                    <span className="brand_round01 f22 f_pp">#Bang Bang Gok Gok</span>
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
};

export default BrandHero;
