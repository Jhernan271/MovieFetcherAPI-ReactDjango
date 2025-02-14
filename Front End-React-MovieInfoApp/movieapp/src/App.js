import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import AboutMe from "./Components/About";
import Contact from "./Components/Contact";
import MovieGallery from "./Components/MovieGallery";
import ContextAPIMovies from "./Components/MovieDetails";
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<ContextAPIMovies />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<MovieGallery />} />
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
        <div className="Footer">
         {/*Footer component*/}
        </div>
      </>
    </Router>
  );
}

export default App;
