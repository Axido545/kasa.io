import Header from "../../components/header/Header"
import Footer from "../../components/footer/footer"
import Banner from "../../components/banner/Banner.jsx";
import "../../components/banner/banner.css"
import "./home.css"
import bannerHome from "../../assets/banner-home.png"
import Article from "../../components/article/Article.jsx";
import { Housing } from "../../datas/housing.js";

export default function Home() {
    return (
      <>
      <Header/>
      <Banner mytitle="chez vous partout et ailleurs"
 url= {bannerHome}/>
      <main className="main-home">
        <div className="container-article">
          {Housing.map(({id,title}) => (
            <Article
            key={id}
            title={title}

          />))}

                </div>
        </main>
      <Footer/>
      </>
    );
  }