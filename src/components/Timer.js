import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import './timer.css';

const Timer = forwardRef((props, ref) => {
  const { duration = 20, onTimeout, timeValue } = props;
  const [counter, setCounter] = useState(duration);
  const [isActive, setIsActive] = useState(true);

  // Sync ref to avoid stale closure warning inside useEffect
  const onTimeoutRef = useRef(onTimeout);
  useEffect(() => {
    onTimeoutRef.current = onTimeout;
  }, [onTimeout]);

  useEffect(() => {
    let intervalId;
    if (isActive && counter > 0) {
      intervalId = setInterval(() => {
        setCounter((c) => c - 1);
      }, 1000);
    } else if (counter === 0 && isActive) {
      setIsActive(false);
      if (onTimeoutRef.current) {
        onTimeoutRef.current();
      }
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, counter]);

  useImperativeHandle(ref, () => ({
    onStartHandler: () => {
      setIsActive(true);
    },
    onPauseHandler: () => {
      setIsActive(false);
      if (timeValue) {
        const elapsed = duration - counter;
        timeValue(0, elapsed);
      }
    },
    onReset: () => {
      setCounter(duration);
      setIsActive(false);
    },
  }));

  const formatTime = (secs) => {
    const s = secs % 60;
    const m = Math.floor(secs / 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const isWarning = counter <= 5;

  return (
    <div className={`timer-container ${isWarning ? 'warning' : ''}`}>
      <span className="timer-icon">⏱️</span>
      <span className="timer-text">{formatTime(counter)}</span>
    </div>
  );
});

export default Timer;
