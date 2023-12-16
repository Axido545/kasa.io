import './tags.css'

export default function Tags({ tags }) {
  return (
    <div className="house-tag">
      <div className="tag-list">
        {tags.map((tag) => (
          <div className="tag">{tag}</div>
        ))}
      </div>
    </div>
  )
}
