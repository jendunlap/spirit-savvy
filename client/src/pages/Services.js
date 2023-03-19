import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Service from '../components/Service'
import Nav from '../components/Nav'
import Retrograde from '../components/Retrograde'
import Social from '../components/Social'

const Services = () => {
  const [services, setServices] = useState([])

  let navigate = useNavigate()
  let { servicesId } = useParams()

  const getServices = async () => {
    const response = await axios.get(`/services`)
    setServices(response.data.services)
    console.log(response.data.services)
  }

  const colors = [
    '#cd6d59',
    '#de8968',
    '#da8750',
    '#e2a65c',
    '#e5be6a',
    '#bfa355',
    '#9d9d66',
    '#a7a783',
    '#acbaa8',
    '#90a1a5',
    '#6a7985',
    '#384d59'
  ]

  const viewService = (id) => {
    navigate(`/services/${id}`)
  }

  useEffect(() => {
    getServices()
  }, [servicesId])

  return (
    <div className="pageGrid">
      <div className="pageHeader">
        <Nav />
      </div>
      {services ? (
        <div className="cardPageInfo">
          <div className="cardPageHeader">
            <div className="aboutContainer">
              <h1 className="signsPageAbout">SERVICES</h1>
            </div>
            <button
              className="reverseButton"
              onClick={() => navigate(`/booking`)}
            >
              BOOK NOW
            </button>
          </div>
          <div className="allServicesCard aboutInfo">
            {services.map((service, index) => (
              <div>
                <Service
                  id={service._id}
                  key={service._id}
                  image={service.image}
                  // name={service.name}
                  // price={service.price}
                  // time={service.time}
                  // description1={service.description1}
                  // description2={service.description2}
                  // description3={service.description3}
                  // onClick={viewService}
                />
                <h1 className="pageAbout" style={{ background: colors[index] }}>
                  {service.name}
                </h1>
                <p className="serviceTagline">{service.description1}</p>
                <p className="pageInfoP">{service.description2}</p>
                <p className="pageInfoP">{service.description3}</p>
                <h2 className="serviceTime">{service.time}</h2>
                <h2 className="servicePrice">{service.price}</h2>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div className="pagePic">
        <img src="https://i.imgur.com/HwAv2k4.jpg" className="pagePic"></img>
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

export default Services
