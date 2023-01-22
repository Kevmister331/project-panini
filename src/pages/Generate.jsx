
import {useState} from 'react';
import generate from '../features/generate'


const Generate = () => {
  const [keywordInput, setKeywordInput] = useState("");
  const [result, setResult] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await generate(keywordInput)
    setResult(result.choices[0].text)
  }

  return (
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
          </form>
          <div className="results">{result}</div>
        </section>
    </div>
  )
}

export default Generate