import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();


export default function App() {
  const [pages] = useState([
    'About',
    'Portfolio',
    'Contact',
    'Resume',
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    

    <div className="root-child">
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>
      <main>
        {currentPage === 'About' && <About></About>}
      </main>
    </div>
  );
}


const [pages] = useState([
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: '#resume' }
]);

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        type="text"
        id="name"
        label="Name:"
        name="name"
        defaultValue={name}
        onBlur={handleChange}
        variant="filled"
      />
      <TextField
        
        type="text"
        id="email"
        label="Email address:"
        name="email"
        defaultValue={email}
        onBlur={handleChange}
        variant="filled"
      />
      <TextField
        id="message"
        label="Message:"
        name="message"
        multiline
        rows={4}
        defaultValue={message}
        onBlur={handleChange}
        variant="filled"
      />
      <Button data-testid="button" type="submit" variant="contained">Submit</Button>
    </Box>
  );
}

<section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button data-testid="button" type="submit" variant="contained">Submit</Button>
        
      </form>
    </section>