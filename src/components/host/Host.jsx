import './host.css'

export default function Host({ name, url }) {
  return (
    <div className="host-wrapper">
      <p className="host-name">{name}</p>
      <img className="host-picture" src={url} alt="host" />
    </div>
  )
}
