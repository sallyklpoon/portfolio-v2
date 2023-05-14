import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Works from './components/Works/Works';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Box } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <>
      <Toaster />
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
