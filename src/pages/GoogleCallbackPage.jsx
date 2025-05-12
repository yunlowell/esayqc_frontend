import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function GoogleCallbackPage() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // 1. 쿼리 파라미터에서 firebase_token 추출
        const queryParams = new URLSearchParams(location.search);
        const tokenFromQuery = queryParams.get("firebase_token");

        // 2. 또는 해시에서 추출
        const hashParams = new URLSearchParams(window.location.hash.slice(1));
        const tokenFromHash = hashParams.get("firebase_token");

        const token = tokenFromQuery || tokenFromHash;
        console.log("✅ Final parsed firebase_token:", token);

        if (token) {
            localStorage.setItem("token", token);
            navigate('/home');
        }
    }, [location, navigate]);

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h3>구글 로그인 처리 중입니다...</h3>
        </div>
    );
}

export default GoogleCallbackPage;
