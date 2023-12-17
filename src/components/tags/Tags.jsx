import './tags.css'

export default function Tags({ tags }) {
  return (
    <div className="house-tag">
      <div className="tag-list">
        {tags.map((tag, index) => (
          <div key={`${tag}-${index}`} className="tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}
