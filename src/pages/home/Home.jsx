import Header from '../../layout/header/Header.jsx'
import Footer from '../../layout/footer/footer.jsx'
import Banner from '../../layout/banner/Banner.jsx'
import '../../layout/banner/banner.css'
import './home.css'
import bannerHome from '../../assets/banner-home.png'
import Article from '../../components/article/Article.jsx'
import { useEffect, useState } from 'react'

export default function Home() {
  const [housings, setHousings] = useState([])

  useEffect(() => {
    function getHousings() {
      fetch('/logements.json')
        .then((res) => res.json())
        .then((data) => setHousings(data))
    }
    getHousings()
  })
  return (
    <>
      <div className="wrap">
        <Header />
        <Banner mytitle="chez vous partout et ailleurs" url={bannerHome} />
        <main className="main-home">
          <div className="container-article">
            {housings.map(({ id, title, cover }) => (
              <Article key={id} title={title} cover={cover} id={id} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
