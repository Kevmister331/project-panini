import React from 'react';
import './App.css';
import dashboard from "./dashboard";
import detailedtask from "./detailedtask";
import tasklist from "./tasklist";
import loginpopup from "./loginpopup";
import { Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header>
      <link href="https://fonts.googleapis.com/css2?family=Cute+Font&family=Fredoka+One&family=Kavoon&display=swap" rel="stylesheet"></link>
        <h1>Project Panini</h1>
        <form className="search-box">
          <input type="search" placeholder="Type interests here" />
          <div></div>
        </form>
      </header>

      <Route exact path="/dashboard" component={dashboard} />
      <Route exact path="/tasklist" component={tasklist} />
      <Route exact path="/loginpopup" component={loginpopup} />
      <Route exact path="/detailedtask" component={ detailedtask } />

    </div>
  );
}

export default App;

