import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Packages from './components/Packages';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import '@fontsource/cormorant-garamond';
import '@fontsource/montserrat';
import '@fontsource/dancing-script';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Packages />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;