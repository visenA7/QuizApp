import React, { useState, useEffect } from 'react';
import './app.css';
import './quiz.css';

const categories = [
  { id: 'JavaScript Master', name: 'JavaScript Master', icon: '⚡', desc: 'Scope, closures, event loop, and tricky coercion.' },
  { id: 'React Essentials', name: 'React Essentials', icon: '⚛️', desc: 'Hooks, lifecycles, state updates, and Context API.' },
  { id: 'CSS & Web Design', name: 'CSS & Web Design', icon: '🎨', desc: 'Box model, layout grids, animations, and typography.' },
  { id: 'AI & Python Basics', name: 'AI & Python Basics', icon: '🤖', desc: 'Lists, structures, ML principles, and networks.' }
];

const MainPage = ({ onStart }) => {
  const [selectedCategory, setSelectedCategory] = useState('JavaScript Master');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Medium');
  const [stats, setStats] = useState({ highScore: 0, gamesPlayed: 0, avgAccuracy: 0 });

  useEffect(() => {
    // Load dashboard metrics from localStorage
    const highScore = parseInt(localStorage.getItem('quiz_high_score') || '0', 10);
    const gamesPlayed = parseInt(localStorage.getItem('quiz_games_played') || '0', 10);
    const avgAccuracy = parseInt(localStorage.getItem('quiz_avg_accuracy') || '0', 10);
    
    setStats({ highScore, gamesPlayed, avgAccuracy });
  }, []);

  const handleStart = () => {
    onStart(selectedCategory, selectedDifficulty);
  };

  return (
    <div>
      <div className="fullNav">
        <div className="container">
          <a href="/">
            <img
              src={require('../UI/logo.png')}
              alt="Company Logo"
              className="logoCompany"
            />
          </a>
          <nav className="navBar">
            <ul>
              <li>
                <a href="/">Programs</a>
              </li>
              <li>
                <a href="/">Live Projects</a>
              </li>
              <li>
                <a href="/">Community</a>
              </li>
              <li>
                <a href="/">Jobs</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="welcome-container anim-fade">
        <div className="welcome-header">
          <h1>Modern Tech Quiz</h1>
          <p>Choose a category, select your difficulty, and test your knowledge!</p>
        </div>

        <div className="quiz-setup-card glass-panel anim-pop">
          {/* Categories */}
          <div className="section-title">
            <span>🏷️</span> Choose Category
          </div>
          <div className="category-grid">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`category-card ${selectedCategory === cat.id ? 'selected' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <div className="category-icon-wrapper">
                  {cat.icon}
                </div>
                <div className="category-info">
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Difficulty */}
          <div className="section-title">
            <span>⚙️</span> Choose Difficulty
          </div>
          <div className="difficulty-selector">
            {['Easy', 'Medium', 'Hard'].map((diff) => (
              <button
                key={diff}
                className={`difficulty-btn ${selectedDifficulty === diff ? 'selected' : ''}`}
                onClick={() => setSelectedDifficulty(diff)}
              >
                {diff}
              </button>
            ))}
          </div>

          {/* Start Actions */}
          <div className="start-actions">
            <button className="QButton" onClick={handleStart}>
              START QUIZ
            </button>
          </div>
        </div>

        {/* Local Stats dashboard */}
        <div className="stats-preview glass-panel">
          <div className="stat-item">
            <span>🔥 HIGH SCORE</span>
            <h3>{stats.highScore} pts</h3>
          </div>
          <div className="stat-item">
            <span>🎮 PLAYED</span>
            <h3>{stats.gamesPlayed}</h3>
          </div>
          <div className="stat-item">
            <span>🎯 ACCURACY</span>
            <h3>{stats.avgAccuracy}%</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
