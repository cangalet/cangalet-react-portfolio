import * as React from 'react';
import logo from '../../logo.svg';
import { AppBar, Toolbar, Box } from '@mui/material';
import Link from '@mui/material/Link';

const navLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function Nav(props) {
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
            color="inherit"
            href="/premium-themes/onepirate/"
          >
            {<img src={logo} className="App-logo" style={{ height: 60, width: 60 }} alt="logo" />}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Link
              color="inherit"
              variant="h6"
              underline="none"
              sx={navLink}
              >
              {page.name}
              </Link>
            ))}
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-in/"
              sx={navLink}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={navLink}
            >
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Nav;