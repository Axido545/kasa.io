import "./article.css"
import PropTypes from 'prop-types'


export default function Article({id}){

    return <div id={id} className="article-block">
        <p className="article-p">{id}</p>
    </div>
}


Article.propTypes = {
  id: PropTypes.string,
}