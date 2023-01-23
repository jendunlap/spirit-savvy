import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ServiceInfo = () => {
  let { servicesId } = useParams()

  const [serviceInfo, setServiceInfo] = useState(null)

  const getServiceInfo = async () => {
    const response = await axios.get(
      `http://localhost:3001/services/${servicesId}`
    )
    setServiceInfo(response.data.service)
  }

  let navigate = useNavigate()

  useEffect(() => {
    getServiceInfo()
  }, [servicesId])

  return (
    <div className="serviceInfo">
      {serviceInfo ? (
        <div className="viewServiceInfo">
          {/* <img
            className="imageForService"
            src={serviceInfo.image}
            alt={serviceInfo.name}
          ></img> */}
          <div className="serviceName">
            <h1>{serviceInfo.name}</h1>
          </div>
          <div className="serviceDescription">
            <h2>{serviceInfo.time}</h2>
            <h2>{serviceInfo.price}</h2>
            <h5>{serviceInfo.description1}</h5>
            <p>{serviceInfo.description2}</p>
            <p>{serviceInfo.description3}</p>
          </div>
        </div>
      ) : null}
      <button className="backButton" onClick={() => navigate(-1)}>
        BACK
      </button>
    </div>
  )
}

export default ServiceInfo
