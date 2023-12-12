import Footer from "../../components/footer/footer.jsx"
import Header from "../../components/header/Header.jsx"
import {useParams} from "react-router-dom"
import bannerHousing from "../../assets/banner-housing.png"
import "./single.css"

function Single(){
const {id} = useParams()
return<>
    <Header/>
    <img className="banner-housing" src={bannerHousing}/>
    <p>Article {id}</p>
    <Footer/>
</>

}

export default Single;