import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Retrograde from '../components/Retrograde'
import Social from '../components/Social'

const Booking = () => {
  const [calendar, setCalendar] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    setCalendar(true)
  }, [])

  return (
    <div className="pageGrid">
      <div className="pageHeader">
        <Nav />
      </div>
      <div className="pageInfo">
        {calendar && (
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/savannahmedium?hide_landing_page_details=1&hide_gdpr_banner=1"
            style={{ minWidth: '320px', height: '100%' }}
          ></div>
        )}
      </div>
      <div className="pagePic">
        <img src="https://i.imgur.com/gSall5r.jpg" className="pagePic"></img>
      </div>
      <div className="pageRetrogradeDiv">
        <Retrograde />
      </div>
      <div className="pageSocialDiv">
        <Social />
      </div>
    </div>
  )
}

export default Booking
