import PropTypes from 'prop-types'
import './collapse.css'
import { useState } from 'react'

export default function Collapse({ title, content }) {
  const [active, setActive] = useState(false)
  const handleToggle = () => {
    setActive(!active)
  }
  return (
    <div className={`wrapper-collapse ${active && 'active'}`}>
      <div className="collapse-title" onClick={handleToggle}>
        {title}
        <span>
          <i className="wrapper-collapse fa-solid fa-chevron-up chevron-collapse rotate-down"></i>
        </span>
      </div>
      <div className="collapse-content">
        {Array.isArray(content) ? (
          <ul className="collapse-content-tabs">
            {content.map((item, index) => (
              <li key={index} className="collapse-list-item">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="collapse-p">{content}</p>
        )}
      </div>
    </div>
  )
}

Collapse.propsType = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
