

import React, { useState } from 'react';
import './App.css';
import AllTheBooks from './components/AllTheBooks';
import FooterContainer from './components/MyFooter';
import NavContainer from './components/MyNav';
import BasicAlert from './components/Welcom';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('fantasy');

  return (
    <>
      <NavContainer />
      <BasicAlert />
      <AllTheBooks selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
      <FooterContainer />
    </>
  );
}

export default App;
