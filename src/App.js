import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './assets/pages/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/portfolio"/>
      <Route path="/contact" />
      <Route path="/about" />
      </Routes>
    </Router>
  );
}

export default App;
