import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function GoogleCallbackPage() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.hash.slice(1));  // 해시에서 추출
        const token = params.get("firebase_token");

        console.log("✅ 최종 받은 firebase_token:", token);

        if (token) {
            localStorage.setItem("token", token);
            navigate("/home");
        }
    }, [location, navigate]);

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h3>구글 로그인 처리 중입니다...</h3>
        </div>
    );
}

export default GoogleCallbackPage;
