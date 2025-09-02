import { naverLogin } from "../../api/naverLogin";
const Naver = () => {
  /* const naverlogin = () => {
    //naverLogin();
  }; */
  return (
    <button id="naver_id_login" className="p-3" onClick={naverLogin}>
      <img
        src="/nnpBeta/naverlogin.png"
        alt="Naver Login"
        style={{ width: "175px", height: "auto" }}
        className="pb-4"
      />
    </button>
  );
};

export default Naver;
