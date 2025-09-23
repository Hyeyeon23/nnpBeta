import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const scripts = [
      "/common/js/vendor/jquery-3.7.1.min.js",
      "/common/js/vendor/chroma.min.js",
      "/common/js/vendor/bootstrap.bundle.min.js",
      "/common/js/plugins/meanmenu.min.js",
      "/common/js/plugins/swiper.min.js",
      "/common/js/plugins/gsap.js",
      "/common/js/plugins/ScrollSmoother.js",
      "/common/js/plugins/ScrollToPlugin.js",
      "/common/js/plugins/SplitText.js",
      "/common/js/plugins/wow.js",
      "/common/js/vendor/magnific-popup.min.js",
      "/common/js/vendor/type.js",
      "/common/js/vendor/vanilla-tilt.js",
      "/common/js/plugins/nice-select.min.js",
      "/common/js/vendor/jarallax.min.js",
      "/common/js/vendor/jquery-ui.min.js",
      "/common/js/vendor/jquery.counterup.min.js",
      "/common/js/plugins/parallax-scroll.js",
      "/common/js/plugins/jquery.countdown.min.js",
      "/common/js/vendor/ajax-form.js" /*  */,
      "/common/js/plugins/waypoints.min.js",
      "/common/js/vendor/odometer.min.js",
      "/common/js/plugins/isotope-docs.min.js",
      "/common/js/plugins/ScrollTrigger.js",

      "/common/js/vendor/imagesloaded.pkgd.min.js",
      "/common/js/vendor/text-animation.min.js",
      "/common/js/vendor/scripts.js",
      "/common/js/main.js",
    ];

    scripts.forEach((src) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false; // 순서 보장
      document.body.appendChild(s);
    });
  }, []);

  return (
    <>
      {" "}
      <RouterProvider router={root}></RouterProvider>
    </>
  );
}

export default App;
