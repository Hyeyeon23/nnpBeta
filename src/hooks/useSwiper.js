// hooks/useSwiper.js
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";

export default function useSwiper(selector, options) {
    const swiperRef = useRef(null);

    useEffect(() => {
        let rafId;

        const init = () => {
            const el = document.querySelector(selector);
            if (!el) return;

            swiperRef.current = new Swiper(el, options);
        };

        // 🔑 핵심: DOM 안정화 이후 init
        rafId = requestAnimationFrame(() => {
            requestAnimationFrame(init);
        });

        return () => {
            cancelAnimationFrame(rafId);

            if (swiperRef.current) {
                swiperRef.current.destroy(true, true);
                swiperRef.current = null;
            }
        };
        // ⚠️ options는 deps에서 제거
    }, [selector]);
}
