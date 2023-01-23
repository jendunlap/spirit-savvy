import { useState, useEffect } from 'react'
import axios from 'axios'
import Review from '../components/Review'

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
    <div className="reviewGrid">
      <div className="allReviewsReview">
        {reviews.map((review) => (
          <Review
            id={review._id}
            key={review._id}
            title={review.title}
            text={review.text}
          />
        ))}
      </div>
    </div>
  )
}

export default Reviews
