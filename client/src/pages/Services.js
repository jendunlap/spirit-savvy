import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Service from '../components/Service'

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
    <div className="servicesGrid">
      {services ? (
        <div className="allServicesCard">
          {services.map((service) => (
            <Service
              id={service._id}
              key={service._id}
              image={service.image}
              name={service.name}
              price={service.price}
              time={service.time}
              description1={service.description1}
              description2={service.description2}
              description3={service.description3}
              onClick={viewService}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Services
