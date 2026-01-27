import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useSplitTextHero() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        console.log("useSplitTextHero run");

        if (!window.SplitText) {
            console.error(" SplitText 없음");
            return;
        }

        const ctx = gsap.context(() => {
            const heroes = document.querySelectorAll(".hero");
            console.log("heroes:", heroes.length);

            heroes.forEach((hero) => {
                const textEl = hero.querySelector("._split_text");
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
                        start: "top bottom",
                        toggleActions: "play none none reverse",
                    },
                });

                tl.from(split.chars, {
                    opacity: 0,
                    y: 50,
                    rotation: 1,
                    duration: 2,
                    ease: "back.out(1.7)",
                    stagger: 0.05,
                });
            });
        });

        return () => {
            ctx.revert();
            ScrollTrigger.refresh(true);
        };
    }, [pathname]);
}
