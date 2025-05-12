import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function GoogleCallbackPage() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log("🔍 hash:", window.location.hash);
        const fullHash = window.location.hash;
        const tokenMatch = fullHash.match(/firebase_token=([^&]+)/);
        const token = tokenMatch ? tokenMatch[1] : null;

        if (token) {
            console.log("✅ firebase_token:", token);
            localStorage.setItem("token", token);
            navigate("/home");
        } else {
            console.warn("❌ firebase_token 없음");
        }
    }, []);


    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h3>구글 로그인 처리 중입니다...</h3>
        </div>
    );
}

export default GoogleCallbackPage;
