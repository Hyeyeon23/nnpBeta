import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollInit() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // or "smooth"
    });
  }, [location.pathname]);

  return null;
}
