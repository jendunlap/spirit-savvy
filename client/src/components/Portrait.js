import { useNavigate, useParams } from 'react-router-dom'

const Portrait = () => {
  const goToAbout = () => {
    navigate(`/about/`)
  }

  let navigate = useNavigate()

  return <div onClick={goToAbout} className="homePortraitDiv"></div>
}

export default Portrait
