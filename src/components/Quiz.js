import React, { useEffect, useState } from 'react';

import './quiz.css';

import frontend from '../api/frontend';
import QuestionAns from './QuestionAns';

const Quiz = () => {
  const [result, setResult] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const frontendUi = async () => {
      const response = await frontend.get('/tasks');
      setResult(response.data.task_array);
      console.log(response.data.task_array);
    };
    frontendUi();
  }, []);

  const onClickHandler = () => {
    setIsActive(true);
    // console.log(childRef);
    // childRef.current.onClickHandler();
  };

  // console.log(result);

  return isActive ? (
    <div className="my_rect">
      <QuestionAns apiResult={result} />
    </div>
  ) : (
    <div className="my_rect">
      <button className="QButton" onClick={onClickHandler}>
        <span className="QText">Start</span>
      </button>
    </div>
  );
};
export default Quiz;
