import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './assets/pages/Home';
import Portfolio from './assets/pages/Portfolio';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" />
        <Route path="/about" />
      </Routes>
    </Router>
  );
}

export default App;
