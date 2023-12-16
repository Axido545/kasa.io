import './ratings.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function Ratings(rating, id) {
  const [stockedStar, setStockedStar] = useState([])
  useEffect(() => {
    const displayStars = () => {
      const stars = Array.from({ length: 5 }, (_, index) => {
        const isRed = index + 1 <= rating
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            color={isRed ? 'red' : 'gray'}
          />
        )
      })

      setStockedStar(stars)
    }

    displayStars()
  }, [rating, id])

  return (
    <div className="rating-position">
      <div
        className="
      rating-star "
      >
        {stockedStar}
      </div>
    </div>
  )
}
