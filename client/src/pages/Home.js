import React from 'react'
import Retrograde from '../components/Retrograde'
import Horoscope from '../components/Horoscope'
import DailyCard from '../components/DailyCard'
import ReviewCycle from '../components/ReviewCycle'
import ServicesLink from '../components/ServicesLink'
import Portrait from '../components/Portrait'
import BookingLink from '../components/BookingLink'

const Home = () => {
  return (
    <div>
      <DailyCard />
      <Horoscope />
      <Portrait />
      <ServicesLink />
      <BookingLink />
      <ReviewCycle />
      <Retrograde />
    </div>
  )
}

export default Home
