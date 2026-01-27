import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const LangSelector = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  const changeLang = (nextLang) => {
    localStorage.setItem("nnplang", nextLang);
    setLang(nextLang);
    setIsOpen(false);

    // 🔥 니가 원하는 바로 그 "새로고침"
    if (location.pathname === "/") {
      window.location.reload();
    }
  };

  return (
    <div className="custom-sel">
      <div id="langSelector" ref={ref} className={`lang-container ${isOpen ? "active" : ""}`}>
        <div className="current-lang" onClick={() => setIsOpen((v) => !v)}>
          {lang === "ko" ? "KR" : "EN"}
          <span className="arrow_header"></span>
        </div>

        <div className="lang-dropdown">
          {lang === "ko" ? (
            <span onClick={() => changeLang("en")}>EN</span>
          ) : (
            <span onClick={() => changeLang("ko")}>KR</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LangSelector;
