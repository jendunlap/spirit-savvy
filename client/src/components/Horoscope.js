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
    '#872a22',
    '#b54338',
    '#a25b2a',
    '#e2983e',
    '#edbd5a',
    '#b9993d',
    '#a28338',
    '#999859',
    '#a9bba6',
    '#a6caca',
    '#667a86',
    '#324e5a',
    '#483746'
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
