const Dashboard = () => {
  return (
    
    <div className="dashboard">
      <link href="https://fonts.googleapis.com/css2?family=Cute+Font&family=Fredoka+One&family=Kavoon&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link rel="stylesheet" href="style.css"></link>
        <div className="sideleft">
          <h1>My Projects</h1>
          <form>
            <input type="text" name="text" id="txt" required></input>
            <button type="submit" class="btn-list">
                <i class="fa-solid fa-plus"></i>
            </button>
          </form>
          <div class="list-container">
            <ul>
              <li>Project 1<span>x</span></li>
              <li>Project 2<span>x</span></li>
              <li>Project 3<span>x</span></li>
            </ul>

          </div>
        
        </div>
        <div className="middle"><h1>Project 1</h1></div>
        <div className="sideright">
          <h1>Tasks</h1>
          <div className="one-box">
            <h3>Tasks</h3>
            <p>Task description here</p>
          </div>
          <div className="one-box">
            <h3>Tasks</h3>
            <p>Task description here</p>
          </div>
          <div className="one-box">
            <h3>Tasks</h3>
            <p>Task description here</p>
          </div>
          <div className="one-box">
            <h3>Tasks</h3>
            <p>Task description here</p>
          </div>
        </div>
    </div>
  )
}

export default Dashboard