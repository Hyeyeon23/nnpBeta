import { useLayoutEffect } from "react";
import gsap from "gsap";
/**
 * @function useHeightTitles
 * @description
 * 타이틀 텍스트를 문자(span) 단위로 분해한 뒤,
 * 마우스 위치에 따라 글자의 세로 크기(scaleY)를
 * GSAP 애니메이션으로 스트레치하는 hover 인터랙션을 적용하는 커스텀 훅
 * @param {Object} [options={}]
 *  훅 동작을 제어하기 위한 옵션 객체
 
 * @param {string[]} [options.spanTargets=[
 *   ".height-title .hero-title",
 *   ".height-title .next-hero-title",
 *   ".height-title .slide-hero-title",
 *   ".fixed-title"
 * ]]
 *  글자(span) 구조로 변환할 타이틀 요소 selector 목록
 *
 * @param {string[]} [options.hoverTargets=[
 *   ".height-title .hero-title span",
 *   ".height-title .next-hero-title span"
 * ]]
 *  hover 인터랙션을 적용할 span selector 목록
 * @param {number} [options.scaleFactor=0.2]
 *  글자 세로 확대 강도 (클수록 스트레치 효과 증가)
 * @param {number} [options.duration=0.5]
 *  GSAP 애니메이션 지속 시간 (초)
 * @param {string} [options.ease="power4.out"]
 *  GSAP easing 함수
 * @param {Array<any>} [options.deps=[]]
 *  useLayoutEffect 재실행을 위한 의존성 배열
 *
 * @returns {void}
 */
function useHeightTitles({
    // span 생성 대상 selector들
    spanTargets = [
        ".height-title .hero-title",
        ".height-title .next-hero-title",
        ".height-title .slide-hero-title",
        ".fixed-title",
    ],

    // hover 효과를 적용할 span selector들
    hoverTargets = [
        ".height-title .hero-title span",
        ".height-title .next-hero-title span",
    ],

    // scale 관련 옵션
    scaleFactor = 0.2,

    // GSAP 애니메이션 옵션
    duration = 0.5,
    ease = "power4.out",

    // useLayoutEffect deps
    deps = [],
} = {}) {
    useLayoutEffect(() => {
        "use strict";

        /* ==================================================
           텍스트를 글자 단위 span 구조로 변환
           ================================================== */
        function generateSpans(selector) {
            const elements = document.querySelectorAll(selector);

            elements.forEach((element) => {
                const text = element.textContent.trim();
                const words = text.split(" ");
                let finalHTML = "";

                words.forEach((word, index) => {
                    finalHTML += "<div>";

                    for (let i = 0; i < word.length; i++) {
                        finalHTML += `<span>${word[i]}</span>`;
                    }

                    finalHTML += "</div>";

                    // 단어 사이 공백 처리
                    if (index !== words.length - 1) {
                        finalHTML += "<div><span></span></div>";
                    }
                });

                element.innerHTML = finalHTML;
            });
        }

        // span 구조 생성
        spanTargets.forEach(generateSpans);

        /* ==================================================
           hover 효과 적용
           ================================================== */
        function applyHoverEffect(selector) {
            const spans = document.querySelectorAll(selector);

            function handleMouseMove(e) {
                const hoveredSpan = e.target;
                const rect = hoveredSpan.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const center = rect.width / 2;

                let scale;

                if (mouseX < center) {
                    scale =
                        (scaleFactor + 1) +
                        (scaleFactor * mouseX) / center;
                } else {
                    scale =
                        (scaleFactor + 1) +
                        (scaleFactor * (rect.width - mouseX)) / center;
                }

                // 현재 span
                gsap.to(hoveredSpan, {
                    scaleY: scale,
                    duration,
                    ease,
                });

                const spansArray = Array.from(spans);
                const index = spansArray.indexOf(hoveredSpan);

                const prevSpan = spansArray[index - 1];
                const nextSpan = spansArray[index + 1];

                // 이전 span
                if (prevSpan) {
                    let distance = Math.abs(rect.left - e.clientX);
                    distance = Math.min(distance, center);

                    gsap.to(prevSpan, {
                        scaleY:
                            1 +
                            (scaleFactor * (center - distance)) / center,
                        duration,
                        ease,
                    });
                }

                // 다음 span
                if (nextSpan) {
                    let distance = Math.abs(rect.right - e.clientX);
                    distance = Math.min(distance, center);

                    gsap.to(nextSpan, {
                        scaleY:
                            1 +
                            (scaleFactor * (center - distance)) / center,
                        duration,
                        ease,
                    });
                }
            }

            function handleMouseLeave() {
                spans.forEach((span) => {
                    gsap.to(span, {
                        scaleY: 1,
                        duration,
                        ease,
                    });
                });
            }

            spans.forEach((span) => {
                span.addEventListener("mousemove", handleMouseMove);
                span.addEventListener("mouseleave", handleMouseLeave);
            });

            // cleanup 반환
            return () => {
                spans.forEach((span) => {
                    span.removeEventListener("mousemove", handleMouseMove);
                    span.removeEventListener("mouseleave", handleMouseLeave);
                });
            };
        }

        /* ==================================================
           hover 효과 실행 + cleanup 관리
           ================================================== */
        const cleanups = hoverTargets.map(applyHoverEffect);

        return () => {
            cleanups.forEach((fn) => fn && fn());
        };
    }, deps);
}

export default useHeightTitles;