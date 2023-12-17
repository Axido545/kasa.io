import './rating.css'

export default function Rating({ rating }) {
  const rang = [1, 2, 3, 4, 5]

  return (
    <div className="rating-position">
      {rang.map((rangElem, index) =>
        rating >= rangElem ? (
          <span key={`${rangElem}-${index}`}>
            <i className="fa-star fa-solid red rating-star"></i>
          </span>
        ) : (
          <span key={`${rangElem}-${index}`}>
            <i className="fa-star fa-solid gray rating-star"></i>
          </span>
        )
      )}
    </div>
  )
}
