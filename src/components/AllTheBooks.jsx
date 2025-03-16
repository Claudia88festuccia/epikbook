

// import React, { useState, useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';

// function AllTheBooks({ selectedGenre }) {
//   const [booksData, setBooksData] = useState([]);

//   useEffect(() => {
//     import(`./data/${selectedGenre}.json`)
//       .then((data) => setBooksData(data.default))
//       .catch((error) => console.error('Error loading book data:', error));
//   }, [selectedGenre]);

//   return (
//     <Container className="mt-4">
//       <Row xs={2} md={4} lg={6}>
//         {booksData.map((book, index) => (
//           <Col key={index} className="mb-4">
//             <Card>
//               <Card.Img variant="top" src={book.img} alt={book.title} />
//               <Card.Body>
//                 <Card.Title>{book.title}</Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default AllTheBooks;

import Dropdown from 'react-bootstrap/Dropdown';
 import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function AllTheBooks({ selectedGenre, setSelectedGenre }) {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    import(`./data/${selectedGenre}.json`)
      .then((data) => setBooksData(data.default))
      .catch((error) => console.error('Error loading book data:', error));
  }, [selectedGenre]);

  return (
    <Container className="mt-4">
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
        {booksData.map((book, index) => (
          <Col key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
 export default AllTheBooks;