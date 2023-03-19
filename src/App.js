import React, { useState } from 'react';
import ContactList from './components/ContactList';
import './App.css';

//material UI imports
import { Box, Button } from '@mui/material';


function App() {
  return (
    <div className="App">
      <ContactList></ContactList>
    </div>
  );
}

export default App;
