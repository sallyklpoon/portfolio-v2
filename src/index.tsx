import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BaseLayout } from './components/layout/BaseLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider>
    <BaseLayout>
      <App />
    </BaseLayout>
  </ChakraProvider>
);
