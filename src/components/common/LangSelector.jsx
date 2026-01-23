import { useEffect, useRef, useState } from "react";

const LangSelector = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  return (
    <div className="custom-sel">
      <div id="langSelector" ref={ref} className={`lang-container ${isOpen ? "active" : ""}`}>
        <div className="current-lang" onClick={() => setIsOpen((v) => !v)}>
          {lang === "ko" ? "KR" : "EN"}
          <span className="arrow_header"></span>
        </div>

        <div className="lang-dropdown">
          {lang === "ko" ? (
            <span
              onClick={() => {
                localStorage.setItem("nnplang", "en");
                location.reload();
              }}>
              EN
            </span>
          ) : (
            <span
              onClick={() => {
                localStorage.setItem("nnplang", "ko");
                location.reload();
              }}>
              KR
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LangSelector;
