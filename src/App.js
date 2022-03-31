import React, { useState } from "react";
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import {Box, Container, CssBaseline} from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#e3e3e3',
      dark: '#002884',
      contrastText: '#BF8F00',
    },
    secondary: {
      light: '#d9a200',
      main: '#BF8F00',
      dark: '#856400',
      contrastText: '#fff',
    },
  },
});

export default function App() {
  const [pages] = useState([
    'About',
    'Portfolio',
    'Contact',
    'Resume',
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 16,
          pb: 6,
        }}
      >
        <Container sx={{ py: 8 }} maxWidth="md">
        <main>
        {/* About unit */}
        {currentPage === 'About' && <About></About>}
        {currentPage === 'Contact' && <Contact></Contact>}
        {/* End About unit */}
        <Portfolio></Portfolio>
        </main>
        </Container>
      </Box>
      <Footer></Footer>
    </ThemeProvider>
  );
}