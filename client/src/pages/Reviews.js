import { useState, useEffect } from 'react'
import axios from 'axios'
import Review from '../components/Review'
import Nav from '../components/Nav'
import Retrograde from '../components/Retrograde'

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
                title={review.title}
                snippet={review.snippet}
                author={review.author}
              />
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pagePic">Photo Coming Soon</div>
      <div className="pageRetrogradeDiv">
        <Retrograde />
      </div>
    </div>
  )
}

export default Reviews
