import './banner.css'

function Banner({ mytitle, url }) {
  return (
    <div className="banner-style">
      <div>
        <img className="img-banner" src={url} alt="bannière" />
        <p className="title-style">{mytitle}</p>
      </div>
    </div>
  )
}

export default Banner
