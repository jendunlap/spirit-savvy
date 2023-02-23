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
        <div className="retrogradeAnswer">
          <span className="retrogradeTitle">IS MERCURY RETROGRADE? </span>
          <span> Yep, that must be why everything sucks.</span>
        </div>
      ) : (
        <div className="retrogradeAnswer">
          <span className="retrogradeTitle">IS MERCURY RETROGRADE? </span>
          <span> Nope, something else must be bumming you out.</span>
        </div>
      )}
    </div>
  )
}

export default Retrograde
