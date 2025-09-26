// useParallaxScroll.js
import { useEffect } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * heroRef: 스크롤 트리거 기준 영역 ref
 * selector: heroRef 안에서 움직일 요소 선택자
 * options: { yPercent, opacity, duration }
 */
export function useParallaxScroll(heroRef, selector = ".parallax-scroll-caption", options = {}) {
    const { yPercent = 5, opacity = 0.5, duration = 1 } = options;

    useEffect(() => {
        if (!heroRef.current) return;

        const heroEl = heroRef.current;
        const targets = heroEl.querySelectorAll(selector);

        const animations = Array.from(targets).map(targetEl =>
            gsap.to(targetEl, {
                yPercent,
                opacity,
                duration,
                ease: Linear.easeNone,
                scrollTrigger: {
                    trigger: heroEl,
                    start: "top top",
                    end: () => `+=${heroEl.offsetHeight}`,
                    scrub: true,
                },
            })
        );

        return () => {
            // 언마운트 시 ScrollTrigger 정리
            animations.forEach(anim => {
                if (anim.scrollTrigger) anim.scrollTrigger.kill();
                anim.kill();
            });
        };
    }, [heroRef, selector, yPercent, opacity, duration]);
}
