import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Power2 } from "gsap";
import Meta from "../../components/common/Meta";

import Odometer from "react-odometerjs";

gsap.registerPlugin(ScrollTrigger);
const Vision = () => {
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
      }
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
    { scope: containerRef }
  );

  return (
    <>
      <Meta title={"자연과사람들 비젼"}></Meta>
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
      <section className="bg_city pb200">
        <div className="contant1160 pt200 pb200">
          <div className="row city_line">
            <div className="col-lg-6">
              <p className="f60 fw700 white lh140">
                함께 만드는
                <br />
                지속 가능한 미래
              </p>
              <p className="f40 fw500 white mt30">Our Vision</p>
            </div>
            <div className="col-lg-6">
              <p className="f20 fw400 white lh170 mt100">
                자연과사람들은 건강, 신뢰, 혁신을 바탕으로 인류와 사회, <br className="vWive" />
                그리고 지구 환경까지 아우르는 지속 가능한 미래를 만들어 갑니다.
              </p>
            </div>
          </div>
          <div className="row" ref={odometerRef}>
            <div className="col-lg-4 mt50">
              <div className="city_box">
                <p className="white fw500 f20">연간 생산량 5억본 달성</p>
                <div className="center">
                  <Odometer
                    value={triggered ? production : 0}
                    format="d"
                    duration={3000} // 3초 애니메이션
                    className="odometer f80 fw600 white"
                  />
                  <sub className="f30 fw600 white lh100">억본</sub>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt50">
              <div className="city_box">
                <p className="white fw500 f20">글로벌 매출 20% 수출 달성</p>
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
                <p className="white fw500 f20">품질률 99.99% 달성</p>
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

export default Vision;
