import { useNavigate, useParams } from 'react-router-dom'

const Portrait = () => {
  const goToAbout = () => {
    navigate(`/about/`)
  }

  let navigate = useNavigate()

  return (
    <div onClick={goToAbout}>
      <img
        src="https://i.imgur.com/TzWJA4e.jpeg"
        className="homePortrait"
      ></img>
    </div>
  )
}

export default Portrait
