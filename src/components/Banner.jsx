import '../styles/Banner.css'

function Banner({ img, alt, h1Text = false }) {
  return (
    <div className="img-banner">
      <img src={img} alt={alt} className={h1Text ? 'banner-with-text' : ''} />
      {h1Text ? <h1>{h1Text}</h1> : ''}
    </div>
  )
}

export default Banner
