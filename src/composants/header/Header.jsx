import logoHeader from '../../assets/logo-kasa-header-desktop.png'
import './header.css'
 function Header(){
    return<header>
        <img className='logo-header' src={logoHeader} />
   <nav className='nav-header'>
    <ul>
        <li>Accueil</li>
        <li>A propos</li>

    </ul>

    </nav>
  </header>
}

export default Header;