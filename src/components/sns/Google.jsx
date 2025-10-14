import { useEffect } from "react";
import { googleLogin } from "../../api/SnsLogin";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Google = () => {
  const handleSuccess = async (credentialResponse) => {
    console.log(credentialResponse.credential);

    const token = await googleLogin(credentialResponse.credential);

    if (token) {
      localStorage.setItem("nnpToken", token);
      window.location.href = "/dev";
    }

    // Process the credentialResponse, e.g., send it to your backend for verification
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId="598983894979-791a1hhtt1042tpkbk7l01e4ducbn4uq.apps.googleusercontent.com">
      {" "}
      <p>
        <a href="#!">
          {/* <img src="/common/imgs/3d/btn_naver.png" alt="네이버로그인"></img> */}
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        </a>
      </p>
    </GoogleOAuthProvider>
  );
};

export default Google;
