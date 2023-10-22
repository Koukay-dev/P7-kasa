import '../styles/Banner.css'

function Banner({ img, alt, h1Text = false }) {
  const isMobile = window.innerWidth <= 768

  return (
    <div className="img-banner">
      <img
        src={img}
        alt={alt}
        style={h1Text && isMobile ? { maxHeight: '115px' } : {}}
      />
      {h1Text ? <h1>{h1Text}</h1> : ''}
    </div>
  )
}

export default Banner
