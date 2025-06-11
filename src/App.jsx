import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

// Компоненты страниц и виджетов
import Home from './pages/Home';
import MainPage from './components/MainPage';
import Login from './components/Login';
import EarthData from './components/EarthData';
import RegistrationModal from "./components/RegistrationModal";
import ProfileHeader from './components/ProfileHeader';
import Chat from './components/Chat';
import AgroFarmPage from './components/AgroFarmPage';
import Map from './components/Map';
import IntroModal from './components/IntroModal'; // путь к компоненту



// Пример компонента AgroDashboard с данными от API (погода/почва)
function AgroDashboard() {
  const [mode, setMode] = useState('weather');
  const [weather, setWeather] = useState(null);
  const [soil, setSoil] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = () => {
    // Здесь можно добавить ID и корректный endpoint
    setLoading(true);
    setError('');
    axios
      .get(`http://localhost:8080/api/${mode}/yourPolygonIdHere`)
      .then((res) => {
        if (mode === 'weather') {
          setWeather(res.data);
          setSoil(null);
        } else {
          setSoil(res.data);
          setWeather(null);
        }
      })
      .catch(() => setError('Ошибка при загрузке данных'))
      .finally(() => setLoading(false));
  };

  const kelvinToCelsius = (k) => (k - 273.15).toFixed(1);

  return (
    <div
      style={{
        width: '100%',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
      }}
    >
      <div style={{ gap: 30, display: 'flex' }}>
        <div style={{ flex: '1 1 auto', minWidth: 320 }}>
          {weather && (
            <div
              style={{
                marginTop: 20,
                border: '1px solid #ccc',
                padding: 15,
                borderRadius: 8,
              }}
            >
              <h2>🌦️ Текущая погода</h2>
              <p>Температура: {weather.main.temp} °C</p>
              <p>Ощущается как: {weather.main.feels_like} °C</p>
              <p>Облачность: {weather.weather[0].description}</p>
              <p>Давление: {weather.main.pressure} гПа</p>
              <p>Влажность: {weather.main.humidity} %</p>
              <p>
                Ветер: {weather.wind.speed} м/с, направление: {weather.wind.deg}°
              </p>
              <p>Видимость: {weather.visibility / 1000} км</p>
            </div>
          )}

          {soil && (
            <div
              style={{
                marginTop: 20,
                border: '1px solid #8b4513',
                padding: 15,
                borderRadius: 8,
                backgroundColor: '#f5f5dc',
              }}
            >
              <h2>🌱 Состояние почвы</h2>
              <p>Температура на глубине 10 см: {kelvinToCelsius(soil.t10)} °C</p>
              <p>Температура поверхности (t0): {kelvinToCelsius(soil.t0)} °C</p>
              <p>Влажность почвы: {soil.humidity} %</p>
            </div>
          )}
        </div>

        <div
          style={{
            width: '100%',
            height: 600,
            borderRadius: 8,
            overflow: 'hidden',
            boxShadow: '0 0 12px rgba(0,0,0,0.1)',
            flex: '1 1 60%',
          }}
        >
          <Map />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);
  const [exited, setExited] = useState(false);

  // При нажатии "Продолжить" сначала скрывается IntroModal, затем показывается окно регистрации
  const handleContinue = () => {
    setShowIntro(false);
    setShowRegistration(true);
  };

  // При выходе скрываем и IntroModal, и RegistrationModal
  const handleExit = () => {
    setExited(true);
    setShowIntro(false);
    setShowRegistration(false);
  };

  const handleRegistrationSuccess = () => {
    setShowRegistration(false);
  };

  const handleSettingsClick = () => {
    alert('Открыть настройки пользователя');
  };

  return (
    <Router>
      {exited ? (
        // Если пользователь нажал «выход», можно показать другое сообщение или экран
        <IntroModal exited={true} />
      ) : showIntro ? (
        // Показываем стартовый IntroModal
        <IntroModal onContinue={handleContinue} onExit={handleExit} exited={false} />
      ) : showRegistration ? (
        // Если требуется регистрация, показываем RegistrationModal
        <RegistrationModal onSuccess={handleRegistrationSuccess} />
      ) : (
        // Основное приложение: навигация и маршруты
        <>
          <ProfileHeader onSettingsClick={handleSettingsClick} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<AgroDashboard />} />
            <Route path="/earthdata" element={<EarthData />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/farm" element={<AgroFarmPage />} />
            <Route path="/register" element={<RegistrationModal />} />
            <Route path="/intro-modal" element={<IntroModal />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
