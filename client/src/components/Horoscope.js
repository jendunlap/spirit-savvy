import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Horoscope = () => {
  let navigate = useNavigate()
  let { signsId } = useParams()
  let { signId } = useParams()
  const [signs, setSigns] = useState([])
  const [signInfo, setSignInfo] = useState(null)
  const [horoscope, setHoroscope] = useState({})
  const [modalOpen, setModalOpen] = useState(false)

  const colors = [
    '#cd6d59',
    '#de8968',
    '#da8750',
    '#e2a65c',
    '#e5be6a',
    '#bfa355',
    '#9d9d66',
    '#a7a783',
    '#acbaa8',
    '#90a1a5',
    '#6a7985',
    '#384d59'
  ]

  const backgroundColor = (sign) => {
    switch (sign) {
      case 'Aries':
        return '#cd6d59'
      case 'Taurus':
        return '#de8968'
      case 'Gemini':
        return '#da8750'
      case 'Cancer':
        return '#e2a65c'
      case 'Leo':
        return '#e5be6a'
      case 'Virgo':
        return '#bfa355'
      case 'Libra':
        return '#9d9d66'
      case 'Scorpio':
        return '#a7a783'
      case 'Sagittarius':
        return '#acbaa8'
      case 'Capricorn':
        return '#90a1a5'
      case 'Aquarius':
        return '#6a7985'
      case 'Pisces':
        return '#384d59'
      default:
        return '#000000'
    }
  }

  const signNavigate = (sign) => {
    switch (sign) {
      case 'Aries':
        navigate(`/signs/64075ea856681f54f39816a6`)
        break
      case 'Taurus':
        navigate(`/signs/64075fa956681f54f39816ab`)
        break
      case 'Gemini':
        navigate(`/signs/6407600956681f54f39816ad`)
        break
      case 'Cancer':
        navigate(`/signs/6407607e56681f54f39816af`)
        break
      case 'Leo':
        navigate(`/signs/640760f256681f54f39816b1`)
        break
      case 'Virgo':
        navigate(`/signs/6407614c56681f54f39816b3`)
        break
      case 'Libra':
        navigate(`/signs/6407619f56681f54f39816b5`)
        break
      case 'Scorpio':
        navigate(`/signs/640761f456681f54f39816b7`)
        break
      case 'Sagittarius':
        navigate(`/signs/6407625d56681f54f39816b9`)
        break
      case 'Capricorn':
        navigate(`/signs/640762b456681f54f39816bb`)
        break
      case 'Aquarius':
        navigate(`/signs/6407631c56681f54f39816bd`)
        break
      case 'Pisces':
        navigate(`/signs/6407636f56681f54f39816bf`)
        break
      default:
        break
    }
  }

  const getSigns = async () => {
    const response = await axios.get(`/signs`)
    setSigns(response.data.signs)
    console.log(response.data.signs)
  }

  const getSignInfo = async () => {
    const response = await axios.get(`/signs/${signId}`)
    setSignInfo(response.data.sign)
    console.log(response.data.sign)
  }

  useEffect(() => {
    getSigns()
  }, [signsId])

  useEffect(() => {
    getSignInfo()
  }, [signId])

  return (
    <div className="horoscopeDiv">
      <form className="signButtons">
        {signs.map((sign, index) => (
          <div
            className="signButton"
            type="button"
            name="sign"
            key={sign._id}
            value={sign}
            style={{ backgroundColor: colors[index] }}
            onClick={() => {
              setSignInfo(sign.name)
              setHoroscope(sign.horoscopeShort)
              setModalOpen(true)
            }}
          >
            {sign.name}
          </div>
        ))}
      </form>
      {modalOpen && (
        <div
          className="horoscopeModal"
          style={{ background: backgroundColor(signInfo) }}
        >
          <div
            className="horoscopeDescriptionDiv"
            onClick={() => setModalOpen(false)}
          >
            <div className="horoscopeSign">
              YOUR DAILY {signInfo.toUpperCase()} HOROSCOPE
            </div>
            <div className="horoscopeDescription">
              {/* <p>{horoscope.description}</p> */}
              <p>{horoscope}</p>
              <button
                className="dailyHoroscopeButton"
                onClick={() => signNavigate(signInfo)}
              >
                LEARN MORE ABOUT {signInfo.toUpperCase()}?
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Horoscope
