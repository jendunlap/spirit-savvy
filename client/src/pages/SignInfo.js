import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/Nav'
import Retrograde from '../components/Retrograde'
import Social from '../components/Social'

const SignInfo = ({ signs, selectedSignIndex }) => {
  let { horoscopeId } = useParams()

  const [signInfo, setSignInfo] = useState(null)

  const getSignInfo = async () => {
    const response = await axios.get(`/horoscope/${horoscopeId}`)
    setSignInfo(response.data.card)
  }

  let navigate = useNavigate()

  // const previous = () => {
  //   const previousCardIndex = selectedCardIndex - 1
  //   if (previousCardIndex >= 0) {
  //     const previousCard = cards[previousCardIndex]
  //     navigate(`/cards/${previousCard.id}`)
  //   }
  // }

  // const next = () => {
  //   const nextCardIndex = selectedCardIndex + 1
  //   if (nextCardIndex >= 0) {
  //     const nextCard = cards[nextCardIndex]
  //     navigate(`/cards/${nextCard.id}`)
  //   }
  // }

  useEffect(() => {
    getSignInfo()
  }, [horoscopeId])

  return (
    <div className="pageGrid">
      <div className="pageHeader">
        <Nav />
      </div>
      {signInfo ? (
        <div className="cardPageInfo">
          <div>
            <h1 className="cardPageAbout">{signInfo.name}</h1>
            {/* <button className="previousButton" onClick={previous}>
              Previous
            </button>
            <button className="nextButton" onClick={next}>
              Next
            </button> */}
            <h2 className="signPageDates">{signInfo.dates}</h2>
          </div>
          <div className="cardLongDescription">
            <h5 className="pageInfoP">{signInfo.description1}</h5>
            <h5 className="pageInfoP">{signInfo.description2}</h5>
            <h5 className="pageInfoP">{signInfo.description3}</h5>
          </div>
          <div className="backButtonContainer">
            <button className="backButton" onClick={() => navigate(-1)}>
              BACK
            </button>
          </div>
        </div>
      ) : null}
      {signInfo ? (
        <div className="cardPagePic">
          <img
            className="cardPagePic2"
            src={signInfo.image}
            alt={signInfo.name}
          ></img>
        </div>
      ) : null}
      <div className="pageRetrogradeDiv">
        <Retrograde />
      </div>
      <div className="pageSocialDiv">
        <Social />
      </div>
    </div>
  )
}

export default SignInfo
