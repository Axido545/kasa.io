import Header from "../../composants/header/Header"
import Footer from "../../composants/footer/footer"
import Banner from "../../composants/banner/Banner.jsx";
import "../../composants/banner/banner.css"
import bannerHome from "../../assets/banner-home.png"
import "./home.css"


export default function Home() {
    const bannerStyle = {
        backgroundImage: `url(${bannerHome})`,
      };
    return (
      <>
      <Header/>
      <Banner mytitle="chez vous partout et ailleurs"
    style={{ backgroundImage: `url(${bannerStyle})` }} 
/>
      <main className="main-home">
        </main>
      <Footer/>
      </>
    );
  }