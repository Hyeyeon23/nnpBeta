import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useWow() {
    const location = useLocation();

    useEffect(() => {
        if (!window.WOW) return;

        // 🔥 기존 WOW 인스턴스 파괴
        if (window._wowInstance) {
            window._wowInstance.stop();
            window._wowInstance = null;
        }

        // 🔥 다시 초기화
        window._wowInstance = new window.WOW({
            live: false, // 중요: DOM 자동 감시 끔
        });
        window._wowInstance.init();
    }, [location.pathname]);
}

export default useWow;
