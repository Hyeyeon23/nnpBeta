import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Power2 } from "gsap";
import MetaEN from "../../../components/common/MetaEN";

import Odometer from "react-odometerjs";

gsap.registerPlugin(ScrollTrigger);
const VisionEN = () => {
  const containerRef = useRef();
  const [production, setProduction] = useState(0);
  const [global, setGlobal] = useState(0);
  const [quality, setQuality] = useState(0);

  const [triggered, setTriggered] = useState(false);
  const odometerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect(); // 한 번만 실행
        }
      },
      {
        threshold: 0.2, // 화면에 20% 보일 때 트리거
      },
    );

    if (odometerRef.current) observer.observe(odometerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // 컴포넌트 마운트 후 애니메이션 시작
    const timer = setTimeout(() => {
      setProduction(5); // data-count 값
      setGlobal(20);
      setQuality(99.99);
    }, 500); // preloader fadeOut 후 시점과 맞춰 조정

    return () => clearTimeout(timer);
  }, []);
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
    { scope: containerRef },
  );

  return (
    <>
      <MetaEN
        title={"Nature & People Vision"}
        description={
          "Specialized in beverage OEM, ODM, Private Label, and B2B manufacturing, including exports. We expertly produce Aseptic Cartons, Gable Tops, and Cans."
        }></MetaEN>
      <section ref={containerRef}>
        <div className="contant1160 mt100">
          <div className="row">
            <div className="col-lg-12">
              <p className="f90 fw700 grayn2 f_pp italic lh110">Mission</p>
              <p className="f80 fw600 grayn1  lh110 mt30">A Healthier Future for Humanity</p>
              <p className="f20 fw400 grayn1 lh170 mt40">
                Nature & People is more than a beverage manufacturer —<br />
                we strive to be a partner dedicated to the healthy future of humankind. <br />
                With a mission to enrich and enhance people’s lives,
                <br />
                we continue to pursue innovation and progress every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section__area about-section section-space-bottom-160 overflow-hidden">
        {/* 2025-09-29 wView클래스추가, 모바일 DIV추가 */}
        <div className="container wView">
          <div className="row mt100">
            <div className="col-md-6">
              <div className="about-section__left">
                <div className="about-section__left__wrapper">
                  <div className="about-section__thumb text-end img_anim_reveal">
                    <img src="/common/imgs/company/vision03.jpg" alt="image not found" className="image-1" />
                  </div>
                  <div className="about-section__thumb img_anim_reveal">
                    <img src="/common/imgs/company/vision04.jpg" alt="image not found" className="image-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-section__right">
                <div className="about-section__right__wrapper p-relative">
                  <div className="about-section__thumb img_anim_reveal-2">
                    <img src="/common/imgs/company/vision02.jpg" alt="image not found" className="image-1" />
                  </div>
                  <div className="about-section__right__content img_anim_reveal-2">
                    <div className="about-section__right__count">
                      <img src="/common/imgs/company/vision01.jpg" alt="image not found" className="image-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mView">
          <div className="row">
            <img src="/common/imgs/company/vision01_m.png" alt="image not found" className="image-1" />
          </div>
        </div>
        {/* //2025-09-29 wView클래스추가, 모바일 DIV추가 */}
      </section>

      <section className="bg_world">
        <div className="contant1160">
          <div className="row">
            <div className="col-lg-12">
              <p className="f90 fw700 grayn2 f_pp italic lh110 text-right">Vision</p>
              <p className="f80 fw600 grayn1  lh110 mt30 text-right">
                by 2030,
                <br />
                Global OEM & ODM
              </p>
              <p className="f20 fw400 grayn1 lh170 mt40 text-right">
                Nature & People is evolving beyond a domestic enterprise into <br />a globally-recognized OEM and ODM
                provider.
                <br />
                Aiming to establish ourselves as a global partner by 2030,
                <br /> we are creating global standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg_city pb200">
        <div className="contant1160 pt200 pb200">
          <div className="row city_line">
            <div className="col-lg-6">
              <p class="f60 fw700 white lh140">Sustainable Future We Create</p>
              <p className="f40 fw500 white mt30">Our Vision</p>
            </div>
            <div className="col-lg-6">
              <p className="f20 fw400 white lh170 mt100 ">
                Grounded in health, trust, and innovation, Nature & People is creating a sustainable future that
                embraces the well-being of humanity, society, and the global environment.
              </p>
            </div>
          </div>
          <div className="row" ref={odometerRef}>
            <div className="col-lg-4 mt50">
              <div className="city_box">
                <p className="white fw500 f20">Achieved annual production of 500 million units</p>
                <div className="center">
                  <Odometer
                    value={triggered ? production : 0}
                    format="d"
                    duration={3000} // 3초 애니메이션
                    className="odometer f80 fw600 white"
                  />
                  <sub className="f30 fw600 white lh100">M Units</sub>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt50">
              <div className="city_box">
                <p className="white fw500 f20">Achieved 20% of total revenue from global exports</p>
                <div className="center">
                  <Odometer
                    value={triggered ? global : 0}
                    format="d"
                    duration={3000} // 3초 애니메이션
                    className="odometer f80 fw600 white"
                  />
                  <sub className="f30 fw600 white">%</sub>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt50">
              <div className="city_box">
                <p className="white fw500 f20">Achieved a 99.99% quality rate</p>
                <div className="center">
                  <Odometer
                    value={triggered ? quality : 0}
                    format="d"
                    duration={3000} // 3초 애니메이션
                    className="odometer f80 fw600 white"
                  />
                  <sub className="f40 fw600 white">%</sub>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionEN;
