import { useState, useEffect } from 'react'
import axios from 'axios'
import Review from '../components/Review'
import Nav from '../components/Nav'
import Retrograde from '../components/Retrograde'
import Social from '../components/Social'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    const response = await axios.get(`http://localhost:3001/reviews`)
    setReviews(response.data.reviews)
    console.log(response.data.reviews)
  }

  useEffect(() => {
    getReviews()
  }, [])

  return (
    <div className="pageGrid">
      <div className="pageHeader">
        <Nav />
      </div>
      <div className="pageInfo">
        <div className="allReviewsReview">
          {reviews.map((review) => (
            <div>
              <Review
                id={review._id}
                key={review._id}
                // snippet={review.snippet}
              />
              <h1 className="pageAbout">{review.title}</h1>
              <p className="pageInfoP">{review.text}</p>
              <p className="reviewAuthor">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pagePic">
        <img src="https://i.imgur.com/4l9uTeP.jpg" className="pagePic"></img>
      </div>
      <div className="pageRetrogradeDiv">
        <Retrograde />
      </div>
      <div className="pageSocialDiv">
        <Social />
      </div>
    </div>
  )
}

export default Reviews
