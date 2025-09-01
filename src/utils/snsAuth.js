Kakao.init('${JAVASCRIPT_KEY}');  // 사용하려는 앱의 JavaScript 키 입력

function loginWithKakao() {
    Kakao.Auth.authorize({
        redirectUri: '${REDIRECT_URI}',  // 앱에 등록된 Redirect URI 입력
    });
}

displayToken();
function displayToken() {
    var token = getCookie('authorize-access-token');

    if (token) {
        Kakao.Auth.setAccessToken(token);
        Kakao.Auth.getStatusInfo()
            .then(function (res) {
                if (res.status === 'connected') {
                    document.getElementById('token-result').innerText =
                        'login success, token: ' + Kakao.Auth.getAccessToken();
                }
            })
            .catch(function (err) {
                Kakao.Auth.setAccessToken(null);
            });
    }
}

function getCookie(name) {
    var parts = document.cookie.split(name + '=');
    if (parts.length === 2) {
        return parts[1].split(';')[0];
    }
}
