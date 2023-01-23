import { useEffect, useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'

const DailyCard = () => {
  const [card, setCard] = useState()

  // let navigate = useNavigate()
  // let { cardId } = useParams()

  const getCard = async () => {
    const response = await axios.get(`http://localhost:3001/cards`)
    setCard(
      response.data.cards[
        Math.floor(Math.random() * response.data.cards.length)
      ]
    )
  }

  // const viewCard = (id) => {
  //   navigate(`/cards/${id}`)
  // }

  useEffect(() => {
    getCard()
  }, [])

  console.log(card)

  return (
    <div className="dailyCard">
      {card ? (
        <div>
          <img
            className="dailyCardImage"
            src={card.image}
            alt={card.name}
          ></img>
          <p>{card.description}</p>
        </div>
      ) : null}
    </div>
  )
}

export default DailyCard
