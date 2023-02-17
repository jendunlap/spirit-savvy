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
        {signs.map((sign) => (
          <input
            className="signButton"
            type="button"
            name="sign"
            value={sign}
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
