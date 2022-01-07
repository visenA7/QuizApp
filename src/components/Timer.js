import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';

import './timer.css';

const Timer = forwardRef((props, ref) => {
  const [isActive, setIsActive] = useState(true);
  const [sec, setSec] = useState('00');
  const [min, setMin] = useState('00');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        const second = counter % 60;
        const minute = Math.floor(counter / 60);

        let seconds = String(second).length === 1 ? `0${second}` : second;

        let minutes = String(minute).length === 1 ? `0${minute}` : minute;

        setSec(seconds);
        setMin(minutes);
        setCounter((counter) => counter + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, sec, counter]);

  useImperativeHandle(ref, () => ({
    onStartHandler,
    onPauseHandler,
    onReset,
  }));
  const onStartHandler = () => {
    setIsActive(true);
  };
  const onPauseHandler = () => {
    setIsActive(false);
    props.timeValue(parseInt(min), parseInt(sec));
  };

  const onReset = () => {
    setIsActive(false);
    setCounter(0);
    setMin('00');
    setSec('00');
  };

  return (
    <div className="box">
      <div className="time">
        <span>{min} </span>
        <span> : {sec}</span>
        <p className="text">Min Sec</p>
      </div>
      {/* <div>
        <button onClick={onStartHandler}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={onReset}>Reset</button>
      </div> */}
    </div>
  );
});

export default Timer;
