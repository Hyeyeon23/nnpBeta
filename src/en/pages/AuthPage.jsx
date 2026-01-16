import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import FooterEN from "../../components/common/footer";
import Kakao from "../../components/sns/Kakao";
import Naver from "../../components/sns/Naver";

import Google from "../../components/sns/Google";
import HeaderEN from "../../components/common/HeaderEN";

const AuthPageEN = () => {
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
      <HeaderEN></HeaderEN>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section>
              <div className="contant1100 mt200 mb200">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="center logo3D">
                      <img src="/common/imgs/3d/3d_logo.jpg" alt="" />
                    </p>
                    <p class="grayn1 lh140 f23 fw400 center mt100">Simple access with social login</p>
                  </div>
                  <div className="col-lg-12 mt50 center login_btn_Box">
                    <Kakao></Kakao>
                    <Naver></Naver>
                    <Google></Google>
                    {/* <Google2></Google2> */}
                  </div>
                </div>
              </div>
            </section>
          </main>
          <div className="loading-form">
            <div className="sk-three-bounce">
              <div className="sk-child sk-bounce1"></div>
              <div className="sk-child sk-bounce2"></div>
              <div className="sk-child sk-bounce3"></div>
            </div>
          </div>
          <FooterEN></FooterEN>
        </div>
      </div>
    </>
  );
};

export default AuthPageEN;
