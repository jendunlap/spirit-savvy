import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/Nav'
import Retrograde from '../components/Retrograde'
import Social from '../components/Social'

const CardInfo = () => {
  let { cardId } = useParams()

  const [cardInfo, setCardInfo] = useState(null)
  const [cardsList, setCardsList] = useState([])
  const [currentCardNumber, setCurrentCardNumber] = useState(null)

  const getCardInfo = async () => {
    const response = await axios.get(`/cards/${cardId}`)
    setCardInfo(response.data.card)
    console.log(response.data.card)
    const cardsResponse = await axios.get(`/cards`)
    const filteredCards = cardsResponse.data.cards
      .filter((card) => card.reversed === false)
      .sort((a, b) => a.number - b.number)
    setCardsList(filteredCards)
    const currentCardIndex = filteredCards.findIndex(
      (card) => card.number === response.data.card.number
    )
    setCurrentCardNumber(currentCardIndex)
  }

  let navigate = useNavigate()

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
          </div>
          <div className="cardLongDescription">
            <h5 className="pageInfoP">{cardInfo.longDescription}</h5>
            <h5 className="pageInfoP">{cardInfo.longDescription2}</h5>
            <h5 className="pageInfoP">{cardInfo.longDescription3}</h5>
            <h5 className="pageInfoP">{cardInfo.longDescription4}</h5>
          </div>
          <div className="backButtonContainer">
            {currentCardNumber >= 1 ? (
              <button
                className="previousButton backButton"
                onClick={() =>
                  navigate(`/cards/${cardsList[currentCardNumber - 1]._id}`)
                }
              >
                {cardsList[currentCardNumber - 1]?.name}
              </button>
            ) : (
              <button
                className="previousButton backButton"
                onClick={() =>
                  navigate(`/cards/${cardsList[cardsList.length - 1]._id}`)
                }
              >
                {cardsList[cardsList.length - 1]?.name}
              </button>
            )}
            <button className="backButton" onClick={() => navigate(`/tarot`)}>
              ALL CARDS
            </button>
            {currentCardNumber < cardsList.length - 1 ? (
              <button
                className="nextButton backButton"
                onClick={() =>
                  navigate(`/cards/${cardsList[currentCardNumber + 1]._id}`)
                }
              >
                {cardsList[currentCardNumber + 1]?.name}
              </button>
            ) : (
              <button
                className="nextButton backButton"
                onClick={() => navigate(`/cards/${cardsList[0]._id}`)}
              >
                {cardsList[0]?.name}
              </button>
            )}
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
