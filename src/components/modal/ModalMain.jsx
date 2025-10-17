import React, { useEffect, useState } from "react";

const ModalMain = () => {
  const [oepnState, setOpenState] = useState(false);
  const START_TIME = new Date("2025-10-11").getTime();
  const END_TIME = new Date("2025-10-16").getTime();

  useEffect(() => {
    const now = Date.now();

    function isShow() {
      try {
        if (START_TIME >= now || now >= END_TIME) {
          return false;
        }
        const stamp = Number(localStorage.getItem("NNP_POPUP_STAMP") || 0);

        return !(stamp && Date.now() < stamp);
      } catch (e) {
        console.log(e);
        return true;
      }
    }
    setOpenState(isShow());
  }, []);

  const setNnnPopupStamp = () => {
    const OnedayLater = Date.now() + 24 * 60 * 60 * 1000;
    try {
      localStorage.setItem("NNP_POPUP_STAMP", String(OnedayLater));
    } catch (e) {
      console.log(e);
    }

    setOpenState(false);
  };

  return (
    <div
      className={`popup ${oepnState ? "is-open" : ""}`}
      id="eventPopup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popupTitle"
      aria-describedby="popupDesc"
      hidden={!oepnState}>
      <button className="popup__close" id="btnClose1" aria-label="닫기" onClick={() => setOpenState(false)}>
        ×
      </button>
      {/* 공고 내용 시작 (변동구간)*/}

      <div className="popup__inner">
        <div className="popup__title" id="popupTitle">
          2025년 신입사원 수시 채용
        </div>

        <div className="popup__subtitle">대한민국 No.1 OEM 자연과사람들</div>

        <a href="/recruit/info">
          <p className="popupimg">
            <img src="/common/imgs/main/popup_recruit.jpg" alt="채용 공고 이미지" />
          </p>
          <div className="popup__card">
            <div className="popup__truck white f16 fw500">채용공고 바로가기</div>
          </div>
        </a>

        <p className="popup__desc">
          모집분야
          <br />
          자재관리 / 품질관리(인증)
        </p>

        <p className="popup__desc">
          채용 기간
          <br />
          2025.10.17(금) ~ 2025.11.02(일) 24:00
        </p>
      </div>

      {/* 공고 내용 끝 * (변동구간)*/}

      <div className="popup__actions">
        <button type="button" className="popup__btn" id="btnHide1d" onClick={setNnnPopupStamp}>
          1일 동안 보지 않음
        </button>
        <button type="button" className="popup__btn" id="btnDismiss" onClick={() => setOpenState(false)}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default ModalMain;
