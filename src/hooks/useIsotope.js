// lib/isotopeController.js
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

let isoInstance = null;

/**
 * @function initIsotope
 * @description
 * 카드/그리드 형태의 아이템을 정렬하고 필터링할 수 있는
 * Isotope 레이아웃을 초기화한다
 *
 * @param {string} gridSelector
 *  Isotope를 적용할 그리드 컨테이너 CSS selector
 *
 * @param {string} itemSelector
 *  그리드 내부 개별 아이템 CSS selector
 *
 * @param {string} layoutMode
 *  아이템 정렬 방식 (예: "fitRows", "masonry")
 *
 * @param {string} transitionDuration
 *  레이아웃 변경 시 애니메이션 지속 시간
 *
 * @returns {void}
 */
export function initIsotope(
    gridSelector,
    itemSelector = ".grid-item",
    layoutMode = "fitRows",
    transitionDuration = "0.3s"
) {
    const grid = document.querySelector(gridSelector);
    if (!grid) return;

    // 1️⃣ Isotope 인스턴스 생성
    isoInstance = new Isotope(grid, {
        itemSelector,
        layoutMode,
        transitionDuration,
    });

    // 2️⃣ 이미지 로드 시마다 레이아웃 재계산
    imagesLoaded(grid).on("progress", () => {
        isoInstance.layout();
    });
}

/**
 * @function filterIsotope
 * @description
 * 초기화된 Isotope 그리드에 필터를 적용해
 * 조건에 맞는 아이템만 화면에 표시한다
 *
 * @param {string} filterValue
 *  필터 조건 (예: "*", ".category-a")
 *
 * @returns {void}
 */
export function filterIsotope(filterValue) {
    if (!isoInstance) return;
    isoInstance.arrange({ filter: filterValue });
}

/**
 * @function destroyIsotope
 * @description
 * Isotope 레이아웃 인스턴스를 제거하고
 * 내부 이벤트 및 상태를 정리한다
 *
 * @returns {void}
 */
export function destroyIsotope() {
    if (!isoInstance) return;
    isoInstance.destroy();
    isoInstance = null;
}
