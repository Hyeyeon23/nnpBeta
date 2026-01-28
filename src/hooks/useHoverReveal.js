import { useLayoutEffect } from "react";
/**
 * @function useHoverReveal
 * @description
 * 마우스 이동에 따라 대상 요소 내부의 특정 자식 요소를
 * requestAnimationFrame 기반으로 따라다니게 만드는 hover 효과 커스텀 훅
 * @param {string} targetClass
 *  hover 효과를 적용할 대상 요소 selector
 * @param {Array<any>} [deps=[]]
 *  useLayoutEffect 재실행을 위한 의존성 배열
 * @returns {void}
 */

function useHoverReveal(targetClass, deps = []) {
    useLayoutEffect(() => {
        const items = document.querySelectorAll(targetClass);
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
