import { useNavigate, useParams } from 'react-router-dom'

const Portrait = () => {
  const goToAbout = () => {
    navigate(`/about/`)
  }

  let navigate = useNavigate()

  return (
    <img
      onClick={goToAbout}
      // src="https://i.imgur.com/4HAWH3s.jpg"
      src="https://i.imgur.com/TzWJA4e.jpeg"
      className="homePortrait"
    ></img>
  )
}

export default Portrait
