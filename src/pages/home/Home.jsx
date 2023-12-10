import Header from "../../composants/header/Header"
import Footer from "../../composants/footer/footer"
import Banner from "../../composants/banner/Banner";
import "./home.css"
import bannerHome from "../../assets/banner-about.png"


export default function Home() {
    return (
      <>
      <Header/>
      {/* <Banner className="home-banner"/> */}
      <Banner style={{backgroundImage : `url(${bannerHome})`,

}}/>
      <main className="main-home">
        </main>
      <Footer/>
      </>
    );
  }