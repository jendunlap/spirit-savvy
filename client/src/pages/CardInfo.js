import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/Nav'
import Retrograde from '../components/Retrograde'

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
    <div className="pageGrid">
      <div className="pageHeader">
        <Nav />
      </div>
      {cardInfo ? (
        <div className="pageInfo">
          <div>
            <h1>{cardInfo.name}</h1>
          </div>
          <div className="cardLongDescription">
            <h5>{cardInfo.longDescription}</h5>
          </div>
          <button className="backButton" onClick={() => navigate(-1)}>
            BACK
          </button>
        </div>
      ) : null}
      {cardInfo ? (
        <div className="pagePic">
          <img
            className="pagePic"
            src={cardInfo.image}
            alt={cardInfo.name}
          ></img>
        </div>
      ) : null}
      <div className="pageRetrogradeDiv">
        <Retrograde />
      </div>
    </div>
  )
}

export default CardInfo
