import { useLayoutEffect } from "react";

function useHoverReveal(deps = []) {
    useLayoutEffect(() => {
        const items = document.querySelectorAll(".rr-hover-reveal-item");
        const rafIds = new Map();

        function moveImage(e, item, index) {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.x;
            const y = e.clientY - rect.y;

            if (item.children[index]) {
                item.children[index].style.transform =
                    `translate(${x}px, ${y}px)`;
            }
        }

        items.forEach((item) => {
            const onMove = (e) => {
                // 기존 RAF 취소
                if (rafIds.has(item)) {
                    cancelAnimationFrame(rafIds.get(item));
                }

                const rafId = requestAnimationFrame(() => {
                    moveImage(e, item, 1);
                });

                rafIds.set(item, rafId);
            };

            item.addEventListener("mousemove", onMove);

            // cleanup 저장
            item._hoverRevealCleanup = () => {
                item.removeEventListener("mousemove", onMove);
                if (rafIds.has(item)) {
                    cancelAnimationFrame(rafIds.get(item));
                }
            };
        });

        return () => {
            items.forEach((item) => {
                if (item._hoverRevealCleanup) {
                    item._hoverRevealCleanup();
                    delete item._hoverRevealCleanup;
                }
            });
        };
    }, deps);
}

export default useHoverReveal;
