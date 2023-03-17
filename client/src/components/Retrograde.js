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
          <span className="retrogradeThing">
            {' '}
            YEP, THAT MUST BE WHY EVERYTHING SUCKS.
          </span>
        </div>
      ) : (
        <div className="retrogradeAnswer">
          <span className="retrogradeTitle">IS MERCURY RETROGRADE? </span>
          <span className="retrogradeThing">
            {' '}
            NOPE, SOMETHING ELSE MUST BE BUMMING YOU OUT.
          </span>
        </div>
      )}
    </div>
  )
}

export default Retrograde
