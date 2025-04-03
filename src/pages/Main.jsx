import { useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";


const Main = () => {
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
    <div className="container text-center bg-light ">
      <h1>Main</h1>
      <h4> .... </h4>
      <div>
        <Link to={"/sample"}> 용기시안 </Link>
      </div>
    </div>
  );
};

export default Main;
