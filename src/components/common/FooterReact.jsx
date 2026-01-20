import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const FooterReact = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      // GSAP title animation
      const splitTitleLines = gsap.utils.toArray(".rr_title_animReact");
      splitTitleLines.forEach((splitTextLine) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none reverse",
          },
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" });
        tl.from(itemSplitted.lines, {
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1,
        });
      });

      // Split text animation
      const heroes = gsap.utils.toArray(".hero");
      heroes.forEach((hero) => {
        const split = new SplitText(hero.querySelector("._split_textReact"), { type: "chars, words" });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top bottom",
            toggleActions: "play none none reverse",
            onEnter: () => tl.timeScale(2.3),
            onLeaveBack: () => tl.timeScale(2.3).reverse(),
          },
        });

        tl.to(hero.querySelector(".sup_hero"), {
          opacity: 1,
          x: -50,
          ease: "back",
        }).from(split.chars, {
          opacity: 0,
          y: 50,
          rotation: 1,
          duration: 2,
          ease: "back",
          stagger: 0.05,
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <footer ref={containerRef}>
      <section className="footer heading-bg overflow-hidden p-relative z-1">
        <div className="container">
          <div className="footer-top">
            <div className="footer-top-footer-title hero">
              <p className="_split_textReact f_pp f80 lh110 white">
                You are the star,
                <br />
                We set the stage.
              </p>
              <p className="rr_title_animReact lh200 f16 white">
                스포츠음료, 두유, 단백질 음료, 균형영양식 등
                <br />
                익숙한 음료 속에는 자연과사람들의 정성이 담겨 있습니다.
                <br />
                출근길, 운동 후, 하루의 식사까지
                <br />
                당신의 일상 속 건강한 순간을 위해
                <br />
                우리는 오늘도 조용히, 정직하게 음료를 만들어 갑니다.
              </p>
            </div>
          </div>
          {/* ...existing footer content... */}
          <div className="row footer__wrap p-relative">
            <div className="col-lg-4 col-md-6">
              <div className="footer__widget">
                <div className="footer__logo mb-20">
                  <a href="/">
                    <img src="/common/imgs/logo/logo_nnp_white.png" alt="logo not found" />
                  </a>
                </div>
              </div>
            </div>

            {/* Business */}
            <div className="col-lg-2 col-md-3 col-sm-3">
              <div className="footer__widget footer__widget-2th-left">
                <div className="footer__widget-title mb-30 mb-md-10 mb-sm-10 mb-xs-10">
                  <p className="f18 fw400 white">Business</p>
                </div>
                <div className="footer__link">
                  <ul>
                    <li>
                      <a href="/business/products">
                        {/* <a href="#!" onClick={() => linkTo("/business/products")}> */}
                        <i className="fa-solid fa-period"></i>제품유형
                      </a>
                    </li>
                    <li>
                      <a href="/business/containers">
                        {/* <a href="#!" onClick={() => linkTo("/business/containers")}> */}
                        <i className="fa-solid fa-period"></i>용기유형
                      </a>
                    </li>

                    <li>
                      {/* <a href="#!" onClick={() => linkTo("")}> */}
                      <a href="/business/rnd">
                        <i className="fa-solid fa-period"></i>RnD
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Brand */}
            <div className="col-lg-2 col-md-3 col-sm-3">
              <div className="footer__widget footer__widget-3th-left">
                <div className="footer__widget-title mb-30 mb-md-10 mb-sm-10 mb-xs-10">
                  <p className="f18 fw400 white">Brand</p>
                </div>
                <div className="footer__link">
                  <ul>
                    <li>
                      <a href="/brand/wizus/greenlemon">
                        {/* <a href="#!" onClick={() => linkTo("/brand/wizus/greenlemon")}> */}
                        <i className="fa-solid fa-period"></i>WIZUS
                      </a>
                    </li>
                    <li>
                      <a href="/brand/healthy/sikhye">
                        {/* <a href="#!" onClick={() => linkTo("/brand/healthy/sikhye")}> */}
                        <i className="fa-solid fa-period"></i>자연담은
                      </a>
                    </li>
                    <li>
                      <a href="/brand/pb">
                        {/* <a href="#!" onClick={() => linkTo("/brand/pb")}> */}
                        <i className="fa-solid fa-period"></i>자연과사람들이만든
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CS */}
            <div className="col-lg-2 col-md-3 col-sm-3">
              <div className="footer__widget footer__widget-4th-left">
                <div className="footer__widget-title mb-35 mb-md-20 mb-sm-20 mb-xs-20">
                  <p className="f18 fw400 white">CS</p>
                </div>
                <div className="footer__link">
                  <ul>
                    <li>
                      <a href="/cs/faq">
                        {/* <a href="#!" onClick={() => linkTo("/cs/faq")}> */}
                        <i className="fa-solid fa-period"></i>자주 묻는 질문
                      </a>
                    </li>
                    <li>
                      <a href="/cs/contact">
                        {/* <a href="#!" onClick={() => linkTo("/cs/contact")}> */}
                        <i className="fa-solid fa-period"></i>고객의 소리
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 관계사 */}
            <div className="col-lg-2 col-md-3 col-sm-3">
              <div className="footer__widget footer__widget-4th-left">
                <div className="footer__widget-title mb-35 mb-md-20 mb-sm-20 mb-xs-20">
                  <p className="f18 fw400 white">관계사</p>
                </div>
                <div className="footer__link">
                  <ul>
                    <li>
                      <a href="https://www.vegemil.co.kr">
                        <i className="fa-solid fa-period"></i>정식품
                      </a>
                    </li>
                    <li>
                      <a href="https://www.osse.co.kr">
                        <i className="fa-solid fa-period"></i>오쎄
                      </a>
                    </li>
                    <li>
                      <a href="https://www.edaymall.com">
                        <i className="fa-solid fa-period"></i>이데이몰
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hcsf.co.kr/">
                        <i className="fa-solid fa-period"></i>혜춘장학회
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom-wrapper">
          <div className="container">
            <div className="footer__bottom">
              <div className="footer__copyright">
                <p className="f14 fw400 grayn2">ⓒ 2025 Nature & People. All rights reserved.</p>
              </div>
              <div className="person">
                <ul>
                  <li>
                    <a href="/terms">이용약관</a> <a href="/personal">개인정보처리방침</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterReact;
