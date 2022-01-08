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
    <div className="showcase card">
      <QuestionAns apiResult={result} />
    </div>
  ) : (
    <div className="showcase flex card">
      <button className="QButton" onClick={onClickHandler}>
        Start
      </button>
    </div>
  );
};
export default Quiz;
