import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Generate from './pages/Generate'
import Dashboard2 from './pages/Dashboard2';
import Header from './components/Header'
import Login from './pages/Login'


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Generate />} />
            <Route path='/user' element={<Dashboard2 />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

