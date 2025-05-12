import { useState } from 'react';

function SettingPage() {
    const [standardLength, setStandardLength] = useState('');
    const [tolerance, setTolerance] = useState('');
    const [unit, setUnit] = useState('');
    const [reserve1, setReserve1] = useState('');
    const [reserve2, setReserve2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // 예시: 값 콘솔에 출력 (나중에 API 연동 가능)
        console.log({
            standardLength,
            tolerance,
            unit,
            reserve1,
            reserve2,
        });

        alert('기준값이 저장되었습니다.');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>계측 기준 설정</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>
                    기준 길이 입력
                    <input
                        type="text"
                        placeholder="ex) 10.3"
                        value={standardLength}
                        onChange={(e) => setStandardLength(e.target.value)}
                        style={styles.input}
                    />
                </label>

                <label style={styles.label}>
                    허용 오차 입력
                    <input
                        type="text"
                        placeholder="ex) 5"
                        value={tolerance}
                        onChange={(e) => setTolerance(e.target.value)}
                        style={styles.input}
                    />
                </label>

                <label style={styles.label}>
                    측정 단위 입력
                    <input
                        type="text"
                        placeholder="ex) mm, cm"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        style={styles.input}
                    />
                </label>

                <label style={styles.label}>
                    예비 세팅 입력
                    <input
                        type="text"
                        placeholder="값 입력"
                        value={reserve1}
                        onChange={(e) => setReserve1(e.target.value)}
                        style={styles.input}
                    />
                </label>

                <label style={styles.label}>
                    예비 세팅 입력
                    <input
                        type="text"
                        placeholder="값 입력"
                        value={reserve2}
                        onChange={(e) => setReserve2(e.target.value)}
                        style={styles.input}
                    />
                </label>

                <button type="submit" style={styles.button}>입력 완료</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        height: '100vh',
        background: 'linear-gradient(to bottom, #ffffff, #cce0f5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '60px',
    },
    title: {
        fontSize: '1.8rem',
        marginBottom: '20px',
    },
    form: {
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
    label: {
        fontWeight: 'bold',
        fontSize: '0.9rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '1rem',
    },
    button: {
        marginTop: '10px',
        padding: '12px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        fontSize: '1rem',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default SettingPage;
