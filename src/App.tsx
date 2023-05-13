import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Works from './components/Works/Works';
import About from './components/About/About';

const App: React.FC = () => {
  return (
    <>
      <Hero />
      <Works />
      <About />
    </>
  );
}

export default App;
