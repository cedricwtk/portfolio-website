import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './assets/pages/Home';
import Footer from './components/Footer';

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
      <Footer/>
    </Router>
  );
}

export default App;
