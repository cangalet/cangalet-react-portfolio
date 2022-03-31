import * as React from 'react';
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
      {pages.map((page) => (
        <Link
          component="button"
          color="#BF8F00"
          variant="h6"
          underline="none"
          onClick={() =>  {
            setCurrentPage(page)
          }} 
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
    </div>
  );
}

export default Nav;