import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/Banner'
import bannerAbout from '../../assets/banner-about.png'

function About() {
  return (
    <>
      <Header />
      <Banner url={bannerAbout} mytitle="" />
      <Footer />
    </>
  )
}

export default About
