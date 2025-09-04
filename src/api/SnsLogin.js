
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