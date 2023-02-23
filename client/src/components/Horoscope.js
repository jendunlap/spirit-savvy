import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Horoscope = () => {
  const [sign, setSign] = useState('Aries')
  const [horoscope, setHoroscope] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const signs = [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
    'Aquarius',
    'Pisces'
  ]

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

  useEffect(() => {
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=Today`
    axios
      .post(URL)
      .then((response) => {
        setHoroscope(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [sign])

  const getBackgroundColor = (sign) => {
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

  return (
    <div className="horoscopeDiv">
      <form className="signButtons">
        {signs.map((sign, index) => (
          <input
            className="signButton"
            type="button"
            name="sign"
            value={sign}
            style={{ background: colors[index] }}
            onClick={(e) => {
              setSign(e.target.value)
              setModalOpen(true)
            }}
          />
        ))}
      </form>
      {modalOpen && (
        <div
          className="horoscopeModal"
          style={{ background: getBackgroundColor(sign) }}
        >
          {/* <div>{horoscope.name}</div> */}
          <div
            className="horoscopeDescription"
            onClick={() => setModalOpen(false)}
          >
            {horoscope.description}
          </div>
        </div>
      )}
    </div>
  )
}

export default Horoscope
