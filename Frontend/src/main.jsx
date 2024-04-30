import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { PrimeReactProvider } from 'primereact/api';

ReactDOM.createRoot(document.getElementById('root')).render(

  <PrimeReactProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
  </PrimeReactProvider>
)


