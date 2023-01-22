import {Link, useNavigate} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo-group"> 
          <img id="dancing" src={require("../images/panini.png")} alt="logo"></img>
          <div id="logo-text">Project Panini</div>
      </Link>

      <nav>
          <ul class="nav__links">
              <li>
                <Link to="/"> 
                  <button className="button">New Project</button>
                </Link>
              </li>
              <li>
                <Link to="/user">
                  <button className="button">My Projects</button>
                </Link>
              </li>
          </ul>
      </nav>
      <Link to="/login">
        <img src={require("../images/icons8-male-user-48.png")} alt="logo"></img>
      </Link>
    </header>
  )
}

export default Header