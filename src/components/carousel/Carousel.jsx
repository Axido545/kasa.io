import './carousel.css'
import { useState } from 'react'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
  }

  return (
    <div className="carousel">
      {data.length > 1 && (
        <>
          <img
            src={arrowLeft}
            alt="arrow left"
            className="arrow arrow-left"
            onClick={prevSlide}
          />
          {data.map((item, index) => (
            <img
              className={slide === index ? 'slide' : 'slide slide-hidden'}
              src={item}
              key={`${item}-${index}`}
              alt="Slider"
            />
          ))}
          <img
            src={arrowRight}
            alt="arrow right"
            className="arrow arrow-right"
            onClick={nextSlide}
          />
        </>
      )}
      <span>
        {data.map((_, index) => (
          <span className="pagination" key={index}>
            {slide === index ? `${slide + 1}/${data.length}` : null}
          </span>
        ))}
      </span>
    </div>
  )
}
