import star from '../assets/stars/star.svg'
import greyStar from '../assets/stars/grey-star.svg'

import '../styles/Rating.css'

function Rating({ rating = 0 }) {
  let stars = []
  for (let i = 1; i <= 5; i++) {
    const starType = i <= rating ? star : greyStar
    stars.push(<img key={'star' + i} src={starType} alt="star" />)
  }
  return <div className="Rating">{stars}</div>
}

export default Rating
