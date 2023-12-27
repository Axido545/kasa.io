import { NavLink, useRouteError } from 'react-router-dom'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/footer'
import './404.css'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <div className="wrap">
        <Header />
        <div className="error-class">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n’existe pas.</p>
          <NavLink className="error-link" to="/">
            Retourner sur la page d’accueil
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  )
}
