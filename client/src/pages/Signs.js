import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Sign from '../components/Sign'
import Nav from '../components/Nav'
import Retrograde from '../components/Retrograde'
import Social from '../components/Social'

const Signs = () => {
  const [signs, setSigns] = useState([])
  const [search, setSearch] = useState('')

  let navigate = useNavigate()
  let { signsId } = useParams()

  const getSigns = async () => {
    const response = await axios.get(`/signs`)
    setSigns(response.data.signs)
    console.log(response.data.signs)
  }

  const viewSign = (id) => {
    navigate(`/signs/${id}`)
  }

  useEffect(() => {
    getSigns()
  }, [signsId])

  return (
    <div className="pageGrid">
      <div className="pageHeader">
        <Nav />
      </div>
      <div className="cardPageInfo">
        <div className="cardPageHeader">
          <div className="aboutContainer">
            <h1 className="cardsPageAbout">STAR SIGNS</h1>
            <p></p>
          </div>
          <input
            className="searchButton"
            type="text"
            placeholder="SEARCH SIGNS"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="allCardsCard">
          {signs
            .filter((sign) =>
              sign.name.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => a.number - b.number)
            .map((sign) => (
              <div className="allCardsDiv" key={sign._id}>
                <Sign id={sign._id} key={sign._id} onClick={viewSign} />
                <img
                  src={sign.image}
                  className="cardsPageImage"
                  onClick={() => viewSign(sign._id)}
                ></img>
                <p className="cardsPageName" onClick={() => viewSign(sign._id)}>
                  {sign.name}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="cardsPagePic">
        <img
          src="https://i.imgur.com/i8ommXT.jpg"
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

export default Signs
