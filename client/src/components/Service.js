const Service = (props) => {
  return (
    <div className="serviceDiv" onClick={() => props.onClick(props.id)}>
      {/* <div className="serviceImgageWrapper">
        <img className="serviceImage" src={props.image} alt={props.name}></img>
      </div> */}
      <div className="serviceInfoWrapper">
        <h1>{props.name}</h1>
        <h2>{props.time}</h2>
        <h2>{props.price}</h2>
        <h3>{props.description1}</h3>
        <p>{props.description2}</p>
        <p>{props.description3}</p>
      </div>
    </div>
  )
}

export default Service
