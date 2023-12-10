import Header from "../../composants/header/Header"
import Footer from "../../composants/footer/footer"
import Banner from "../../composants/banner/Banner";
import "./root.css"



export default function Root() {
    return (
      <>
      <Header/>
      <Banner/>
      <main className="main-home">
        </main>
      <Footer/>
      </>
    );
  }