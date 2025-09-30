import { naverLogin } from "../../api/SnsLogin";
const Naver = () => {
  return (
    <p>
      <a href="#!" onClick={naverLogin}>
        <img src="/common/imgs/3d/btn_naver.png" alt="네이버로그인" />
      </a>
    </p>
  );
};

export default Naver;
