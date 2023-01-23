const Card = (props) => {
  return (
    <div className="cardDiv" onClick={() => props.onClick(props.id)}>
      <div className="infoWrapper">
        <h1>{props.name}</h1>
      </div>
      <div className="imgageWrapper">
        <img className="cardImage" src={props.image} alt={props.name}></img>
      </div>
    </div>
  )
}

export default Card
