import React from "react";
import Link from '@mui/material/Link';

function Nav(props) {
  const navLink = {
    fontSize: 16,
    ml: 3,
  };
  
  const {
    pages = [],
    setCurrentPage,
    currentPage,
} = props;

  return (
    <div>
      <Link
        color="inherit"
        variant="h6"
        underline="none"
        href="#about"
        onClick={() => setCurrentPage(pages[0])}
        className={`${currentPage === "About" && "navActive"}`}
        sx={navLink}
      >
        {'About'}
      </Link>
      <Link
        color="inherit"
        variant="h6"
        underline="none"
        href="#portfolio"
        onClick={() => setCurrentPage(pages[1])}
        className={`${currentPage === "Portfolio" && "navActive"}`}
        sx={navLink}
      >
        {'Portfolio'}
      </Link>
      <Link
        color="inherit"
        variant="h6"
        underline="none"
        href="#contact"
        onClick={() => setCurrentPage(pages[2])}
        className={`${currentPage === "Contact" && "navActive"}`}
        sx={navLink}
      >
        {'Contact'}
      </Link>
      <Link
        color="inherit"
        variant="h6"
        underline="none"
        href="#resume"
        onClick={() => setCurrentPage(pages[3])}
        className={`${currentPage === "Resume" && "navActive"}`}
        sx={navLink}
      >
        {'Resume'}
      </Link>
    </div>
  );
}

export default Nav;