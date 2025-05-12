import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SettingPage from './pages/SettingPage';
import HistoryPage from './pages/HistoryPage';
import GoogleCallbackPage from './pages/GoogleCallbackPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/auth/google/callback" element={<GoogleCallbackPage />} />
      </Routes>
    </Router>
  );
}

export default App;
