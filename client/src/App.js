import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Reviews from './pages/Reviews'
import Services from './pages/Services'
import Signs from './pages/Signs'
import Posts from './pages/Posts'
import Cards from './pages/Cards'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signs" element={<Signs />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
