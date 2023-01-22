import {Link, useNavigate} from 'react-router-dom'

const Header = () => {
  return (
    <header>
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
      <a target="_blank" href="https://www.google.com/">
        <img src={require("../images/icons8-male-user-48.png")} alt="logo"></img>
      </a>
    </header>
  )
}

export default Header