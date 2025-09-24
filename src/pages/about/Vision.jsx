import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Power2 } from "gsap";
gsap.registerPlugin(ScrollTrigger);
const Vision = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      // 첫 번째 타입의 이미지 애니메이션
      document.querySelectorAll(".img_anim_reveal-React").forEach((element) => {
        const image = element.querySelector("img");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
          },
        });

        tl.set(element, {
          autoAlpha: 1,
        })
          .from(element, {
            xPercent: -200,
            duration: 1.5,
            ease: Power2.out,
          })
          .from(image, {
            xPercent: 100,
            scale: 1.3,
            duration: 1.5,
            delay: -1.5,
            ease: Power2.out,
          });
      });

      // 두 번째 타입의 이미지 애니메이션
      document.querySelectorAll(".img_anim_reveal-2-React").forEach((element) => {
        const image = element.querySelector("img");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
          },
        });

        tl.set(element, {
          autoAlpha: 1,
        })
          .from(element, {
            xPercent: 220,
            duration: 1.5,
            ease: Power2.out,
          })
          .from(image, {
            xPercent: 100,
            scale: 1.2,
            duration: 1.5,
            delay: -1.5,
            ease: Power2.out,
          });
      });
    },
    { scope: containerRef }
  );

  return (
    <>
      <section ref={containerRef}>
        <div className="contant1160 mt100">
          <div className="row">
            <div className="col-lg-12">
              <p className="f90 fw700 grayn2 f_pp italic lh110">Mission</p>
              <p className="f80 fw600 grayn1 lh110 mt30">인류의 건강한 미래 지향</p>
              <p className="f20 fw400 grayn1 lh170 mt40">
                자연과사람들은 단순히 음료를 만드는 기업을 넘어, <br />
                인류의 건강한 미래를 지향하는 파트너로서 존재합니다. <br />
                고객의 삶을 더 건강하고 풍요롭게 만드는 것을 사명으로, <br />
                오늘도 혁신과 변화를 이어갑니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section__area about-section section-space-bottom-160 overflow-hidden">
        <div className="container">
          <div className="row mt100">
            <div className="col-md-6">
              <div className="about-section__left">
                <div className="about-section__left__wrapper">
                  <div className="about-section__thumb text-end img_anim_reveal-React">
                    <img src="/common/imgs/company/vision03.jpg" alt="image not found" className="image-1" />
                  </div>
                  <div className="about-section__thumb img_anim_reveal-React">
                    <img src="/common/imgs/company/vision04.jpg" alt="image not found" className="image-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-section__right">
                <div className="about-section__right__wrapper p-relative">
                  <div className="about-section__thumb img_anim_reveal-2-React">
                    <img src="/common/imgs/company/vision02.jpg" alt="image not found" className="image-1" />
                  </div>
                  <div className="about-section__right__content img_anim_reveal-2-React">
                    <div className="about-section__right__count">
                      <img src="/common/imgs/company/vision01.jpg" alt="image not found" className="image-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg_world">
        <div className="contant1160">
          <div className="row">
            <div className="col-lg-12">
              <p className="f90 fw700 grayn2 f_pp italic lh110 text-right">Vision</p>
              <p className="f80 fw600 grayn1 lh110 mt30 text-right">
                by 2030,
                <br />
                Global OEM & ODM
              </p>
              <p className="f20 fw400 grayn1 lh170 mt40 text-right">
                우리는 국내를 넘어 세계 시장에서 인정받는 글로벌 <br />
                OEM·ODM 전문 기업으로 성장하고 있습니다.
                <br /> 2030년까지 세계 곳곳에서 신뢰받는 파트너로 자리매김하며,
                <br /> 대한민국을 넘어 글로벌 스탠다드를 만들어갑니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
