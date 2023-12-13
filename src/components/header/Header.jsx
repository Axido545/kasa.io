import logoHeader from '../../assets/logo-kasa-header-desktop.png'
import './header.css'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header>
      <img className="logo-header" src={logoHeader} />
      <nav className="nav-header">
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
