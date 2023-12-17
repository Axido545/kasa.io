import './carousel.css'
import { useState } from 'react'

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0)
  return (
    <div className="carousel">
      <div className="btn-arrow-left">
        <i className="fa-solid fa-angle-left arrow left"></i>
      </div>
      {data.map((item, index) => {
        return (
          <img
            className={slide === index ? 'slide' : 'slide slide-hidden'}
            src={item}
            key={`${item}-${index}`}
          />
        )
      })}
      <div className="btn-arrow-right">
        <i className="fa-solid fa-angle-right arrow arrow right"></i>
      </div>
      <span>
        {data.map((_, idx) => {
          return <span key={idx}>{/* {`${idx}/${_}`} */}</span>
        })}
      </span>
    </div>
  )
}
