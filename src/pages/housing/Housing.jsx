import Footer from '../../components/footer/footer.jsx'
import Header from '../../components/header/Header.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import './housing.css'
import { useState, useEffect } from 'react'
import Tags from '../../components/tags/Tags.jsx'
import Collapse from '../../components/collapse/Collapse.jsx'
import Rating from '../../components/ratings/Rating.jsx'
import Host from '../../components/host/Host.jsx'
import { Carousel } from '../../components/carousel/Carousel.jsx'

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
      <div className="wrap">
        <Header />
        {house && (
          <>
            <Carousel data={house.pictures} />

            <main className="house-main">
              <h1 className="house-title"> {house.title}</h1>
              <p className="house-location"> {house.location}</p>
              <div className="wrap-tags-house">
                {house.tags.map((tag, index) => (
                  <Tags key={`${tag}-${index}`} tags={house.tags} name={tag} />
                ))}
              </div>

              <Rating rating={house.rating} />
              <Host
                className="host-place"
                name={house.host.name}
                url={house.host.picture}
              />
              <div className="collapse-house">
                <Collapse
                  className="collapse-house-v"
                  title="Description"
                  content={house.description}
                />
                <Collapse
                  className="collapse-house-v"
                  title="Équipements"
                  content={house.equipments}
                />
              </div>
            </main>
          </>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Housing
