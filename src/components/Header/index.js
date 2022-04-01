import React from 'react';
import logo from '../../logo.svg';
import { AppBar, Toolbar, Box } from '@mui/material';
import Link from '@mui/material/Link';
import Nav from '../Nav';

function Header(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          
          <Link
            variant="h6"
            underline="none"
            href="/cangalet-react-portfolio"
          >
            {<img src={logo} className="App-logo" style={{ height: 60, width: 60 }} alt="logo" />} 
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Nav         
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            ></Nav>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;