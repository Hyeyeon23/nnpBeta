import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
/**
 * @function useProjectPanelPin
 * @description
 * ScrollTrigger를 이용해 프로젝트 패널에 pin 스크롤 효과를 적용하는 커스텀 훅
 * @param {React.RefObject<HTMLElement>} containerRef
 *  pin 대상 요소들을 감싸는 컨테이너 ref
 * @param {string} [pinClass=".project-panel"]
 *  pin 처리할 자식 요소 selector
 * @param {number|boolean} [scrub=1]
 *  스크롤과 애니메이션 동기화 옵션
 * @param {string} [startPoint="top 10%"]
 *  ScrollTrigger 시작 지점
 * @param {string} [endPoint="bottom 95%"]
 *  ScrollTrigger 종료 지점
 * @param {string} [endTriggerClass=".project-panel-area"]
 *  종료 기준이 될 트리거 selector
 * @param {boolean} [isPinSpacing=false]
 *  pin 시 여백 유지 여부
 * @param {boolean} [isMarkers=false]
 *  디버그용 마커 표시 여부
 * @returns {void}
 */

function useProjectPanelPin(containerRef, pinClass = ".project-panel",
    scrub = 1, startPoint = "top 10%", endPoint = "bottom 95%",
    endTriggerClass = ".project-panel-area", isPinSpacing = false, isMarkers = false) {
    const location = useLocation();

    useLayoutEffect(() => {
        if (!containerRef || !containerRef.current) return;
        if (!containerRef?.current) return;

        // 모바일은 효과 적용 노노 
        if (window.innerWidth <= 768) {
            console.log("Scroll animation is disabled for mobile devices.");
            return;
        }

        const ctx = gsap.context(() => {
            const panels =
                containerRef.current.querySelectorAll(pinClass);

            panels.forEach((section) => {
                gsap.to(section, {
                    scrollTrigger: {
                        trigger: section,
                        pin: section,
                        scrub: scrub,
                        start: startPoint,
                        end: endPoint,
                        endTrigger: endTriggerClass,
                        pinSpacing: isPinSpacing,
                        markers: isMarkers,
                    },
                });
            });
        }, containerRef);

        // 네비게이션 진입 대응 (핵심)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                ScrollTrigger.refresh(true);
            });
        });
        return () => {
            ctx.revert();

        };
    }, [location.pathname]); // 핵심

}

export default useProjectPanelPin;
