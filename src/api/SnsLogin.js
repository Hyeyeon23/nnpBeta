


import axiosInstance from "../utils/axios";

export const naverLogin = () => {

    const CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID
    const STATE_STRING = import.meta.env.VITE_NAVER_STATE_STRING
    const CALLBACK_URL = encodeURIComponent(import.meta.env.VITE_NAVER_CALLBACK_URL);

    const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`;

    window.location.href = naverAuthUrl;
}

export const loginWithKakao = () => {
    window.Kakao.Auth.authorize({
        redirectUri: import.meta.env.VITE_KAKAO_REDIRECT_URI, // 실제 Redirect URI 입력
    });
};

export const validateToken = async () => {

    try {

        const response = await axiosInstance.get("/upload/token/check", "", {});

        const token = new URL(window.location.href).searchParams.get("token");
        return token;

    } catch (error) {
        if (error.response && error.response.status === 403 || error.response.status === 401) {

            const go = window.confirm("SNS 인증 후 사진을 업로드 해주세요. 인증 페이지로 이동하시겠습니까?");
            if (go) {
                // 로그인으로 이동 — 이전 경로 저장 (로그인 후 리다이렉트용)
                window.location.href = "/auth";
            }
            return;
        }
    }
}

export const googleLogin = async (accessToken) => {
    try {

        console.log("googleLogin2 accessTOken  = ", accessToken)
        const response = await axiosInstance.post(
            "/auth/google/redirect2",
            accessToken,
            {
                headers: {
                    "Content-Type": "text/plain",
                }
            },
        )
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 인코딩 잘못돼서 넘어가는것때문에 개삽질함!! 
        console.log(response);
        return response.data;

    } catch (error) {
        console.log(error);
    }
}