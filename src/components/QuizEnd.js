import React from 'react';
import './quizEnd.css';

const QuizEnd = (props) => {
  const accuracy = Math.ceil((props.rightAns / 6) * 100);
  const avgSpeed = Math.floor(props.timeTaken / 6);

  return (
    <div className="flex">
      <div className="outer">
        <div className="innerL">
          <span>{accuracy}</span>
          <h3>Accuracy</h3>
        </div>
        <div className="innerR">
          <span>{`${avgSpeed}s`}</span>
          <h3>Avg Speed</h3>
        </div>
      </div>
      <button
        className="QButton"
        onClick={() => {
          props.count(0);
          props.restart(!true);
        }}
      >
        Play Again
      </button>
    </div>
  );
};

export default QuizEnd;
