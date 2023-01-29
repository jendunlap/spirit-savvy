import React from 'react'

const Review = (props) => {
  return (
    <div className="reviewDiv">
      <h2 className="reviewTitle">{props.title}</h2>
      <h3 className="reviewText">{props.snippet}</h3>
      <h4 className="reviewAuthor">- {props.author}</h4>
    </div>
  )
}

export default Review
