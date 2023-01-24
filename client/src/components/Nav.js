import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

const Nav = () => {
  const goToHome = () => {
    navigate(`/`)
  }

  let navigate = useNavigate()

  return (
    <header className="header">
      <h1 onClick={goToHome} className="homeLink">
        GET SPIRIT SAVVY BITCHES!!
      </h1>
      <nav className="headerLinks">
        <Link to="/" className="headerLink">
          HOME
        </Link>
        <Link to="/tarot" className="headerLink">
          TAROT
        </Link>
        <Link to="/services" className="headerLink">
          SERVICES
        </Link>
        <Link to="/booking" className="headerLink">
          BOOKING
        </Link>
        <Link to="/reviews" className="headerLink">
          REVIEWS
        </Link>
        <Link to="/about" className="headerLink">
          ABOUT
        </Link>
      </nav>
    </header>
  )
}

export default Nav
