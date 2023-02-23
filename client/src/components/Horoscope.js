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
  console.log(horoscope)

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
        <div className="horoscopeModal">
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
