import { useNavigate, useParams } from 'react-router-dom'

const ServicesLink = () => {
  const goToServices = () => {
    navigate(`/services/`)
  }

  let navigate = useNavigate()

  return (
    <div onClick={goToServices}>
      <h1>Services</h1>
    </div>
  )
}

export default ServicesLink
