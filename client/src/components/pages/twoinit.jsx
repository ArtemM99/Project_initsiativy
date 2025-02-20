import React from 'react';
import './twoinit.css'; 

const TwoInit = () => {
  return (
    <div className="container">
      <header className="header">
        <nav>
          <ul>
            <li><a href="/login">Вход</a></li>
            <li><a href="/register">Регистрация</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <div className="initiative-box">
          <div className="initiative-title">
            <h2>Название инициативы</h2>
          </div>
          <div className="initiative-image">
            <img src="path/to/image.jpg" alt="Инициатива" />
          </div>
          <div className="initiative-description">
            <p>
              Подробное описание с мотивацией. Здесь можно добавить текст, который будет
              объяснять, почему эта инициатива важна и какие цели она преследует.
            </p>
            <p><strong>Количество проголосовавших:</strong> 120</p>
            <p><strong>Процент голосов "ЗА":</strong> 75%</p>
            <p><strong>Срок окончания голосования:</strong> 30.12.2025</p>
            <p><strong>Уровень инициативы:</strong> Региональный</p>
            <a className="author-link" href="/initiatives/author">Все инициативы данного автора</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TwoInit; 
