
export const naverLogin = () => {
    const CLIENT_ID = "jqwdFxbDgcq0GGmTbZFz";
    const STATE_STRING = "STATE_STRING";
    const CALLBACK_URL = encodeURIComponent("http://localhost:8080/auth/naver/callback");

    const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`;

    window.location.href = naverAuthUrl;
}

