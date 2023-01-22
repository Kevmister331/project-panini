import Dashboard2 from "./Dashboard2"

const Dashboard = () => {
  return (
    
    <div className="dashboard">
      <link href="https://fonts.googleapis.com/css2?family=Cute+Font&family=Fredoka+One&family=Kavoon&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link rel="stylesheet" href="style.css"></link>
        <div className="sideleft">
          <Dashboard2/>
        </div>
        <div className="middle">
          <div classname="middle-container">
          <h1 id="unique">Court Vision</h1>
          <div class="keyword-badges">
            <div class="button">Machine Learning</div>
            <div class="button">NBA</div>
          </div>
          <div className="project-description">
            <p>Develop an AI-enabled system that can observe and analyze the movements of NBA players on the court in real-time and provide valuable insights on player performance.</p>
        </div>
          </div>
        </div>
        <div className="sideright">
          <h1 id="poopy">Task List</h1>
        <div className="one-box">
            <h5>Research</h5>
            <p>Conduct research on publicly available APIs for desired NBA statistics, and what technologies are able to integrate an AI system.</p>
        </div>
        <div className="one-box">
            <h5>Train AI</h5>
            <p>Train a machine learning model using the preprocessed data to predict and analyze the performance metrics from the API</p>
        </div>
        <div className="one-box">
            <h5>Implement Real-Time Processing</h5>
            <p>Integrate the AI model into a system that can process and analyze player movements in real-time, using technologies such as computer vision and deep learning</p>
          </div>
          <div className="one-box">
            <h5>Testing and Deployment</h5>
            <p>Test the system and monitor possible improvements over time.</p>
          </div>
        </div>
    </div>
  )
}

export default Dashboard