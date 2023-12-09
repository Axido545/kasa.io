
import Header from "../composants/header/Header.jsx"
import Footer from "../composants/footer/Footer.jsx"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./home/home.jsx";
import About from "./about/About.jsx";


export default function App() {
  return<>
     <Header/>
     <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>

        </Router>
     <Footer/>
 </>
}


