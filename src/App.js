import React from 'react';
import AppStyles from './App.module.css';
import Intro from './components/intro';

function App() {
  return (
    <div className={AppStyles.App}>
      <Intro/>
    </div>
  );
}

export default App;
