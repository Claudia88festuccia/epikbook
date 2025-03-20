


import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleBook from './SingleBook';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AllTheBooks({ selectedGenre, setSelectedGenre }) {
  const [booksData, setBooksData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    import(`./data/${selectedGenre}.json`)
      .then((data) => setBooksData(data.default))
      .catch((error) => console.error('Error loading book data:', error));
  }, [selectedGenre]);

  const filteredBooks = booksData.filter((book) => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Cerca</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Cerca un libro..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Cerca un libro"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      
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
      
      <Row xs={2} md={4} lg={6}>
        {filteredBooks.map((book, index) => (
          <SingleBook key={index} book={book} />
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
