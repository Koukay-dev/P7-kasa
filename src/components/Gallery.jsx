import logements from '../datas/logements.json'
import '../styles/Gallery.css'
import Card from './Card'

function Gallery() {
  return (
    <div id="Gallery">
      {logements.map(({ cover, title, id, description }, index) => {
        return (
          <Card
            key={id + index}
            index={index}
            cover={cover}
            title={title}
            id={id}
            description={description}
          />
        )
      })}
    </div>
  )
}

export default Gallery
