


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


/*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
export const googleLogin = async (credential) => {

    try {
        const response = await axiosInstance.post("/auth/google/redirect", credential);
        return response.data;

    } catch (error) {
        console.log(error);
    }


}