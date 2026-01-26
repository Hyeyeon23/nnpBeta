import { useLayoutEffect } from "react";
import gsap from "gsap";

function useHeightTitles(deps = []) {
    useLayoutEffect(() => {
        "use strict";

        /* ------------------------------
           generateSpans (원본 그대로)
        ------------------------------ */
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

                    if (index !== words.length - 1) {
                        finalHTML += "<div><span></span></div>";
                    }
                });

                element.innerHTML = finalHTML;
            });
        }

        generateSpans(".height-title .hero-title");
        generateSpans(".height-title .next-hero-title");
        generateSpans(".height-title .slide-hero-title");
        generateSpans(".fixed-title");

        /* ------------------------------
           applyHoverEffect (원본 그대로)
        ------------------------------ */
        function applyHoverEffect(selector) {
            const spans = document.querySelectorAll(selector);

            function handleMouseMove(e) {
                const hoveredSpan = e.target;
                const rect = hoveredSpan.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const scaleFactor = 0.2;

                const center = rect.width / 2;
                let scale;

                if (mouseX < center) {
                    scale = (scaleFactor + 1) + (scaleFactor * mouseX) / center;
                } else {
                    scale =
                        (scaleFactor + 1) +
                        (scaleFactor * (rect.width - mouseX)) / center;
                }

                gsap.to(hoveredSpan, {
                    scaleY: scale,
                    duration: 0.5,
                    ease: "power4.out",
                });

                const spansArray = Array.from(spans);
                const hoveredIndex = spansArray.indexOf(hoveredSpan);

                const prevSpan = spansArray[hoveredIndex - 1];
                const nextSpan = spansArray[hoveredIndex + 1];

                if (prevSpan) {
                    let distanceFromMouse = Math.abs(rect.left - e.clientX);
                    distanceFromMouse = Math.min(distanceFromMouse, center);

                    const scalePrev =
                        1 + (scaleFactor * (center - distanceFromMouse)) / center;

                    gsap.to(prevSpan, {
                        scaleY: scalePrev,
                        duration: 0.5,
                        ease: "power4.out",
                    });
                }

                if (nextSpan) {
                    let distanceFromMouse = Math.abs(rect.right - e.clientX);
                    distanceFromMouse = Math.min(distanceFromMouse, center);

                    const scaleNext =
                        1 + (scaleFactor * (center - distanceFromMouse)) / center;

                    gsap.to(nextSpan, {
                        scaleY: scaleNext,
                        duration: 0.5,
                        ease: "power4.out",
                    });
                }
            }

            function handleMouseLeave() {
                spans.forEach((span) => {
                    gsap.to(span, {
                        scaleY: 1,
                        duration: 0.5,
                        ease: "power4.out",
                    });
                });
            }

            spans.forEach((span) => {
                span.addEventListener("mousemove", handleMouseMove);
                span.addEventListener("mouseleave", handleMouseLeave);
            });

            // cleanup
            return () => {
                spans.forEach((span) => {
                    span.removeEventListener("mousemove", handleMouseMove);
                    span.removeEventListener("mouseleave", handleMouseLeave);
                });
            };
        }

        const cleanups = [];
        cleanups.push(
            applyHoverEffect(".height-title .hero-title span")
        );
        cleanups.push(
            applyHoverEffect(".height-title .next-hero-title span")
        );

        return () => {
            cleanups.forEach((fn) => fn && fn());
        };
    }, deps);
}

export default useHeightTitles;
