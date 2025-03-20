


import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';

function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);

  return (
    <Card 
      style={{ 
        width: '18rem', 
        border: selected ? '3px solid red' : 'none',
        cursor: 'pointer' 
      }}
      onClick={() => setSelected(!selected)}
    >
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price} € {book.category}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
