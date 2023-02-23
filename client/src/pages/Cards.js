import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Card'
import Nav from '../components/Nav'
import Retrograde from '../components/Retrograde'
import Social from '../components/Social'

const Cards = () => {
  const [cards, setCards] = useState([])

  let navigate = useNavigate()
  let { cardsId } = useParams()

  const getCards = async () => {
    const response = await axios.get(`/cards`)
    setCards(response.data.cards)
    console.log(response.data.cards)
  }

  const viewCard = (id) => {
    navigate(`/cards/${id}`)
  }

  useEffect(() => {
    getCards()
  }, [cardsId])

  return (
    <div className="pageGrid">
      <div className="pageHeader">
        <Nav />
      </div>
      <div className="cardsPageInfo">
        <div className="allCardsCard">
          {cards
            .filter((card) => card.reversed === false)
            .sort((a, b) => a.number - b.number)
            .map((card) => (
              <div className="allCardsDiv">
                <Card
                  id={card._id}
                  key={card._id}
                  reversed={card.reversed}
                  onClick={viewCard}
                />
                <img
                  src={card.image}
                  className="cardsPageImage"
                  onClick={() => viewCard(card._id)}
                ></img>
                <p className="cardsPageName" onClick={() => viewCard(card._id)}>
                  {card.name}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="cardsPagePic">
        <img
          src="https://i.imgur.com/Bq6DwpZ.png"
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

export default Cards
