import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
/**
 * @function useSplitTextHero
 * @description
 * 히어로 영역의 텍스트를 SplitText로 문자 단위로 분해한 뒤,
 * 스크롤 진입 시 글자 등장(reveal) 애니메이션을 적용하는 커스텀 훅
 *
 * @param {string} [tagetHeroClass=".hero"]
 *  히어로 영역 selector
 * @param {string} [targetSplitClass="._split_text"]
 *  SplitText를 적용할 텍스트 요소 selector
 * @param {Object} [charRevealConfig]
 *  글자 등장 애니메이션(from) 설정 객체
 * @param {number} [charRevealConfig.opacity=0]
 *  시작 투명도
 * @param {number} [charRevealConfig.y=50]
 *  시작 Y 위치
 * @param {number} [charRevealConfig.rotation=1]
 *  시작 회전값
 * @param {number} [charRevealConfig.duration=2]
 *  애니메이션 지속 시간
 * @param {string} [charRevealConfig.ease="back.out(1.7)"]
 *  GSAP easing 함수
 * @param {number} [charRevealConfig.stagger=0.05]
 *  글자 간 애니메이션 간격
 * @returns {void}
 */
export default function useSplitTextHero(tagetHeroClass = ".hero", targetSplitClass = "._split_text",
    charRevealConfig = {
        opacity: 0,
        y: 50,
        rotation: 1,
        duration: 2,
        ease: "back.out(1.7)",
        stagger: 0.05,
    },
    heroScrollTriggerConfig = {
        start: "top bottom",
        toggleActions: "play none none reverse",
    }
) {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        console.log("useSplitTextHero run");

        if (!window.SplitText) {
            console.error(" SplitText 없음");
            return;
        }

        const ctx = gsap.context(() => {
            const heroes = document.querySelectorAll(tagetHeroClass);
            console.log("heroes:", heroes.length);

            heroes.forEach((hero) => {
                const textEl = hero.querySelector(targetSplitClass);
                if (!textEl) return;

                //  이미 쪼개진 경우 원복
                if (textEl._split) {
                    textEl._split.revert();
                }

                const split = new window.SplitText(textEl, {
                    type: "chars, words",
                });

                // 저장해둠 (중복 방지)
                textEl._split = split;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: hero,
                        start: heroScrollTriggerConfig['start'],
                        toggleActions: heroScrollTriggerConfig['toggleActions'],
                    },
                });

                tl.from(split.chars, charRevealConfig);
            });
        });

        return () => {
            ctx.revert();
            ScrollTrigger.refresh(true);
        };
    }, [pathname]);
}
