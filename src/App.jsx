import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './TopBar/Topbar';
import Index from './NavBar/Index';
import Home from './Components/Home';
import About from './pages/About';
import Countries from './pages/Countriesworld';
import Coaching from './pages/Coaching';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import FooterNav from './Components/FooterNav'
import Schengen from './pages/Schengen';
import News from './pages/News';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      {/* Topbar and Navbar will always be visible */}
      <Topbar />
      <Index />

      {/* Define Routes for dynamic rendering */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/Visa" element={<Schengen />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/NEWS" element={<News />} />
        <Route path="/Contact" element={<ContactUs />}/>
        
        
      </Routes>

      {/* FooterNav will always be visible */}

      <Contact/>
      <FooterNav />
    </Router>
  );
}

export default App;
