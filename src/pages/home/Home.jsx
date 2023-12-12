import Header from "../../components/header/Header"
import Footer from "../../components/footer/footer"
import Banner from "../../components/banner/Banner.jsx";
import "../../components/banner/banner.css"
import "./home.css"
import bannerHome from "../../assets/banner-home.png"
import Article from "../../components/article/Article.jsx";


export default function Home() {
    return (
      <>
      <Header/>
      <Banner mytitle="chez vous partout et ailleurs"
 url= {bannerHome}/>
      <main className="main-home">
        <Article/>
        </main>
      <Footer/>
      </>
    );
  }