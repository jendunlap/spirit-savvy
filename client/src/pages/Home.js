import React from 'react'
import Retrograde from '../components/Retrograde'
import Horoscope from '../components/Horoscope'
import DailyCard from '../components/DailyCard'
import ReviewCycle from '../components/ReviewCycle'

const Home = () => {
  return (
    <div>
      <h1>GET SPIRIT SAVVY BITCHES!!</h1>
      <Retrograde />
      <Horoscope />
      <DailyCard />
      <ReviewCycle />
    </div>
  )
}

export default Home
