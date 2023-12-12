import "./article.css"
import PropTypes from 'prop-types'

/**
 * 
 * @argument
 * */

export default function Article({id,title,cover}){

    return <div id={id} className="article-block">
      <img src={cover} alt={title} className="img-article" />
        <p className="article-p">{title}</p>
    </div>
}


Article.propTypes = {
     id: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,


}