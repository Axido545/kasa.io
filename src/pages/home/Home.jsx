import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/Banner.jsx'
import '../../components/banner/banner.css'
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
      <Header />
      <Banner mytitle="chez vous partout et ailleurs" url={bannerHome} />
      <main className="main-home">
        <div className="container-article">
          {housings.map(({ id, title, cover }) => (
            <Article key={id} title={title} cover={cover} id={id} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
