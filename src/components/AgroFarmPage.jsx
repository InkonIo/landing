import React from 'react';
import './IntroModal.css';

export default function AgroFarmPage() {
  return (
    <div className="container">
      <header className="header">
        <h1>AgroFarm для тепличных хозяйств</h1>
        <h2>FarmMedEx — инновационная AI-компания</h2>
      </header>

      <section className="section">
        <h3>Искусственный интеллект и нейросотрудники</h3>
        <p>Автоматизация бизнес-процессов. Цифровизация медицины и сельского хозяйства.</p>
        <p>Smart-инфраструктура для теплиц и агробизнеса.</p>
        <p>
          <strong>Наша миссия:</strong> Соединять технологии и практику для создания пользы.
        </p>
      </section>

      <section className="section">
        <h3>Что вы получите:</h3>
        <ul>
          <li>
            <strong>Умные датчики:</strong> температура, влажность, CO₂, свет, pH почвы
          </li>
          <li>
            <strong>ИИ агроном:</strong> подсказывает когда поливать, чем удобрять, как спасти и увеличить урожай
          </li>
          <li>
            <strong>Автоматизация:</strong> полив, вентиляция, освещение — включаются сами
          </li>
          <li>Прогноз погоды интегрирован в систему</li>
        </ul>
      </section>

      <section className="section">
        <h3>Основные проблемы хозяйств</h3>
        <ul>
          <li>Недостаток прозрачной аналитики</li>
          <li>Высокие затраты на воду, свет, отопление</li>
          <li>Потери урожая из-за отклонений микроклимата</li>
          <li>Зависимость от человеческого фактора</li>
          <li>Сложность оперативного управления</li>
        </ul>
      </section>

      <section className="section">
        <h3>Прогресс за сезон (до/после)</h3>
        <p>Попробуйте без риска — и сами увидите результат</p>
        <p>
          <strong>Бесплатная диагностика вашей теплицы</strong>
        </p>
        <p>Установка пилотного комплекта на 14 дней</p>
        <p>После теста — расширение под ваш бюджет</p>
        <p>Гибкие планы оплаты и поддержки</p>
      </section>

      <footer className="footer">
        <p>+7 (708) 929-29-85 | +7 (778) 678-90-36</p>
        <p>info@farmmedex.kz</p>
        <p>
          <a href="https://farmmedex.kz" target="_blank" rel="noreferrer">
            farmmedex.kz
          </a>
        </p>
        <p>Казахстан, г. Алматы, улица Басенова 27А, 050060</p>
      </footer>
    </div>
  );
}
