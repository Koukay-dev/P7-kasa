import '../styles/Carrousel.css'

function Carrousel({ images }) {
  if (images.isArray) {
    var image = images[0]
  } else {
    image = images[0]
  }
  return (
    <div>
      <img src={image} alt="" />
    </div>
  )
}

export default Carrousel
