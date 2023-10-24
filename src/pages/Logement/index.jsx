import '../../styles/Logement.css'
import logements from '../../datas/logements.json'
import Carrousel from '../../components/Carrousel'
import { useLoaderData } from 'react-router-dom'
import Accordion from '../../components/Accordion'
import Tags from '../../components/Tags'
import Host from '../../components/Host'
import Rating from '../../components/Rating'

function Logement() {
  const logement = useLoaderData()
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
        <Accordion
          title="Description"
          content={logement.description}
          logementAccordion={true}
        />
        <Accordion
          title="Equipement"
          content={logement.equipments}
          logementAccordion={true}
        />
      </div>
    </section>
  )
}

export default Logement

// Gestion des erreurs au fetch
export const logementLoader = ({ params }) => {
  const logement = logements.find((logement) => logement.id === params.id)
  if (logement === undefined) {
    throw new Response('Not Found', { status: 404 })
  }
  return logement
}
