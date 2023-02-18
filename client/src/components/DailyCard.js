import { useEffect, useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'

const DailyCard = () => {
  const [card, setCard] = useState()
  const [modalOpen, setModalOpen] = useState(false)

  let navigate = useNavigate()
  let { cardsId } = useParams()

  const getCard = async () => {
    const response = await axios.get(`/cards`)
    setCard(
      response.data.cards[
        Math.floor(Math.random() * response.data.cards.length)
      ]
    )
  }

  const viewCard = (id) => {
    navigate(`/cards/${id}`)
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
                <p className="dailyCardName">{card.name}</p>
                <p className="dailyCardDescrption">{card.description}</p>
                <button
                  className="dailyCardButton"
                  onClick={() => viewCard(card._id)}
                >
                  Learn More About {card.name}
                </button>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default DailyCard
