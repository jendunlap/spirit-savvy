import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Retrograde from './components/Retrograde'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/retrograde" element={<Retrograde />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
