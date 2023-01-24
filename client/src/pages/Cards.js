import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Card'
import Nav from '../components/Nav'
import Retrograde from '../components/Retrograde'

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
              <Card
                id={card._id}
                key={card._id}
                reversed={card.reversed}
                image={card.image}
                name={card.name}
                onClick={viewCard}
              />
            ))}
        </div>
      </div>
      <div className="pagePic">Photo Coming Soon</div>
      <div className="pageRetrogradeDiv">
        <Retrograde />
      </div>
    </div>
  )
}

export default Cards
