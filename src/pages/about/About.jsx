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
      <Collapse
      //  title={title} content={content}
      />
      <Footer />
    </>
  )
}

export default About
