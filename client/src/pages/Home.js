import React from 'react'
import Retrograde from '../components/Retrograde'
import Horoscope from '../components/Horoscope'
import DailyCard from '../components/DailyCard'
import ReviewCycle from '../components/ReviewCycle'
import ServicesLink from '../components/ServicesLink'
import Portrait from '../components/Portrait'
import BookingLink from '../components/BookingLink'
import Nav from '../components/Nav'
import Social from '../components/Social'
import { useNavigate, useParams } from 'react-router-dom'

const Home = () => {
  const goToBooking = () => {
    navigate(`/booking/`)
  }

  const goToServices = () => {
    navigate(`/services/`)
  }

  let navigate = useNavigate()

  return (
    <div className="homeGrid">
      <div className="header">
        <Nav />
      </div>
      <div className="homeCardDiv">
        <DailyCard />
      </div>
      <div className="homeHoroscopeDiv">
        <Horoscope />
      </div>
      <div className="homePortraitDiv">
        <Portrait />
      </div>
      <div className="homeServicesDiv" onClick={goToServices}>
        <ServicesLink />
      </div>
      <div className="homeBookingDiv" onClick={goToBooking}>
        <BookingLink />
      </div>
      <div className="homeReviewDiv">
        <ReviewCycle />
      </div>
      <div className="homeRetrogradeDiv">
        <Retrograde />
      </div>
      <div className="homeSocialDiv">
        <Social />
      </div>
    </div>
  )
}

export default Home
