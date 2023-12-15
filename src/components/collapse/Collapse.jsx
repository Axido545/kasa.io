import PropTypes from 'prop-types'
import './collapse.css'

export default function Collapse({ title, content }) {
  return (
    <div className="wrapper-collapse">
      <div className="collapse-title">
        {title}
        <span>
          <i class="fa-solid fa-chevron-up chevron-collapse"></i>
        </span>
      </div>
      <div className="collapse-content">{content}</div>
    </div>
  )
}

Collapse.propsType = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
