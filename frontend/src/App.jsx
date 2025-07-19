import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TopMovies from './pages/TopMovies';
import Genres from './pages/Genres';
import About from './pages/About';

function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/top' element={<TopMovies />} />
      <Route path='/genres' element={<Genres />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </Router>
  );
}

export default App;
