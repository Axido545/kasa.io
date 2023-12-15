import PropTypes from 'prop-types'
// import { useState } from 'react'

export default function Collapse() {
  return <p>collapse</p>
  // { title, content }
  // var collapse = props.collapse
  // console.log(collapse)
  // const [isOpen, setIsOpen] = useState(false)
  // console.log(Array.isArray(collapse))
  // const handleToggle = () => {
  //   setIsOpen(!isOpen)
  // }
  // return (
  //   <div className={`collapse-container ${isOpen ? 'open' : ''}`}>
  //     <div className="collapse-header" onClick={handleToggle}>
  //       <span>{title}</span>
  //       <span className={`chevron ${isOpen ? 'open' : ''}`}>
  //         <i className="fa-solid fa-chevron-down"></i>
  //       </span>
  //     </div>
  //     <div className="collapse-content"></div>
  //   </div>
  // )
}

Collapse.propsType = {
  title: PropTypes.string,
}
