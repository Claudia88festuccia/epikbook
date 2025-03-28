import React, { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';
import { FilterContext } from './context';

function LatestRelease() {
  const { selectedGenre, setSelectedGenre, searchTerm } = useContext(FilterContext);
  const [booksData, setBooksData] = useState([]);
  const [selected, setSelected] = useState(null); // Ora `selected` contiene l'ASIN del libro selezionato

  useEffect(() => {
    import(`./data/${selectedGenre}.json`)
      .then((data) => setBooksData(data.default))
      .catch((error) => console.error('Errore nel caricamento dei dati:', error));
  }, [selectedGenre]);

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
      {/* Dropdown per selezionare il genere */}
      <Dropdown className="mb-3">
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

      {/* Layout a due colonne: libri a sinistra, CommentArea a destra */}
      <Row>
        <div style={{ width: '70%' }}>
          <Row xs={2} md={4} lg={6}>
            {filteredBooks.map((book) => (
              <SingleBook key={book.asin} book={book} selected={selected} setSelected={setSelected} />
            ))}
          </Row>
        </div>
        <div style={{ width: '30%', paddingLeft: '20px' }}>
          {/* CommentArea mostra sempre i commenti del libro selezionato */}
          <CommentArea asin={selected} />
        </div>
      </Row>
    </Container>
  );
}

export default LatestRelease;
