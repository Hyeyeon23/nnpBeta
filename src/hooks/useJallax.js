import { jarallax } from "jarallax";

/**
 * @function initJarallax
 * @description
 * 지정한 요소에 스크롤 패럴랙스 효과를 적용한다.
 * 스크롤 시 콘텐츠보다 배경 이미지가 느리게 이동하는 효과
 *
 * @param {string} selector
 *  패럴랙스 효과를 적용할 요소의 CSS selector
 *  (일반적으로 배경 이미지를 포함한 섹션)
 *
 * @param {number} speed
 *  스크롤 대비 배경 이미지 이동 속도 비율
 *  - 0에 가까울수록 움직임이 거의 없음
 *  - 값이 클수록 패럴랙스 효과가 강해짐
 *
 * @returns {void}
 */
export function initJarallax(selector, speed) {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;

    jarallax(els, {
        speed: speed,
        keepImg: true,
    });
}

/**
 * @function destroyJarallax
 * @description
 * 지정한 요소에 적용된 스크롤 패럴랙스 효과를 제거하고
 * Jarallax가 추가한 스타일과 이벤트를 정리한다.
 *
 * @param {string} selector
 *  패럴랙스 효과를 제거할 요소의 CSS selector
 *
 * @returns {void}
 */
export function destroyJarallax(selector) {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;

    jarallax(els, "destroy");
}
