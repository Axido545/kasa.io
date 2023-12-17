import './rating.css'

export default function Rating({ rating, key }) {
  const rang = [1, 2, 3, 4, 5]

  return (
    <div className="rating-position">
      {rang.map((rangElem) =>
        rating >= rangElem ? (
          <span key={key}>
            <i className="fa-star fa-solid red rating-star"></i>
          </span>
        ) : (
          <span key={key}>
            <i className="fa-star fa-solid gray rating-star"></i>
          </span>
        )
      )}
    </div>
  )
}
