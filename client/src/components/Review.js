import React from 'react'

const Review = (props) => {
  return (
    <div className="reviewDiv">
      <h2 className="reviewTitle">{props.title}</h2>
      <p className="reviewText">{props.text}</p>
    </div>
  )
}

export default Review
