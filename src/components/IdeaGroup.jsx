const IdeaGroup = (props) => {
  return (
    <div className="idea-group">
      <div className="idea-name">{props.name}</div>
      <div className="idea-desc">{props.desc}</div>
    </div>
  )
}

export default IdeaGroup