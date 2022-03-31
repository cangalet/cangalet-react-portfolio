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


