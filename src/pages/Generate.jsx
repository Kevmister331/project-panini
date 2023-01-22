
import {useState} from 'react';
import IdeaGroup from '../components/IdeaGroup';
import FilterOptions from '../components/FilterOptions';
import generate from '../features/generate'


const Generate = () => {
  const [keywordInput, setKeywordInput] = useState("");
  const [result, setResult] = useState();
  const [selectPage, setSelectPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const apiResult = await generate(keywordInput)
    console.log(apiResult.choices[0].text);
    setResult(apiResult.choices[0].text)
    setIsLoading(false);
    setSelectPage(true);
  }

  if(isLoading) {
    return (<div className="loading-screen">
      <div className="loading-group">
        <img id="loading" src={require("../images/dancing.gif")} alt="logo"></img>
        <h1>Loading...</h1>
      </div>
    </div>)
  }

  if(!selectPage) {
    return (
      <div className="main">
          <section class="s1">
            <img id="panini" src={require("../images/panini.png")} alt="logo"></img>
            <h1 id="main-title">PROJECT PANINI</h1>
            <p>Type some prompts to get started!</p>
            <form className="search-box" onSubmit={onSubmit}>
              <input type="search"
                placeholder="Type interests here"
                value={keywordInput}
                onChange={(e) => setKeywordInput(e.target.value)}/>
              <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="results">{result}</div>
          </section>
      </div>
    )
  }
  
  if(selectPage) {
    // let results = `"

    // 1. Slam Dunk AI: Create an AI-driven program that can accurately predict the success rate of an NBA player's slam dunk. The program should take into account the player's skill level, the difficulty of the dunk, and the opposing team's defense.
    
    // 2. Court Vision: Develop an AI-enabled system that can observe and analyze the movements of NBA players on the court in real-time and provide valuable insights on player performance.
    
    // 3. AI-Driven Coaching: Create an AI-powered program that can suggest strategies and plays to NBA coaches based on the current game situation and the team's strengths and weaknesses.
    
    // 4. Shot Analytics: Develop a program that can monitor and analyze the accuracy of shots taken by NBA players and provide feedback to coaches and players on their shooting performance.
    
    // 5. Player Performance Modeling: Create an AI-driven system that can predict the performance of NBA players based on their past performance and current situation."`

    let results = result.split('\n').filter((str) => str.length > 10).map(str => str.trim().slice(3)).map((str) => {
      let [name, description] = str.split(":").map(str => str.trim())

      return {name, description}
    })
    console.log(results)
    return (
      <div className="select-page">
        <div className="ideas-container">
          <h1>Results</h1>
          {results.map(item => <IdeaGroup name={item.name} desc={item.description}/>)}
        </div>
        <FilterOptions keywords={keywordInput} onSubmit={onSubmit}/>
      </div>
    )
  }
}

export default Generate