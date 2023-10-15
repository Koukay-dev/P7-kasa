import '../styles/Tags.css'

function Tags({ tags }) {
  return (
    <div className="logement-tags">
      {tags.map((tag, index) => (
        <p key={tag + index}>{tag}</p>
      ))}
    </div>
  )
}

export default Tags
