export default function Host({ name, url }) {
  return (
    <div>
      <p>{name}</p>
      <img src={url} alt="host" />
    </div>
  )
}
