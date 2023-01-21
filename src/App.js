import {useState} from 'react';
import './App.css';

import generate from './features/generate'

function App() {
  const [keywordInput, setKeywordInput] = useState("");
  const [result, setResult] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await generate(keywordInput)
    setResult(result.choices[0].text)
  }

  return (
    <div className="App">
      <header>
          <img src={require("./images/icons8-male-user-48.png")} alt="logo"></img>
          <nav>
              <ul class="nav__links">
                  <li><a href="#featured-projects"><button class="button">New Project</button></a></li>
                  <li><a href="#contact"><button class="button">My Projects</button></a></li>
              </ul>
          </nav>
      </header>
      <div className="main">
        <section class="s1">
        <link href="https://fonts.googleapis.com/css2?family=Cute+Font&family=Fredoka+One&family=Kavoon&display=swap" rel="stylesheet"></link>
          <h1>Project Panini</h1>
          <p>Type some prompts to get started!</p>
          <form className="search-box" onSubmit={onSubmit}>
          <input type="search"
            placeholder="Type interests here"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}/>
            <div></div>
          </form>
          <div className="results">{result}</div>
        </section>
      </div>
    </div>
  );
}

export default App;

