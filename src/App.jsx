import React from 'react';
import Analytics from './Components/Analytics';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import NewsLetter from './Components/NewsLetter';


function App() {
  return(
    <div >
      <NavBar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Card />
      <Footer />
    </div>
  );
}
export default App
