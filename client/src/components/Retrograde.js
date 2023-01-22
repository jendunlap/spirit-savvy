import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Retrograde = () => {
  const [isRetrograde, setIsRetrograde] = useState([])

  const getRetrograde = async () => {
    const response = await axios.get(`https://mercuryretrogradeapi.com`)
    setIsRetrograde(response.data.is_retrograde)
    console.log(response.data.is_retrograde)
    console.log(response.data)
  }

  useEffect(() => {
    getRetrograde()
  }, [])

  return (
    <div>
      <h3>Is Mercury Retrograde?</h3>
      {isRetrograde ? (
        <div>"Yep, that must be why everything sucks"</div>
      ) : (
        <div>"Nope, something else must be bumming you out"</div>
      )}
    </div>
  )
}

export default Retrograde
