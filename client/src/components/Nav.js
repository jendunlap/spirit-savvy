import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="headerLink">
          HOME
        </Link>
        <Link to="/tarot" className="headerLink">
          TAROT
        </Link>
        <Link to="/services" className="headerLink">
          SERVICES
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
