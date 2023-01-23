import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Cards from './pages/Cards'
import CardInfo from './pages/CardInfo'
import Reviews from './pages/Reviews'
import About from './pages/About'
import Services from './pages/Services'
import ServiceInfo from './pages/ServiceInfo'
import Booking from './pages/Booking'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarot" element={<Cards />} />
          <Route path="/cards/:cardId" element={<CardInfo />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/services/:servicesId" element={<ServiceInfo />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
