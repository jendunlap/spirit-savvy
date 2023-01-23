import { useEffect, useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'

const DailyCard = () => {
  // let navigate = useNavigate()
  // let { cardId } = useParams()

  // const viewCard = (id) => {
  //   navigate(`http://localhost:3001/cards/${id}`)
  // }

  const [card, setCard] = useState()

  const getCard = async () => {
    const response = await axios.get(`http://localhost:3001/cards`)
    setCard(
      response.data.cards[
        Math.floor(Math.random() * response.data.cards.length)
      ]
    )
  }

  useEffect(() => {
    getCard()
  }, [])

  console.log(card)

  return (
    <div className="dailyCard">
      {card ? (
        <img className="dailyCardImage" src={card.image} alt={card.name}></img>
      ) : null}
    </div>
  )
}

export default DailyCard
