import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function useProjectPanelPin(containerRef) {
    const location = useLocation();

    useLayoutEffect(() => {
        if (!containerRef || !containerRef.current) return;
        if (!containerRef?.current) return;
        if (window.innerWidth <= 768) {
            console.log("Scroll animation is disabled for mobile devices.");
            return;
        }

        const ctx = gsap.context(() => {
            const panels =
                containerRef.current.querySelectorAll(".project-panel");

            panels.forEach((section) => {
                gsap.to(section, {
                    scrollTrigger: {
                        trigger: section,
                        pin: section,
                        scrub: 1,
                        start: "top 10%",
                        end: "bottom 95%",
                        endTrigger: ".project-panel-area",
                        pinSpacing: false,
                        markers: false,
                    },
                });
            });
        }, containerRef);

        // ✅ 네비게이션 진입 대응 (핵심)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                ScrollTrigger.refresh(true);
            });
        });
        return () => {
            ctx.revert();

        };
    }, [location.pathname]); // 🔥 핵심

}

export default useProjectPanelPin;
