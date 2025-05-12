import { useNavigate } from 'react-router-dom';

function HistoryPage() {
    const navigate = useNavigate();

    // 예시 데이터 (나중에 API로 대체 가능)
    const historyList = [
        {
            id: '1',
            time: '2025-05-02 14:00',
            standard: '10.0mm',
            measured: '20.0mm',
            tolerance: '±5.0mm',
            result: '합격',
        },
        {
            id: '2',
            time: '2025-05-01 09:30',
            standard: '15.0mm',
            measured: '35.0mm',
            tolerance: '±3.0mm',
            result: '불합격',
        },
    ];

    return (
        <div style={styles.container}>
            <h2 style={styles.title}> 계측 히스토리</h2>
            {historyList.map((item) => (
                <div
                    key={item.id}
                    style={styles.card}
                    onClick={() => navigate(`/history/${item.id}`)}
                >
                    <p><strong>계측 시간:</strong> {item.time}</p>
                    <p><strong>계측 기준 길이:</strong> {item.standard}</p>
                    <p><strong>계측값:</strong> {item.measured}</p>
                    <p><strong>계측 오차범위:</strong> {item.tolerance}</p>
                    <p><strong>결과:</strong> {item.result}</p>
                </div>
            ))}
        </div>
    );
}

const styles = {
    container: {
        padding: '30px',
        background: 'linear-gradient(to bottom, #ffffff, #cce0f5)',
        minHeight: '100vh',
    },
    title: {
        textAlign: 'center',
        fontSize: '2rem',
        marginBottom: '20px',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '20px',
        margin: '20px auto',
        width: '90%',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        cursor: 'pointer',
    },
};

export default HistoryPage;
