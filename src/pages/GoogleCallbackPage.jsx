import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function GoogleCallbackPage() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.slice(1));
        const token = hashParams.get("firebase_token");

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
