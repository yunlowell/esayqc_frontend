import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function GoogleCallbackPage() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const code = params.get("code");
        const state = params.get("state");  // 원래 redirect 주소

        if (code && state) {
            fetch("http://13.125.173.58:8000/auth/google/callback", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    code,
                    redirect: state
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log("✅ firebase_token 응답:", data);
                if (data.firebase_token) {
                    localStorage.setItem("token", data.firebase_token);
                    navigate("/home");
                }
            })
            .catch(err => {
                console.error("구글 로그인 실패:", err);
            });
        }
    }, [location, navigate]);

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h3>구글 로그인 처리 중입니다...</h3>
        </div>
    );
}

export default GoogleCallbackPage;
