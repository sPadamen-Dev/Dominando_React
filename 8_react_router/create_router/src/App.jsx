import './App.css';

// 1 - config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 2 - import pages
import Home from './assets/pages/Home';
import About from './assets/pages/About';

// 3 - import components
import Navbar from './assets/components/Navbar';

const App = () => {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App