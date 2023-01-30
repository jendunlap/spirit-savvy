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
    const response = await axios.get(`http://localhost:3001/services`)
    setServices(response.data.services)
    console.log(response.data.services)
  }

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
        <div className="pageInfo">
          <div className="allServicesCard">
            {services.map((service) => (
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
                <h1 className="pageAbout">{service.name}</h1>
                <h2 className="serviceTime">{service.time}</h2>
                <h2 className="servicePrice">{service.price}</h2>
                <p className="pageInfoP serviceTagline">
                  {service.description1}
                </p>
                <p className="pageInfoP">{service.description2}</p>
                <p className="pageInfoP">{service.description3}</p>
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
