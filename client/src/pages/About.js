import React from 'react'
import Nav from '../components/Nav'
import Retrograde from '../components/Retrograde'
import Social from '../components/Social'

const About = () => {
  return (
    <div className="pageGrid">
      <div className="pageHeader">
        <Nav />
      </div>
      <div className="pageInfo">
        <h1 className="pageAbout">About YeYe</h1>
        <p className="pageInfoP">
          YeYe is a psychic medium intuitive coach based in Savannah, Georgia.
        </p>
        <p className="pageInfoP pageInfoAbout">
          With more than 30 years of spiritual experience and five years working
          in mental health, YeYe combines ancestral psychic mediumship with
          spiritual wellness by connecting to ancestors and people who have
          transitioned to the other side. She works with individuals, couples,
          and groups to hone and harness their intuitive abilities through
          coaching to navigate important transitions in their lives.
        </p>
        <p className="pageInfoP pageInfoAbout">
          Specializing in psychic mediumship, one-on-one coaching, and intuitive
          natal charts, YeYe offers indigenous insights as an Iyanifa - a
          priestess of a tradition going back tens of thousands of years.
        </p>
        <p className="pageInfoP pageInfoAbout">
          By focusing on authenticity, compassion, and honesty, YeYe also
          provides healing, clarity and insight through tarot and astrology. Her
          non-judgmental, compassionate, and down to earth approach sprinkled
          with humor will help you tap into your intuition, heal your emotional
          and spiritual wounds, and ascend to a higher level of self-awareness
          and transformation.
        </p>
      </div>
      <div className="pagePic">
        <img src="https://i.imgur.com/TzWJA4e.jpeg" className="pagePic"></img>
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

export default About
