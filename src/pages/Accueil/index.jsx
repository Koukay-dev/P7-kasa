import bgHome from '../../assets/home-bg.png'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import '../../styles/Accueil.css'

function Accueil() {
  return (
    <section id="home-section">
      <Banner
        img={bgHome}
        alt="Falaises se terminant sur une mer agitée"
        h1Text="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </section>
  )
}

export default Accueil
