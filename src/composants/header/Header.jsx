import logoHeader from '../../assets/logo-kasa-header-desktop.png'
import './header.css'
 function Header(){
    return<header>
        <img className='logo-header' src={logoHeader} />
   <nav className='nav-header'>
    <ul> <li>
    <a href={`/`}>Accueil</a>
    </li>
<li>
<a href={`/about`}>A propos</a>
</li>
    </ul>
    </nav>
  </header>
}

export default Header;


