import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CardInfo = () => {
  let { cardId } = useParams()

  const [cardInfo, setCardInfo] = useState(null)

  const getCardInfo = async () => {
    const response = await axios.get(`http://localhost:3001/cards/${cardId}`)
    setCardInfo(response.data.card)
  }

  let navigate = useNavigate()

  useEffect(() => {
    getCardInfo()
  }, [cardId])

  return (
    <div className="cardInfo">
      {cardInfo ? (
        <div className="viewInfo">
          <img
            className="imageForCard"
            src={cardInfo.image}
            alt={cardInfo.name}
          ></img>
          <div className="description">
            <h5>{cardInfo.longDescription}</h5>
          </div>
        </div>
      ) : null}
      <button className="backButton" onClick={() => navigate(-1)}>
        BACK
      </button>
    </div>
  )
}

export default CardInfo
