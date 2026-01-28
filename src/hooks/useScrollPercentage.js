import { useLayoutEffect } from "react";
import $ from "jquery";

/**
 * @function useScrollTopPercentage
 * @description
 * 페이지 스크롤 진행도를 퍼센트(%)로 계산해
 * 원형(conic-gradient) 스크롤 인디케이터로 표시하고,
 * 클릭 시 최상단으로 스크롤하는 인터랙션을 제공하는 커스텀 훅
 *
 * @param {Object} [options={}]
 *
 * @param {string} [options.scrollIndicatorSelector="#scroll-percentage"]
 *  스크롤 진행도를 표시하는 원형 인디케이터 CSS selector
 *
 * @param {string} [options.scrollIndicatorValueSelector="#scroll-percentage-value"]
 *  퍼센트 숫자 또는 아이콘을 표시하는 요소 CSS selector
 *
 * @param {number} [options.indicatorActivateScrollY=100]
 *  이 스크롤 Y 값을 넘으면 인디케이터에 active 클래스가 적용됨
 *
 * @param {number} [options.indicatorIconSwitchPercent=96]
 *  퍼센트 값이 이 수치 이상일 때 숫자 대신 아이콘으로 전환
 *
 * @param {string} [options.indicatorProgressColor="var(--rr-theme-primary2)"]
 *  원형 인디케이터의 진행(progress) 색상
 *
 * @param {string} [options.indicatorBackgroundColor="var(--rr-common-white)"]
 *  원형 인디케이터의 비진행(background) 색상
 *
 * @param {Array<any>} [options.effectDeps=[]]
 *  useLayoutEffect 재실행을 위한 의존성 배열
 *
 * @returns {void}
 */
function useScrollTopPercentage({
    scrollIndicatorSelector = "#scroll-percentage",
    scrollIndicatorValueSelector = "#scroll-percentage-value",

    indicatorActivateScrollY = 100,
    indicatorIconSwitchPercent = 96,

    indicatorProgressColor = "var(--rr-theme-primary2)",
    indicatorBackgroundColor = "var(--rr-common-white)",

    effectDeps = [],
} = {}) {
    useLayoutEffect(() => {
        function updateScrollIndicator() {
            // 현재 스크롤 Y 위치
            const scrollTopY = document.documentElement.scrollTop;

            // 전체 스크롤 가능 높이
            const scrollableHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            // 스크롤 진행 퍼센트 계산
            const scrollPercent =
                scrollableHeight > 0
                    ? Math.round((scrollTopY / scrollableHeight) * 100)
                    : 0;

            const $indicator = $(scrollIndicatorSelector);

            // 원형 진행 UI 업데이트
            $indicator.css(
                "background",
                `conic-gradient(${indicatorProgressColor} ${scrollPercent}%, ${indicatorBackgroundColor} ${scrollPercent}%)`
            );

            // active 클래스 토글
            if (scrollTopY > indicatorActivateScrollY) {
                $indicator.addClass("active");
            } else {
                $indicator.removeClass("active");
            }

            // 퍼센트 값 / 아이콘 전환
            if (scrollPercent < indicatorIconSwitchPercent) {
                $(scrollIndicatorValueSelector).text(`${scrollPercent}%`);
            } else {
                $(scrollIndicatorValueSelector).html(
                    '<i class="fa-sharp fa-regular fa-arrow-up-long"></i>'
                );
            }
        }

        // 스크롤 이벤트 등록 + 초기 실행
        window.addEventListener("scroll", updateScrollIndicator);
        updateScrollIndicator();

        // 인디케이터 클릭 시 최상단 이동
        function scrollToTop() {
            document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }

        $(scrollIndicatorSelector).on("click", scrollToTop);

        // cleanup
        return () => {
            window.removeEventListener("scroll", updateScrollIndicator);
            $(scrollIndicatorSelector).off("click", scrollToTop);
        };
    }, effectDeps);
}

export default useScrollTopPercentage;
