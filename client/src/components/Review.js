import React from 'react'

const Review = (props) => {
  return (
    <div className="reviewDiv">
      <h1 className="reviewTitle">{props.title}</h1>
      <h3 className="reviewText">{props.text}</h3>
    </div>
  )
}

export default Review
