// lib/isotopeController.js
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

let isoInstance = null;

export function initIsotope(gridSelector) {
    const grid = document.querySelector(gridSelector);
    if (!grid) return;

    // 1️⃣ 먼저 Isotope부터 생성 (이미지 없어도)
    isoInstance = new Isotope(grid, {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
        transitionDuration: "0.3s",
    });

    // 2️⃣ 이미지가 로드될 때마다 레이아웃 갱신
    imagesLoaded(grid).on("progress", () => {
        isoInstance.layout();
    });
}

export function filterIsotope(filterValue) {
    if (!isoInstance) return;
    isoInstance.arrange({ filter: filterValue });
}

export function destroyIsotope() {
    if (!isoInstance) return;
    isoInstance.destroy();
    isoInstance = null;
}
