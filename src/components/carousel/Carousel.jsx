import './carousel.css'
import { useState } from 'react'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0)
  return (
    <div className="carousel">
      <img src={arrowLeft} className="arrow arrow-left"></img>
      {data.map((item, index) => {
        return (
          <img
            className={slide === index ? 'slide' : 'slide slide-hidden'}
            src={item}
            key={`${item}-${index}`}
          />
        )
      })}
      <img src={arrowRight} className="arrow arrow-right"></img>

      <span>
        {data.map((_, idx) => {
          return <span key={idx}>{/* {`${idx}/${_}`} */}</span>
        })}
      </span>
    </div>
  )
}
