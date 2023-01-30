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
    const response = await axios.get(`http://localhost:3001/cards`)
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
      <div className="pageInfo">
        <div className="allCardsCard">
          {cards
            .filter((card) => card.reversed === false)
            .sort((a, b) =>
              a.number.toString().localeCompare(b.number.toString())
            )
            .map((card) => (
              <div>
                <Card
                  id={card._id}
                  key={card._id}
                  reversed={card.reversed}
                  onClick={viewCard}
                />
                <h1 className="pageAbout" onClick={() => viewCard(card._id)}>
                  {card.name}
                </h1>
                <img
                  src={card.image}
                  className="cardPageImage"
                  onClick={() => viewCard(card._id)}
                ></img>
              </div>
            ))}
        </div>
      </div>
      <div className="pagePic">
        <img src="https://i.imgur.com/c8eYcHX.jpg" className="pagePic"></img>
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
