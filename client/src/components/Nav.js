import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

const Nav = () => {
  const goToHome = () => {
    navigate(`/`)
  }

  let navigate = useNavigate()

  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <header className="header">
      <h1 onClick={goToHome} className="homeLink">
        SAVANNAH MEDIUM
      </h1>
      <nav className="headerLinks">
        <img
          src="https://i.imgur.com/s8R9vAs.jpg"
          className="headerDrop"
          onClick={() => setShowDropdown(!showDropdown)}
        ></img>
        {showDropdown && (
          <div className="dropdown">
            <Link
              to="/"
              className="headerLink"
              style={{ backgroundColor: '#6a7985' }}
              onClick={() => setShowDropdown(false)}
            >
              HOME
            </Link>
            <Link
              to="/tarot"
              className="headerLink"
              style={{ backgroundColor: '#90a1a5' }}
              onClick={() => setShowDropdown(false)}
            >
              TAROT
            </Link>
            <Link
              to="/horoscope"
              className="headerLink"
              style={{ backgroundColor: '#9d9d66' }}
              onClick={() => setShowDropdown(false)}
            >
              HOROSCOPE
            </Link>
            <Link
              to="/services"
              className="headerLink"
              style={{ backgroundColor: '#bfa355' }}
              onClick={() => setShowDropdown(false)}
            >
              SERVICES
            </Link>
            <Link
              to="/booking"
              className="headerLink"
              style={{ backgroundColor: '#e5be6a' }}
              onClick={() => setShowDropdown(false)}
            >
              BOOKING
            </Link>
            <Link
              to="/reviews"
              className="headerLink"
              style={{ backgroundColor: '#e2a65c' }}
              onClick={() => setShowDropdown(false)}
            >
              REVIEWS
            </Link>
            <Link
              to="/about"
              className="headerLink"
              style={{ backgroundColor: '#de8968' }}
              onClick={() => setShowDropdown(false)}
            >
              ABOUT
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Nav
