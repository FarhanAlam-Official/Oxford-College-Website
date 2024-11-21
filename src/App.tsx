import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Faculty from './components/Faculty';
import Admissions from './components/Admissions';
import Research from './components/Research';
import NewsEvents from './components/NewsEvents';
import CampusLife from './components/CampusLife';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
      <Faculty />
      <Admissions />
      <Research />
      <NewsEvents />
      <CampusLife />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;