import React, { useState } from 'react';
import MainPage from './MainPage';
import Quiz from './Quiz';
import './app.css';

const App = () => {
  const [gameState, setGameState] = useState('landing'); // 'landing' | 'quiz'
  const [category, setCategory] = useState('JavaScript Master');
  const [difficulty, setDifficulty] = useState('Medium');

  const startQuiz = (selectedCategory, selectedDifficulty) => {
    setCategory(selectedCategory);
    setDifficulty(selectedDifficulty);
    setGameState('quiz');
  };

  const quitQuiz = () => {
    setGameState('landing');
  };

  return (
    <div className="app-root">
      {gameState === 'landing' ? (
        <MainPage onStart={startQuiz} />
      ) : (
        <Quiz 
          category={category} 
          difficulty={difficulty} 
          onQuit={quitQuiz} 
        />
      )}
      
      {/* Decorative background glows */}
      <div className="glowing-orb orb-left"></div>
      <div className="glowing-orb orb-right"></div>
    </div>
  );
};

export default App;
