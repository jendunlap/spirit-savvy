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
    <div className="retrogradeQuestion">
      {isRetrograde ? (
        <p>IS MERCURY RETROGRADE? Yep, that must be why everything sucks</p>
      ) : (
        <p>
          IS MERCURY RETROGRADE? Nope, something else must be bumming you out
        </p>
      )}
    </div>
  )
}

export default Retrograde
