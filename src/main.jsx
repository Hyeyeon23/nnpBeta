import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/main.css";
import "./assets/css/style.css";
import "./assets/css/reset.css";
//import "./assets/css/vendor/bootstrap.min.css";
import "./assets/css/vendor/animate.min.css";
import "./assets/css/vendor/odometer.min.css";
import "./assets/css/plugins/swiper.min.css";
import "./assets/css/vendor/magnific-popup.css";
import "./assets/css/vendor/fontawesome-pro.css";
import "./assets/css/vendor/spacing.css";

// import "./assets/scss/utils/_root.scss";
// import "./assets/scss/theme/_theme.scss";
createRoot(document.getElementById("root")).render(<App />);
