import axios from 'axios'
import { useState, useEffect } from 'react'
import Review from '../components/Review'
import { useNavigate, useParams } from 'react-router-dom'

const ReviewCycle = () => {
  const [currentReview, setCurrentReview] = useState(0)
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    const response = await axios.get(`http://localhost:3001/reviews`)
    setReviews(response.data.reviews)
    console.log(response.data.reviews)
  }

  const goToReviews = () => {
    navigate(`/reviews/`)
  }

  let navigate = useNavigate()

  useEffect(() => {
    getReviews()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((currentReview + 1) % reviews.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [currentReview, reviews])

  return (
    <div onClick={goToReviews}>
      <Review {...reviews[currentReview]} />
    </div>
  )
}

export default ReviewCycle
