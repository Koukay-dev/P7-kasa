import '../styles/Carrousel.css'
import { useState } from 'react'
import fleche from '../assets/fleche-carrousel.svg'

function checkIndex(index, maxLength) {
  if (index >= maxLength) {
    return 0
  } else if (index < 0) {
    return maxLength - 1
  }
  return index
}

function Carrousel({ images }) {
  const [imgIndex, setImgIndex] = useState(0)
  console.log(imgIndex)

  const imagesLength = images.length
  const showButtons = imagesLength > 1

  return (
    <div className="carrousel">
      <div
        className="carrousel-images"
        style={{ transform: `translateX(-${imgIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={image + index}
            className="carrousel-image"
            src={image}
            alt=""
          />
        ))}
      </div>
      {showButtons && (
        <>
          <button
            className="carrousel-buttons carrousel-right-button"
            onClick={() => setImgIndex(checkIndex(imgIndex + 1, imagesLength))}
          >
            <img src={fleche} alt="Flèche de droite du carrousel" />
          </button>
          <button
            className="carrousel-buttons carrousel-left-button"
            onClick={() => setImgIndex(checkIndex(imgIndex - 1, imagesLength))}
          >
            <img src={fleche} alt="Flèche de gauche du carrousel" />
          </button>
          <span className="carrousel-counter">{`${
            imgIndex + 1
          }/${imagesLength}`}</span>
        </>
      )}
    </div>
  )
}

export default Carrousel
