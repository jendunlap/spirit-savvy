import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Retrograde from '../components/Retrograde'

const Booking = () => {
  const [calendar, setCalendar] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => setCalendar(true)
    document.body.appendChild(script)
  }, [])

  return (
    <div className="pageGrid">
      <div className="pageHeader">
        <Nav />
      </div>
      <div className="pageInfo">
        <div
          className="calendly"
          data-url="https://calendly.com/savannahmedium?hide_landing_page_details=1&hide_gdpr_banner=1"
          style={{ minWidth: '320px', height: '630px' }}
        ></div>
      </div>
      <div className="pagePic">Photo Coming Soon</div>
      <div className="pageRetrogradeDiv">
        <Retrograde />
      </div>
    </div>
  )
}

export default Booking
