import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/Nav'
import Retrograde from '../components/Retrograde'
import Social from '../components/Social'

const CardInfo = ({ cards, selectedCardIndex }) => {
  let { cardId } = useParams()

  const [cardInfo, setCardInfo] = useState(null)

  const getCardInfo = async () => {
    const response = await axios.get(`/cards/${cardId}`)
    setCardInfo(response.data.card)
  }

  let navigate = useNavigate()

  const previous = () => {
    const previousCardIndex = selectedCardIndex - 1
    if (previousCardIndex >= 0) {
      const previousCard = cards[previousCardIndex]
      navigate(`/cards/${previousCard.id}`)
    }
  }

  const next = () => {
    const nextCardIndex = selectedCardIndex + 1
    if (nextCardIndex >= 0) {
      const nextCard = cards[nextCardIndex]
      navigate(`/cards/${nextCard.id}`)
    }
  }

  useEffect(() => {
    getCardInfo()
  }, [cardId])

  return (
    <div className="pageGrid">
      <div className="pageHeader">
        <Nav />
      </div>
      {cardInfo ? (
        <div className="cardPageInfo">
          <div>
            <h1 className="cardPageAbout">{cardInfo.name}</h1>
            {/* <button className="previousButton" onClick={previous}>
              Previous
            </button>
            <button className="nextButton" onClick={next}>
              Next
            </button> */}
          </div>
          <div className="cardLongDescription">
            <h5 className="pageInfoP">{cardInfo.longDescription}</h5>
            <h5 className="pageInfoP">{cardInfo.longDescription2}</h5>
            <h5 className="pageInfoP">{cardInfo.longDescription3}</h5>
            <h5 className="pageInfoP">{cardInfo.longDescription4}</h5>
          </div>
          <div className="backButtonContainer">
            <button className="backButton" onClick={() => navigate(-1)}>
              BACK
            </button>
          </div>
        </div>
      ) : null}
      {cardInfo ? (
        <div className="cardPagePic">
          <img
            className="cardPagePic2"
            src={cardInfo.image}
            alt={cardInfo.name}
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

export default CardInfo
