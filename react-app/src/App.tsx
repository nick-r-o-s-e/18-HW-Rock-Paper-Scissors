import './App.scss'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import Scores from './pages/Scores/Scores';
function App() {

  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/scores" element={<Scores />} />
      </Routes>
    </div>
  )
}

export default App
