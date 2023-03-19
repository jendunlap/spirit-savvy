import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Review from '../components/Review'
import Nav from '../components/Nav'
import Retrograde from '../components/Retrograde'
import Social from '../components/Social'

const Reviews = () => {
  let navigate = useNavigate()
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    const response = await axios.get(`/reviews`)
    setReviews(response.data.reviews)
    console.log(response.data.reviews)
  }

  const colors = [
    '#cd6d59',
    '#de8968',
    '#da8750',
    '#e2a65c',
    '#e5be6a',
    '#bfa355',
    '#9d9d66',
    '#a7a783',
    '#acbaa8',
    '#90a1a5',
    '#6a7985',
    '#384d59'
  ]

  useEffect(() => {
    getReviews()
  }, [])

  return (
    <div className="pageGrid">
      <div className="pageHeader">
        <Nav />
      </div>
      <div className="cardPageInfo">
        <div className="cardPageHeader">
          <div className="aboutContainer">
            <h1 className="signsPageAbout">REVIEWS</h1>
          </div>
          <button
            className="reverseButton"
            onClick={() => navigate(`/booking`)}
          >
            BOOK NOW
          </button>
        </div>
        <div className="aboutInfo">
          {reviews.map((review, index) => (
            <div className="reviewDiv">
              <Review id={review._id} key={review._id} />
              <h1 className="pageAbout" style={{ background: colors[index] }}>
                {review.title}
              </h1>
              <p className="pageInfoP">{review.text}</p>
              <p className="reviewAuthorMain">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="cardsPagePic">
        <img
          src="https://i.imgur.com/aQLBzW8.jpg"
          className="cardsPagePic2"
        ></img>
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
