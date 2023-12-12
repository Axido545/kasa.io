import Footer from "../../components/footer/footer.jsx"
import Header from "../../components/header/Header.jsx"
import {useParams} from "react-router-dom"
import bannerHousing from "../../assets/banner-housing.png"
import "./single.css"
import { Housing } from "../../datas/housing.js"
import { useState, useEffect } from "react"


function Single(){
const [house, setHouse]= useState('')

const {id} = useParams()
useEffect(() => {
    const thisHouse = Housing.find((house) => house.id === id);
    console.log(thisHouse);
    setHouse(thisHouse);
  }, [id]);

return<>
    <Header/>
    <img className="banner-housing" src={bannerHousing}/>
    <main className="house-main">
    <h1 className="house-title"> {house.title}</h1>
    </main>
    <Footer/>
</>

}

export default Single;