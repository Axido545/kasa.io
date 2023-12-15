import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/Banner'
import bannerAbout from '../../assets/banner-about.png'
import Collapse from '../../components/collapse/Collapse'

function About() {
  return (
    <>
      <Header />
      <Banner url={bannerAbout} mytitle="" />
      <Collapse title="Fiabilité" content="mon contenu 1" />
      <Collapse title="Respect" content="mon contenu 2" />
      <Collapse title="Service" content="mon contenu 3" />
      <Collapse title="Sécurité" content="mon contenu 4" />

      <Footer />
    </>
  )
}

export default About
