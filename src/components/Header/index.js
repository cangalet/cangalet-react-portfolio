import React, { useState } from 'react';
import logo from '../../logo.svg';
import { AppBar, Toolbar, Box } from '@mui/material';
import Link from '@mui/material/Link';
import Nav from '../Nav';

function Header(props) {
  const [pages] = useState([
    {
      name: 'About',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'Portfolio', description: 'Portraits of people in my life' },
    { name: 'Contact', description: 'Delicious delicacies' },
    { name: 'Resume', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
          >
            {<img src={logo} className="App-logo" style={{ height: 60, width: 60 }} alt="logo" />} 
          </Link>
          <Nav         
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          ></Nav>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Header;