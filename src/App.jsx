import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactUS';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <HomeSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </div>
      <Footer /> {/* Add the Footer component here */}
    </>
  );
};

export default App;
