import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Works from './components/Works/Works';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Box } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <>
      <Box
        px='12'
      >
        <Hero />
        <Works />
        <About />
      </Box>

      <Contact />
    </>
  );
}

export default App;
