import { NavLink } from "react-router-dom"

export function Header(){
    return<header>
    <nav>
    <NavLink to="/">Accueil</NavLink>
      <NavLink to="/about">A propos</NavLink>
      <NavLink to ="/logement">Logement</NavLink>
    </nav>
  </header>
}

