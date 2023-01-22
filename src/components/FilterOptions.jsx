import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react';

const FilterOptions = (props) => {
  let [keywordInput, setKeywordInput] = useState(props.keywords);
  let [difficulty, setDifficulty] = useState("experienced");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(await props.onSubmit());
  }

  return (
    <div className="filter-section">
      <h1>Edit Search</h1>
      <div className="filter-container">
        <SearchIcon /> Enter Keywords
        <form className="filter-search-box" onSubmit={onSubmit}>
          <div className="search-box">
            <input type="search"
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}/>
            <button type="submit" className="search-btn">Search</button>
          </div>
          <div>Choose difficulty</div>
          <div className="difficulty-selection">
            <button className={`difficulty-btn ${difficulty == "beginner" ? " selected" : ""}`} onClick={(e) => setDifficulty("beginner")}>Beginner</button>
            <button className={`difficulty-btn ${difficulty == "experienced" ? " selected" : ""}`} onClick={(e) => setDifficulty("experienced")}>Experienced</button>
            <button className={`difficulty-btn ${difficulty == "advanced" ? " selected" : ""}`} onClick={(e) => setDifficulty("advanced")}>Advanced</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FilterOptions