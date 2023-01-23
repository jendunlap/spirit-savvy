import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Card = () => {
  const [card, setCard] = useState({})

  // useEffect(() => {
  //   const URL = 'https://rws-cards-api.herokuapp.com/api/v1/cards'
  //   axios
  //     .get(URL)
  //     .then((response) => {
  //       setCard(response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  //   console.log(response.data)
  // }, [])

  return <div>Card</div>
}

// const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`
// axios
//   .post(URL)
//   .then((response) => {
//     setHoroscope(response.data)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// }, [sign])
// console.log(horoscope)

export default Card
