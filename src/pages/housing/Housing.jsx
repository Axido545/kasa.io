import Footer from '../../components/footer/footer.jsx'
import Header from '../../components/header/Header.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import bannerHousing from '../../assets/banner-housing.png'
import './housing.css'
import { useState, useEffect } from 'react'

function Housing() {
  const [house, setHouse] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    function getHousings() {
      fetch('/logements.json')
        .then((res) => res.json())
        .then((data) => {
          const thisHouse = data.find((house) => house.id === id)
          if (!thisHouse) {
            navigate('/page-non-trouvée')
          }
          setHouse(thisHouse)
        })
    }
    getHousings()
  })

  return (
    <>
      <Header />
      {house && (
        <>
          <img className="banner-housing" src={bannerHousing} />
          <main className="house-main">
            <h1 className="house-title"> {house.title}</h1>
            <p className="house-location"> {house.location}</p>
          </main>
        </>
      )}

      <Footer />
    </>
  )
}

export default Housing
