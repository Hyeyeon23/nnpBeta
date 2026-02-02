import { useEffect } from "react";
import { useLocation } from "react-router-dom";
/**
 * @function useWow
 * @description
 * WOW.js 기반 스크롤 등장 애니메이션을 페이지 전환 시마다 재초기화하는 커스텀 훅.
 *
 * WOW.js는 요소가 화면에 진입할 때
 * 페이드 인, 슬라이드 인 등 CSS 애니메이션을 실행하는 라이브러리,
 * 주로 섹션이나 카드가 스크롤에 맞춰 자연스럽게 등장하는 효과
 *
 * React Router 기반 SPA 환경에서는 라우트 변경 시
 * 기존 DOM이 교체되기 때문에 WOW 인스턴스를 다시 초기화해야 하며,
 * 이 훅은 기존 인스턴스를 정리한 뒤 재생성하여
 * 스크롤 애니메이션이 정상 동작하도록 보장.
 *
 * DOM 자동 감시(live) 기능은 비활성화하여
 * 불필요한 성능 비용과 중복 처리 문제를 방지.
 *
 * @returns {void}
 */

function useWow() {
    const location = useLocation();

    useEffect(() => {
        if (!window.WOW) return;

        // 기존 WOW 인스턴스 파괴
        if (window._wowInstance) {
            window._wowInstance.stop();
            window._wowInstance = null;
        }

        // 다시 초기화
        window._wowInstance = new window.WOW({
            live: false, // 중요: DOM 자동 감시 끔
        });
        window._wowInstance.init();
    }, [location.pathname]);
}

export default useWow;
