import './article.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
 *
 * @argument
 * */

export default function Article({ id, title, cover }) {
  return (
    <div id={id} className="article-block">
      <Link to={`/housing/${id}`}>
        <div className="article-overlay"></div>
        <img src={cover} alt={title} className="img-article" />
      </Link>
      <p className="article-p">{title}</p>
    </div>
  )
}

Article.propTypes = {
  id: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
}
