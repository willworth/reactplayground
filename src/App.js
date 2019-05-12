import React from "react";
import AppStyles from "./App.module.css";
import Header from "./components/header";
import Main from "./components/main";
import Intro from "./components/intro";

function App() {
  return (
    <div className={AppStyles.App}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
