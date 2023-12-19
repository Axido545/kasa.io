import './tags.css'

export default function Tags({ tag, name }) {
  return (
    <div className="house-tag">
      <div className="tag-list">
        <div className="tag">{name}</div>
      </div>
    </div>
  )
}
