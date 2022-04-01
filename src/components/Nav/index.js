import React from "react";
import Button from '@mui/material/Button';

function Nav(props) {
  const navLink = {
    ml: 1,
    borderRadius: 2,
  };
  
  const {
    pages = [],
    setCurrentPage,
    currentPage,
} = props;

  return (
    <div>
      <Button 
        variant="h6"
        underline="none"
        href="#about"
        onClick={() => setCurrentPage(pages[0])}
        className={`${currentPage === "About" && "navActive"}`}
        sx={navLink}
      >
        {'About'}
      </Button>
      <Button
        variant="h6"
        underline="none"
        href="#portfolio"
        onClick={() => setCurrentPage(pages[1])}
        className={`${currentPage === "Portfolio" && "navActive"}`}
        sx={navLink}
      >
        {'Portfolio'}
      </Button>
      <Button
        variant="h6"
        underline="none"
        href="#contact"
        onClick={() => setCurrentPage(pages[2])}
        className={`${currentPage === "Contact" && "navActive"}`}
        sx={navLink}
      >
        {'Contact'}
      </Button>
      <Button
        variant="h6"
        underline="none"
        href="#resume"
        onClick={() => setCurrentPage(pages[3])}
        className={`${currentPage === "Resume" && "navActive"}`}
        sx={navLink}
      >
        {'Resume'}
      </Button>
    </div>
  );
}

export default Nav;