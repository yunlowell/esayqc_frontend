import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';
// import googleLogo from '../assets/google_logo.png';

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.access_token);
                alert('로그인 성공');
                navigate('/home');
            } else {
                alert(data.detail || '로그인 실패');
            }
        } catch (err) {
            console.error(err);
            alert('서버 오류');
        }
    };

    const handleGoogleLogin = () => {
        const redirectURL = encodeURIComponent('https://13.125.173.58.nip.io/auth/google/callback');
        window.location.href = `https://13.125.173.58.nip.io/auth/google/login?redirect=${redirectURL}`;
    };

    return (
        <div style={styles.container}>
            <h2>로그인</h2>
            <form onSubmit={handleLogin} style={styles.form}>
                <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
                <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
                <button type="submit" style={styles.button}>로그인</button>
            </form>

            <div style={styles.googleLogin}>
                <button style={styles.googleButton} onClick={handleGoogleLogin}>
                    google 로그인
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: { padding: '40px', textAlign: 'center' },
    form: { display: 'flex', flexDirection: 'column', gap: '10px', width: '300px', margin: '0 auto' },
    input: { padding: '10px' },
    button: { padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none' },
    googleLogin: { marginTop: '20px' },
    googleButton: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '10px', border: '1px solid #ccc' },
    googleIcon: { width: '20px', height: '20px' },
};

export default LoginPage;
