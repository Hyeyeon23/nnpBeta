import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import $ from "jquery";

function useScrollTopPercentage(deps = []) {
    useLayoutEffect(() => {
        function scrollPercentage() {
            const scrollTopPos = document.documentElement.scrollTop;
            const calcHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scrollValue =
                calcHeight > 0
                    ? Math.round((scrollTopPos / calcHeight) * 100)
                    : 0;

            const $wrap = $("#scroll-percentage");

            $wrap.css(
                "background",
                `conic-gradient(var(--rr-theme-primary2) ${scrollValue}%, var(--rr-common-white) ${scrollValue}%)`
            );

            // active toggle
            if (scrollTopPos > 100) {
                $wrap.addClass("active");
            } else {
                $wrap.removeClass("active");
            }

            // value 표시
            if (scrollValue < 96) {
                $("#scroll-percentage-value").text(`${scrollValue}%`);
            } else {
                $("#scroll-percentage-value").html(
                    '<i class="fa-sharp fa-regular fa-arrow-up-long"></i>'
                );
            }
        }

        // 스크롤 / 초기 로드
        window.addEventListener("scroll", scrollPercentage);
        scrollPercentage();

        // Back to top
        function scrollToTop() {
            document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }

        $("#scroll-percentage").on("click", scrollToTop);

        return () => {
            window.removeEventListener("scroll", scrollPercentage);
            $("#scroll-percentage").off("click", scrollToTop);
        };
    }, deps);
}

export default useScrollTopPercentage;
