
import React, { useState } from 'react';
import './App.css';
import AllTheBooks from './components/AllTheBooks';
import FooterContainer from './components/MyFooter';
import NavContainer from './components/MyNav';
import BasicAlert from './components/Welcom';
import Dropdown from 'react-bootstrap/Dropdown';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('fantasy');

  return (
    <>
      <NavContainer />
      <BasicAlert />

      <Dropdown className="mb-3 text-center">
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Seleziona Genere
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {['fantasy', 'horror', 'romance', 'history', 'scifi'].map((genre) => (
            <Dropdown.Item key={genre} onClick={() => setSelectedGenre(genre)}>
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <AllTheBooks selectedGenre={selectedGenre} />
      <FooterContainer />
    </>
  );
}

export default App;
