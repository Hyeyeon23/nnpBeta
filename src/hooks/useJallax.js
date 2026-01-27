
import { jarallax } from "jarallax";
export function initJarallax(selector, speed) {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;

    jarallax(els, {
        speed: speed,
        keepImg: true,
    });
}

export function destroyJarallax(selector) {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;

    jarallax(els, "destroy");
}
