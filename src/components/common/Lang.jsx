import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Lang({ setLang }) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("nnplang", "en");
    setLang("en");
    navigate("/", { replace: true });
  }, []);

  return null;
}

export default Lang;
