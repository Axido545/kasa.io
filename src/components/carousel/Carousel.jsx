import './carousel.css'

export const Carousel = ({ data }) => {
  return (
    <div className="carousel">
      {data.map((item, index) => {
        return <img className="slide" src={item} key={`${item}-${index}`} />
      })}
    </div>
  )
}
