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
  const [reversedCard, setReversedCard] = useState(null)

  const getCardInfo = async () => {
    const response = await axios.get(`/cards/${cardId}`)
    const cardData = response.data.card
    setCardInfo(cardData)

    const cardsResponse = await axios.get(`/cards`)
    const filteredCards = cardsResponse.data.cards
      .filter((card) => card.reversed === false)
      .sort((a, b) => a.number - b.number)
    setCardsList(filteredCards)

    const currentCardIndex = filteredCards.findIndex(
      (card) => card.number === cardData.number
    )
    setCurrentCardNumber(currentCardIndex)

    const oppositeCardsResponse = await axios.get(`/cards`)
    const oppositeCard = oppositeCardsResponse.data.cards.find((card) => {
      return card.name === cardData.name && card.reversed !== cardData.reversed
    })
    setReversedCard(oppositeCard)
    console.log(oppositeCardsResponse)
    console.log(oppositeCard)
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
          <div className="cardPageHeader">
            <div className="aboutContainer">
              <h1 className="cardPageAbout">{cardInfo.name.toUpperCase()}</h1>
              {cardInfo.reversed ? (
                <p className="reversedOr">reversed</p>
              ) : (
                <p className="reversedOr">upright</p>
              )}
            </div>
            {reversedCard && (
              <button
                className="reverseButton"
                onClick={() => navigate(`/cards/${reversedCard._id}`)}
              >
                {reversedCard.reversed
                  ? `Looking for ${reversedCard.name} reversed?`
                  : `Looking for ${reversedCard.name} upright?`}
              </button>
            )}
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
