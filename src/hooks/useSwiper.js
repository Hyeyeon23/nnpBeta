// hooks/useSwiper.js
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";

/**
 * @function useSwiper
 * @description
 * 지정한 CSS selector의 요소에 Swiper 슬라이더를 초기화하는 커스텀 훅.
 * DOM 렌더링이 완전히 안정된 이후에 Swiper를 생성하기 위해
 * requestAnimationFrame을 두 번 사용하여 초기화 타이밍을 보장한다.
 *
 * 컴포넌트 언마운트 시 Swiper 인스턴스를 안전하게 제거하여
 * 메모리 누수와 중복 초기화를 방지한다.
 *
 * @param {string} selector
 *  Swiper를 적용할 컨테이너 요소의 CSS selector
 *
 * @param {Object} options
 *  Swiper 생성 시 전달할 설정 객체
 *  (slidesPerView, loop, navigation, pagination 등)
 *
 * @returns {void}
 */
export default function useSwiper(selector, options) {
    const swiperRef = useRef(null);

    useEffect(() => {
        let rafId;

        const init = () => {
            const el = document.querySelector(selector);
            if (!el) return;

            swiperRef.current = new Swiper(el, options);
        };

        // DOM 안정화 이후 Swiper 초기화
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
        // options는 의도적으로 deps에서 제외
    }, [selector]);
}