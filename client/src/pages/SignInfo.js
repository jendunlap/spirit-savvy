import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/Nav'
import Retrograde from '../components/Retrograde'
import Social from '../components/Social'

const SignInfo = () => {
  const locale = 'en-US'
  const options = {
    month: 'long',
    day: 'numeric'
  }

  const dateFormatter = new Intl.DateTimeFormat(locale, options)
  const currentDate = new Date()
  const formattedDate = dateFormatter.format(currentDate).toUpperCase()

  let { signId } = useParams()

  const [signInfo, setSignInfo] = useState(null)
  const [signsList, setSignsList] = useState([])
  const [currentSignNumber, setCurrentSignNumber] = useState(null)

  const getSignInfo = async () => {
    const response = await axios.get(`/signs/${signId}`)
    setSignInfo(response.data.sign)
    console.log(response.data.sign)
    const signsResponse = await axios.get(`/signs`)
    const filteredSigns = signsResponse.data.signs.sort(
      (a, b) => a.number - b.number
    )
    setSignsList(filteredSigns)
    const currentSignIndex = filteredSigns.findIndex(
      (sign) => sign.number === response.data.sign.number
    )
    setCurrentSignNumber(currentSignIndex)
  }

  let navigate = useNavigate()

  useEffect(() => {
    getSignInfo()
  }, [signId])

  return (
    <div className="pageGrid">
      <div className="pageHeader">
        <Nav />
      </div>
      {signInfo ? (
        <div className="cardPageInfo">
          <div className="cardPageHeader">
            <div className="aboutContainer">
              <h1 className="signsPageAbout">{signInfo.name.toUpperCase()}</h1>
            </div>
            <h2 className="reverseButton">{signInfo.dates}</h2>
          </div>
          <div className="cardLongDescription">
            <p className="todaysHoroscope">
              {signInfo.name.toUpperCase()} HOROSCOPE {formattedDate}
            </p>
            <h5 className="pageInfoP">{signInfo.horoscope}</h5>
            <p className="moreAbout">
              MORE ABOUT {signInfo.name.toUpperCase()}
            </p>
            <h5 className="pageInfoP">{signInfo.description1}</h5>
            <h5 className="pageInfoP">{signInfo.description2}</h5>
            <h5 className="pageInfoP">{signInfo.description3}</h5>
          </div>
          <div className="backButtonContainer">
            {currentSignNumber >= 1 ? (
              <button
                className="previousButton backButton"
                onClick={() =>
                  navigate(`/signs/${signsList[currentSignNumber - 1]._id}`)
                }
              >
                {signsList[currentSignNumber - 1]?.name}
              </button>
            ) : (
              <button
                className="previousButton backButton"
                onClick={() =>
                  navigate(`/signs/${signsList[signsList.length - 1]._id}`)
                }
              >
                {signsList[signsList.length - 1]?.name}
              </button>
            )}
            <button
              className="backButton"
              onClick={() => navigate(`/horoscope`)}
            >
              ALL SIGNS
            </button>
            {currentSignNumber < signsList.length - 1 ? (
              <button
                className="nextButton backButton"
                onClick={() =>
                  navigate(`/signs/${signsList[currentSignNumber + 1]._id}`)
                }
              >
                {signsList[currentSignNumber + 1]?.name}
              </button>
            ) : (
              <button
                className="nextButton backButton"
                onClick={() => navigate(`/signs/${signsList[0]._id}`)}
              >
                {signsList[0]?.name}
              </button>
            )}
          </div>
        </div>
      ) : null}
      {signInfo ? (
        <div className="cardPagePic">
          <img
            className="cardPagePic2"
            src={signInfo.image}
            alt={signInfo.name}
          ></img>
        </div>
      ) : null}
      <div className="pageRetrogradeDiv">
        <Retrograde />
      </div>
      <div className="pageSocialDiv">
        <Social />
      </div>
    </div>
  )
}

export default SignInfo
