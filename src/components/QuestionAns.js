import React, { useRef, useState, useEffect } from 'react';
import AnimationData from './AnimationData';
import Timer from './Timer';
import QuizEnd from './QuizEnd';
import './QuestionAns.css';

const QuestionAns = ({ apiResult, onQuit }) => {
  const [answer, setAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [count, setCount] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [rightAns, setRightAns] = useState(0);
  const [contentA, setContentA] = useState(null);
  const [isAnim, setIsAnim] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [answersLog, setAnswersLog] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const childRef = useRef();
  const currentRef = useRef();

  const totalQuestions = apiResult.length;
  const currentQuestion = apiResult[count];

  useEffect(() => {
    setAnswer('');
    setSelectedOption('');
    setIsSubmitted(false);
    setContentA(null);
    setIsAnim(false);
    
    if (currentRef.current) {
      currentRef.current.disabled = false;
      currentRef.current.focus();
    }
  }, [count, apiResult]);

  const submitAnswer = (userAns) => {
    if (isSubmitted) return;
    setIsSubmitted(true);

    if (childRef.current) {
      childRef.current.onPauseHandler();
    }

    const isCorrect = userAns.trim().toLowerCase() === currentQuestion.answer.trim().toLowerCase();
    setContentA(isCorrect);
    setIsAnim(true);

    // Save user choice to answers log for review screen
    setAnswersLog((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        userAnswer: userAns || "(No Answer)",
        correctAnswer: currentQuestion.answer,
        isCorrect: isCorrect,
        explanation: currentQuestion.explanation || "No explanation provided.",
        hint: currentQuestion.hint || "No hint available."
      }
    ]);

    if (isCorrect) {
      setRightAns((prev) => prev + 1);
    }

    setTimeout(() => {
      setIsAnim(false);
      setIsSubmitted(false);
      
      if (count + 1 < totalQuestions) {
        setCount((prev) => prev + 1);
        if (childRef.current) {
          childRef.current.onReset();
          childRef.current.onStartHandler();
        }
      } else {
        setIsEnd(true);
      }
    }, 3000);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const finalAnswer = currentQuestion.options ? selectedOption : answer;
    submitAnswer(finalAnswer);
  };

  const handleOptionClick = (option) => {
    if (isSubmitted) return;
    setSelectedOption(option);
  };

  // Timer callbacks
  const timeValue = (minute, second) => {
    // Accumulate total elapsed time
    setTotalTime((prev) => prev + (minute * 60 + second));
  };

  const handleTimeout = () => {
    // Auto submit empty/wrong answer when countdown reaches zero
    const finalAnswer = currentQuestion.options ? selectedOption : answer;
    submitAnswer(finalAnswer || "(Timed Out)");
  };

  if (isEnd) {
    return (
      <QuizEnd
        timeTaken={totalTime}
        rightAns={rightAns}
        totalQuestions={totalQuestions}
        answersLog={answersLog}
        onRestart={() => {
          setCount(0);
          setTotalTime(0);
          setRightAns(0);
          setAnswersLog([]);
          setIsEnd(false);
          setIsSubmitted(false);
        }}
        onQuit={onQuit}
      />
    );
  }

  if (!currentQuestion) return null;

  const isMCQ = !!currentQuestion.options;

  return (
    <div className="quiz-card glass-panel anim-fade">
      {/* Quiz Header */}
      <div className="quiz-header">
        <span className="category-tag">{currentQuestion.category}</span>
        <Timer 
          ref={childRef} 
          timeValue={timeValue} 
          onTimeout={handleTimeout}
          duration={20} // 20 second countdown per question
        />
      </div>

      {/* Progress Bar */}
      <div className="question-counter">
        Question {count + 1} of {totalQuestions}
      </div>
      <div className="progress-container">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${((count + 1) / totalQuestions) * 100}%` }}
        ></div>
      </div>

      {/* Question Text */}
      <h2 className="question-text">{currentQuestion.question}</h2>

      {/* Answer Form */}
      <form onSubmit={onSubmitHandler}>
        {isMCQ ? (
          /* MCQ Option Cards Grid */
          <div className="options-grid">
            {currentQuestion.options.map((option, idx) => {
              let statusClass = '';
              if (isSubmitted) {
                const isSelected = selectedOption === option;
                const isCorrect = option.toLowerCase() === currentQuestion.answer.toLowerCase();
                if (isCorrect) statusClass = 'correct';
                else if (isSelected && !isCorrect) statusClass = 'incorrect';
                else statusClass = 'disabled';
              } else if (selectedOption === option) {
                statusClass = 'selected';
              }
              
              return (
                <button
                  type="button"
                  key={idx}
                  disabled={isSubmitted}
                  className={`option-card ${statusClass}`}
                  onClick={() => handleOptionClick(option)}
                >
                  <span>{option}</span>
                  <div className="option-badge">
                    {String.fromCharCode(65 + idx)}
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          /* Plain Text Input Field */
          <div className="text-answer-form">
            <input
              type="text"
              placeholder="Type your answer here..."
              className="text-answer-input"
              ref={currentRef}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              disabled={isSubmitted}
              autoFocus
            />
          </div>
        )}

        {/* Action Controls */}
        <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
          <button 
            type="submit" 
            className="QButton" 
            style={{ flex: 1, padding: '14px 24px', borderRadius: '12px', fontSize: '15px' }}
            disabled={isSubmitted || (!isMCQ && !answer.trim()) || (isMCQ && !selectedOption)}
          >
            {isSubmitted ? 'Verifying...' : 'SUBMIT ANSWER'}
          </button>
        </div>
      </form>

      {/* Stuck / Hint Section */}
      <div className="stuck-section">
        <span className="stuck-text">Stuck on this question?</span>
        <button 
          className="hint-btn" 
          onClick={() => setShowHint(true)}
          type="button"
        >
          💡 GET HINT
        </button>
      </div>

      {/* Inline Feedback Overlay */}
      {isAnim && (
        <div className={`feedback-overlay ${contentA ? 'win' : 'lose'}`}>
          <div className="feedback-anim">
            <AnimationData result={contentA} />
          </div>
          <div className="feedback-title">
            {contentA ? 'Correct!' : 'Incorrect Answer'}
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
            {contentA ? 'Excellent job. Keep it up!' : `The correct answer was: ${currentQuestion.answer}`}
          </p>
        </div>
      )}

      {/* Hint Modal Dialog */}
      {showHint && (
        <div className="modal-overlay" onClick={() => setShowHint(false)}>
          <div className="hint-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="hint-icon">💡</div>
            <h3>Need a clue?</h3>
            <p className="hint-content">
              {currentQuestion.hint || "Think carefully about the syntax rules or definition details."}
            </p>
            <button className="close-modal-btn" onClick={() => setShowHint(false)}>
              Got it, thanks!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionAns;
