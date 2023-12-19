import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/Banner'
import bannerAbout from '../../assets/banner-about.png'
import Collapse from '../../components/collapse/Collapse'
import './about.css'

function About() {
  const content1 =
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'

  const content2 =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'

  const content3 =
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."

  const content4 =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons ségalement des ateliers sur la sécurité domestique pour nos hôtes."

  return (
    <>
      <div className="wrap">
        <Header />
        <Banner url={bannerAbout} mytitle="" />
        <div className="collapses">
          <Collapse title="Fiabilité" content={content1} />
          <Collapse title="Respect" content={content2} />
          <Collapse title="Service" content={content3} />
          <Collapse title="Sécurité" content={content4} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
