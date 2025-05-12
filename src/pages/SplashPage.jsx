import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SplashPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login');
        }, 3000); // 3초 후 이동

        return () => clearTimeout(timer); // 컴포넌트 unmount 시 타이머 제거
    }, [navigate]);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>EasyQC</h1>
            <p style={styles.subtitle}>로딩 중...</p>
        </div>
    );
}

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c34',
        color: 'white',
    },
    title: {
        fontSize: '3rem',
        fontWeight: 'bold',
    },
    subtitle: {
        marginTop: '1rem',
        fontSize: '1.2rem',
    },
};

export default SplashPage;
