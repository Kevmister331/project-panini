import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
          <header>
            <nav>
            <img src="icons8-make-user-48.png" alt="logo" width="30%" height="30%"></img>
            </nav>
        </header>

        <div className="main">

      <section class="s1">
      <link href="https://fonts.googleapis.com/css2?family=Cute+Font&family=Fredoka+One&family=Kavoon&display=swap" rel="stylesheet"></link>
        <h1>Project Panini</h1>
        <p>Type some prompts to get started!</p>
        <form className="search-box">
          <input type="search" placeholder="Type interests here" />
          <div></div>
        </form>
      </section>
    </div>
  </div>
  );
}

export default App;

