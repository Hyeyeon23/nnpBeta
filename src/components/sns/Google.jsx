import React, { lazy } from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { googleLogin } from "../../api/SnsLogin";

function Google() {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse.access_token);

      const token = await googleLogin(tokenResponse.access_token);

      console.log("token = ", token);

      if (token) {
        localStorage.setItem("nnpToken", token);
        location.href = "/dev";
      }
    },
    /* flow: "auth-code", */
    onError: () => console.log("실패"),
  });

  return (
    <p>
      <a href="#!" onClick={() => login()}>
        <img src="/common/imgs/3d/btn_google.png" alt="google icon" />
      </a>
    </p>
  );
}

export default function LoginSection() {
  return (
    <GoogleOAuthProvider clientId="598983894979-791a1hhtt1042tpkbk7l01e4ducbn4uq.apps.googleusercontent.com">
      <Google />
    </GoogleOAuthProvider>
  );
}
