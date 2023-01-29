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
        Savannah Medium
      </h1>
      <nav className="headerLinks">
        <div
          className="headerLink"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          MENU
        </div>
        {showDropdown && (
          <div className="dropdown">
            <Link
              to="/"
              className="headerLink"
              onClick={() => setShowDropdown(false)}
            >
              HOME
            </Link>
            <Link
              to="/tarot"
              className="headerLink"
              onClick={() => setShowDropdown(false)}
            >
              TAROT
            </Link>
            <Link
              to="/services"
              className="headerLink"
              onClick={() => setShowDropdown(false)}
            >
              SERVICES
            </Link>
            <Link
              to="/booking"
              className="headerLink"
              onClick={() => setShowDropdown(false)}
            >
              BOOKING
            </Link>
            <Link
              to="/reviews"
              className="headerLink"
              onClick={() => setShowDropdown(false)}
            >
              REVIEWS
            </Link>
            <Link
              to="/about"
              className="headerLink"
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
