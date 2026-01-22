import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Lang({ setLang }) {
  const navigate = useNavigate();

  useEffect(() => {
    const next = (localStorage.getItem("nnplang") || "en") === "en" ? "ko" : "en";

    localStorage.setItem("nnplang", next);
    setLang(next);
    navigate("/", { replace: true });
  }, []);

  return null;
}

export default Lang;
