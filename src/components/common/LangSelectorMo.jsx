import { useEffect, useRef, useState } from "react";

const LangSelectorMo = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const changeLang = (nextLang) => {
    if (nextLang === lang) return;
    localStorage.setItem("nnplang", nextLang);
    window.location.reload();
  };

  return (
    <div className="custom-sel">
      {/* 🔴 id / 구조 그대로 */}
      <div
        ref={ref}
        id="langSelector_mo"
        className={`lang-container ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((v) => !v)}>
        <div className="current-lang">
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

export default LangSelectorMo;
