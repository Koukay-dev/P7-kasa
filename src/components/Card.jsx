import { Link } from 'react-router-dom'
import '../styles/Card.css'

function Card({ index, cover, title, id, description }) {
  return (
    <Link to={`./logement/${id}`} className="card" key={index + id}>
      <img src={cover} alt={description} />
      <h3>{title}</h3>
    </Link>
  )
}

export default Card
