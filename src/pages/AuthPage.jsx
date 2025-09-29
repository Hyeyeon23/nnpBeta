import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/common/footer";
import Kakao from "../components/sns/Kakao";
import Naver from "../components/sns/Naver";
import Header from "../components/common/Header";
import BrandHero from "../components/hero/BrandHero";

const AuthPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 깃헙 배포환경에서 라우터 문제 해결
    // 404페이지에서 저장한 sessionStorage 저장 경로 가져오기

    const redirectPath = sessionStorage.getItem("redirectPath");

    if (redirectPath) {
      sessionStorage.removeItem("redirectPath"); // 한 번만 실행되도록 삭제
      navigate(redirectPath, { replace: true }); // 원래 경로로 이동
    }
  }, [navigate]);

  return (
    <>
      <BrandHero></BrandHero>
      <div class="backtotop-wrap cursor-pointer">
        <svg class="backtotop-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      <Header></Header>
      <div
        className="text-center bg-light"
        style={{ marginTop: 90, marginBottom: 10, paddingTop: 300, paddingBottom: 300 }}>
        <div>
          <Kakao></Kakao>
          <Naver></Naver>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AuthPage;
