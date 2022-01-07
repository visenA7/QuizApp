import React from 'react';

import MainPage from './MainPage';
import './app.css';
import Quiz from './Quiz';

const App = () => {
  return (
    <div className="BodyR">
      <MainPage />
      <Quiz />
    </div>
  );
};

export default App;
