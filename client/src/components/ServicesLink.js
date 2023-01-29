import { useNavigate, useParams } from 'react-router-dom'

const ServicesLink = () => {
  const goToServices = () => {
    navigate(`/services/`)
  }

  let navigate = useNavigate()

  return (
    <div className="servicesHome" onClick={goToServices}>
      <img
        className="servicesHomeImage"
        src="https://i.imgur.com/QGfA4DS.png"
      ></img>
      <h1 className="servicesLink">services</h1>
    </div>
  )
}

export default ServicesLink
