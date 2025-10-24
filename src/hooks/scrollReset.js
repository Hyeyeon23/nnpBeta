import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollReset() {
    const location = useLocation();

    useEffect(() => {
        // ScrollTrigger가 활성화되어 있는지 확인
        if (typeof ScrollTrigger !== "undefined" && ScrollTrigger.getAll) {
            const triggers = ScrollTrigger.getAll();
            if (triggers && triggers.length > 0) {
                triggers.forEach(trigger => trigger.kill());
            }
            ScrollTrigger.refresh();
        }
    }, [location]);
}
