import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
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
    <div className="root-child">
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
