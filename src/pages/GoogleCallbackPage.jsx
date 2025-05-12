import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GoogleCallbackPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const hash = window.location.hash;
        const tokenMatch = hash.match(/firebase_token=([^&]+)/);
        const tokenFromQuery = tokenMatch ? tokenMatch[1] : null;

        console.log("✅ parsed token:", tokenFromQuery);

        if (tokenFromQuery) {
            if (!localStorage.getItem('token')) {
                localStorage.setItem('token', tokenFromQuery);
            }
            navigate('/home');
        }
    }, [navigate]);


    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h3>구글 로그인 처리 중입니다...</h3>
        </div>
    );
}

export default GoogleCallbackPage;
