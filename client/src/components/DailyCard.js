import { useEffect, useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'

const DailyCard = () => {
  const [card, setCard] = useState()
  const [modalOpen, setModalOpen] = useState(false)

  const getCard = async () => {
    const response = await axios.get(`/cards`)
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
        <div className="dailyCardDiv">
          <img
            className="dailyCardImage"
            src={card.image}
            alt={card.name}
            key={card.name}
            onClick={(e) => {
              setModalOpen(true)
            }}
          ></img>
          {modalOpen && (
            <div className="cardModal">
              <div
                className="dailyCardText"
                onClick={() => setModalOpen(false)}
              >
                {card.description}
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default DailyCard
