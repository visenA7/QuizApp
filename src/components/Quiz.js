import React, { useEffect, useState } from 'react';
import './quiz.css';
import { getQuestions } from '../api/frontend';
import QuestionAns from './QuestionAns';

const Quiz = ({ category, difficulty, onQuit }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      const allQuestions = await getQuestions();
      
      // Filter questions based on selected category and difficulty
      let filtered = allQuestions.filter(
        (q) => 
          q.category.toLowerCase() === category.toLowerCase() && 
          q.difficulty.toLowerCase() === difficulty.toLowerCase()
      );
      
      // If we don't find enough matches for that specific difficulty, try category match only
      if (filtered.length === 0) {
        filtered = allQuestions.filter(
          (q) => q.category.toLowerCase() === category.toLowerCase()
        );
      }
      
      // Shuffle filtered array and take at most 6 questions
      const shuffled = [...filtered].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 6);
      
      // Fallback in case of empty questions list
      if (selected.length === 0) {
        // Just take the first 6 of all questions
        setQuestions(allQuestions.slice(0, 6));
      } else {
        setQuestions(selected);
      }
      
      setLoading(false);
    };
    
    loadQuestions();
  }, [category, difficulty]);

  if (loading) {
    return (
      <div className="welcome-container anim-fade flex-center" style={{ minHeight: '60vh' }}>
        <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px' }}>Preparing Your Quiz...</h2>
          <div className="timer-icon" style={{ fontSize: '40px', animation: 'pulseWarning 1s infinite alternate' }}>⚡</div>
        </div>
      </div>
    );
  }

  return (
    <div className="game-container">
      <QuestionAns apiResult={questions} onQuit={onQuit} />
    </div>
  );
};

export default Quiz;
