import React from "react";

const Notice = () => {
  return (
    <>
      <style>{`
        .notice-wrapper {
          width: 100%;
          min-height: 100vh;
          background-color: #f4f4f4;
          padding: 0;
          font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', sans-serif;
          -webkit-text-size-adjust: 100%;
        }
        .notice-container {
          position: relative; /* 닫기 버튼 위치 기준점을 위해 추가 */
          max-width: 700px;
          width: 100%;
          margin: 0 auto;
        }
        .notice-container img {
          border-bottom: 1px solid #dddddd;
          border-left: 1px solid #dddddd;
          border-right: 1px solid #dddddd;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        /* 닫기 버튼 스타일 */
        .notice-close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 30px;
          height: 30px;
          background-color: rgba(255, 255, 255, 0.8);
          border: 1px solid #ccc;
          border-radius: 50%;
          font-size: 20px;
          font-weight: bold;
          color: #333333;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .notice-close-btn:hover {
          background-color: #ffffff;
        }
      `}</style>

      <div className="notice-wrapper">
        <div className="notice-container">
          <button type="button" className="notice-close-btn" aria-label="닫기" onClick={() => window.close()}>
            &times;
          </button>
          <p style={{ paddingBottom: 0 }}>
            <a href="/">
              <img
                src="/common/imgs/main/popup_origin_detail.jpg"
                alt="대두 원산지 표기와 관련하여 안내"
                style={{ width: "100%", display: "block" }}
              />
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Notice;
