import { useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";


const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // sessionStorage에 저장된 경로 가져오기
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
