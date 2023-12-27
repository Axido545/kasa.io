import './footer.css'
import logo from '../../assets/logo-kasa-footer.png'

function Footer() {
  return (
    <footer className="footer-block">
      <img src={logo} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
