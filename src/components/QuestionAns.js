// import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import AnimationData from './AnimationData';
import Timer from './Timer';
import './QuestionAns.css';
import QuizEnd from './QuizEnd';

const QuestionAns = ({ apiResult }) => {
  const [answer, setAnswer] = useState('');
  const [count, setCount] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [rightAns, setRightAns] = useState(0);
  const [contentA, setContentA] = useState(null);
  const [isAnim, setIsAnim] = useState(null);
  const childRef = useRef();
  const currentRef = useRef();

  useEffect(() => {
    if (childRef.current === undefined) {
      return;
    } else {
      childRef.current.onStartHandler();
      setAnswer('');
      currentRef.current.focus();
    }
  }, [count]);

  const onSubmitHandler = (event, item) => {
    event.preventDefault();
    // console.log(totalTime);

    childRef.current.onPauseHandler();

    if (count < 5) {
      if (item.answer.toLowerCase() === answer.toLowerCase()) {
        setContentA(true);
        setIsAnim(true);
        setTimeout(5000);
        setRightAns(rightAns + 1);
      } else {
        setContentA(false);
        setIsAnim(true);
        setTimeout(5000);
      }
      setCount(count + 1);
    } else {
      setIsEnd(true);
    }
  };

  const timeValue = (minute, second) => {
    setTotalTime(minute * 60 + second);
  };

  const onSolutionClick = (item) => {
    const Answer = item.answer;
    alert(Answer);
    setCount(count + 1);
  };

  const renderResult = () => {
    return apiResult.map((item, index) => {
      return (
        <div key={item._id} className="card">
          <div className="bodyUp">
            <span>Topic</span>
            <h3>{item.category}</h3>
          </div>
          <div className="bodyMid">
            <span>Question {index + 1} of 6</span>
            <h3>{item.question}</h3>
          </div>
          <div className="bodyDn">
            <form onSubmit={(event) => onSubmitHandler(event, item)}>
              <label>ANSWER</label>
              <input
                type="text"
                placeholder="Type here"
                ref={currentRef}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              ></input>
            </form>
            <p>Stuck ?</p>
            <button
              className="SButton"
              onClick={() => {
                onSolutionClick(item);
              }}
            >
              <i className="SText">See Solution</i>
            </button>
          </div>
        </div>
      );
    });
  };

  const renderedList = renderResult();
  const quizRun = (
    <div className="slide">
      <div>{renderedList[count]}</div>
      <Timer ref={childRef} timeValue={timeValue} />
      {isAnim ? (
        <div className={`${contentA ? 'win' : 'lose'}`}>
          <AnimationData result={contentA} className="icon" />
        </div>
      ) : null}
    </div>
  );

  // console.log(contentA);

  return isEnd ? (
    <QuizEnd
      timeTaken={totalTime}
      rightAns={rightAns}
      restart={setIsEnd}
      count={setCount}
    />
  ) : (
    <React.Fragment>{quizRun}</React.Fragment>
  );
};

export default QuestionAns;
