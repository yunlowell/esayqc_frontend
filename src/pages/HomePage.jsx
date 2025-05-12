import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>홈</h2>
            <div style={styles.menuContainer}>
                <button style={styles.menuButton} onClick={() => navigate('/setting')}>
                    측정 값 설정
                </button>
                <button style={styles.menuButton} onClick={() => navigate('/history')}>
                    계측 히스토리
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        height: '100vh',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '80px',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '2rem',
    },
    menuContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    menuButton: {
        width: '200px',
        padding: '15px',
        fontSize: '1.2rem',
        border: 'none',
        borderRadius: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
    },
};

export default HomePage;
