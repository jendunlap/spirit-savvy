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
      </nav>
    </header>
  )
}

export default Nav
