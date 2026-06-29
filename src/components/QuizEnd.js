import React, { useState, useEffect } from 'react';
import './app.css';
import './quizEnd.css';

const QuizEnd = ({ timeTaken, rightAns, totalQuestions, answersLog, onRestart, onQuit }) => {
  const accuracy = Math.ceil((rightAns / totalQuestions) * 100);
  const avgSpeed = Math.floor(timeTaken / totalQuestions);
  const score = rightAns * 100;

  const [openItems, setOpenItems] = useState({});

  useEffect(() => {
    // Save state statistics to local storage
    const prevPlayed = parseInt(localStorage.getItem('quiz_games_played') || '0', 10);
    const prevHighScore = parseInt(localStorage.getItem('quiz_high_score') || '0', 10);
    const prevAccuracy = parseInt(localStorage.getItem('quiz_avg_accuracy') || '0', 10);

    localStorage.setItem('quiz_games_played', prevPlayed + 1);
    
    if (score > prevHighScore) {
      localStorage.setItem('quiz_high_score', score);
    }

    const calculatedAccuracy = prevPlayed === 0 
      ? accuracy 
      : Math.round(((prevAccuracy * prevPlayed) + accuracy) / (prevPlayed + 1));
      
    localStorage.setItem('quiz_avg_accuracy', calculatedAccuracy);
  }, [accuracy, score]);

  const toggleItem = (idx) => {
    setOpenItems((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const getPerformanceMessage = (acc) => {
    if (acc === 100) return { title: '🏆 Legendary Performance!', sub: 'Perfect score! You are a master.' };
    if (acc >= 80) return { title: '🔥 Outstanding Job!', sub: 'Fantastic work! You know your stuff.' };
    if (acc >= 50) return { title: '⚡ Great Effort!', sub: 'Good job! Keep practicing to improve.' };
    return { title: '📚 Keep Practicing!', sub: 'Study hard and try again. You can do it!' };
  };

  const msg = getPerformanceMessage(accuracy);

  return (
    <div className="results-container glass-panel anim-pop">
      <div className="results-header">
        <h2 className="performance-title">{msg.title}</h2>
        <p className="performance-subtitle">{msg.sub}</p>
      </div>

      {/* Accuracy Wheel Dial SVG */}
      <div className="dial-wrapper">
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle success-stroke"
            strokeDasharray={`${accuracy}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <defs>
            <linearGradient id="cyan-purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-cyan)" />
              <stop offset="100%" stopColor="var(--accent-purple)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="dial-percentage">
          {accuracy}%
          <span>ACCURACY</span>
        </div>
      </div>

      {/* Stats cards breakdown */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-card-icon">⭐</span>
          <span className="stat-card-value">{score}</span>
          <span className="stat-card-label">Total Score</span>
        </div>
        <div className="stat-card">
          <span className="stat-card-icon">⏱️</span>
          <span className="stat-card-value">{timeTaken}s</span>
          <span className="stat-card-label">Total Time</span>
        </div>
        <div className="stat-card">
          <span className="stat-card-icon">⚡</span>
          <span className="stat-card-value">{avgSpeed}s</span>
          <span className="stat-card-label">Avg Speed / Q</span>
        </div>
      </div>

      {/* Review details collapsible section */}
      {answersLog && answersLog.length > 0 && (
        <div className="review-section">
          <h3 className="review-section-title">Review Answers</h3>
          <div className="review-list">
            {answersLog.map((log, idx) => {
              const isOpen = !!openItems[idx];
              return (
                <div key={idx} className={`review-item ${isOpen ? 'open' : ''}`}>
                  <div className="review-header" onClick={() => toggleItem(idx)}>
                    <div className="review-header-left">
                      <span className={`review-status-indicator ${log.isCorrect ? 'correct' : 'incorrect'}`}>
                        {log.isCorrect ? '✓' : '✗'}
                      </span>
                      <span>{log.question}</span>
                    </div>
                    <span className="review-chevron">▼</span>
                  </div>

                  {isOpen && (
                    <div className="review-content">
                      <div className="answer-comparison">
                        <div className="answer-pill user-ans">
                          <span>Your Answer</span>
                          {log.userAnswer}
                        </div>
                        <div className="answer-pill correct-ans">
                          <span>Correct Answer</span>
                          {log.correctAnswer}
                        </div>
                      </div>
                      <div className="review-explanation">
                        <strong>Explanation:</strong> {log.explanation}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Actions buttons */}
      <div className="results-actions">
        <button className="QButton" onClick={onRestart}>
          PLAY AGAIN
        </button>
        <button className="QButton btn-secondary" onClick={onQuit}>
          MAIN MENU
        </button>
      </div>
    </div>
  );
};

export default QuizEnd;
