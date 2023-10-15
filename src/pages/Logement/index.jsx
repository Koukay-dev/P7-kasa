import '../../styles/Logement.css'
import logements from '../../datas/logements.json'
import Carrousel from '../../components/Carrousel'
import { useParams } from 'react-router-dom'
import Accordion from '../../components/Accordion'
import Tags from '../../components/Tags'
import Host from '../../components/Host'
import Rating from '../../components/Rating'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)
  console.log(logement)
  return (
    <section id="page-logement">
      <Carrousel images={logement.pictures} />
      <div className="logement-head-info">
        <div className="logement-info-title">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>
        <div className="host-info-div">
          <Host host={logement.host} />
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="accordions-container">
        <Accordion title="Description" content={logement.description} />
        <Accordion title="Equipement" content={logement.equipments} />
      </div>
    </section>
  )
}

export default Logement
