import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Horoscope = () => {
  const intialState = {
    sign: ''
  }

  const [sign, setSign] = useState('Aries')
  const [day, setDay] = useState('Today')
  const [horoscope, setHoroscope] = useState({})
  // const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`
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
    <div>
      <h3>Get your Horoscope!</h3>
      <form>
        <label>
          Sign:
          <select value={sign} onChange={(e) => setSign(e.target.value)}>
            <option value="aries">Aries</option>
            <option value="taurus">Taurus</option>
            <option value="gemini">Gemini</option>
            <option value="cancer">Cancer</option>
            <option value="leo">Leo</option>
            <option value="virgo">Virgo</option>
            <option value="libra">Libra</option>
            <option value="scorpio">Scorpio</option>
            <option value="sagittarius">Sagittarius</option>
            <option value="capricorn">Capricorn</option>
            <option value="aquarius">Aquarius</option>
            <option value="pisces">Pisces</option>
          </select>
        </label>
        {/* <label>
          Day:
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="yesterday">Yesterday</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
          </select>
        </label> */}
      </form>
      <div>{horoscope.description}</div>
    </div>
  )
}

export default Horoscope
