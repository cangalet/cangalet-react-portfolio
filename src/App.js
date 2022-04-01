import React, { useState } from "react";
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import {Box, Container, CssBaseline} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#bdbdbd',
      dark: '#d9a200',
      contrastText: '#fff',
    },
    secondary: {
      light: '#d9a200',
      main: '#BF8F00',
      dark: '#d9a200',
      contrastText: '#fff',
    },
  },
});

export default function App() {
  // States used to render page nav and page components
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
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Container sx={{ py: 8 }} maxWidth="md">
        <main>
        {/* About unit */}
        {currentPage === 'About' && <About></About>}
        {currentPage === 'Contact' && <Contact></Contact>}
        {currentPage === 'Portfolio' && <Portfolio></Portfolio>}
        {currentPage === 'Resume' && <Resume></Resume>}
        {/* End About unit */}
        </main>
        </Container>
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  );
}