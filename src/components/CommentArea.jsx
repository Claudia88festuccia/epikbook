// CommentArea deve eseguire una fetch (useEffect) e salvare tutte le recensioni del libro 
// all'interno del suo stato. Deve inoltre renderizzare altri due componenti dentro di sé
// : CommentList e AddComment.


// Il tuo endpoint per tutto il CRUD si trova su:
// GET https://striveschool-api.herokuapp.com/api/books/:asin/comments/
// POST https://striveschool-api.herokuapp.com/api/comments con il body che trovi nella prossima
// slide.
// PUT e DELETE https://striveschool-aci.herokuapp.com/api/comments/:id
// Ciò significa che puoi effettuare operazioni di GET, DELETE, POST e PUT.
// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
//   headers: {
//   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkYmNmZDM4MzRiZjAwMTUwMDBhNWYiLCJpYXQiOjE3NDI1ODUwODUsImV4cCI6MTc0Mzc5NDY4NX0.hvzD-aoHTdHKjeP6dUDWO-eAy5Yp-2zt9SfMP5BqSRI"
//   }
//   })


import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Spinner from 'react-bootstrap/Spinner';

function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!asin) {
      setComments([]); // Se nessun libro è selezionato, svuotiamo i commenti
      return;
    }

    setLoading(true);

    fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkYmNmZDM4MzRiZjAwMTUwMDBhNWYiLCJpYXQiOjE3NDI1ODUwODUsImV4cCI6MTc0Mzc5NDY4NX0.hvzD-aoHTdHKjeP6dUDWO-eAy5Yp-2zt9SfMP5BqSRI" }
    })
    .then((response) => response.json())
    .then((data) => {
      setComments(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, [asin]);

  return (
    <div>
    {loading && <Spinner animation="border" />}
    {error && <p>Error: {error}</p>}
    {!loading && !error && (
      <>
        <CommentList comments={comments} refreshComments={() => setComments([])} />
        <AddComment asin={asin} refreshComments={() => setComments([])} />
      </>
    )}
  </div>
);
}

export default CommentArea;