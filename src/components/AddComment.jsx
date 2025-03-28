// AddComment conterrà un form per raccogliere il testo della recensione e la valutazione da 1 a 5;
//  una volta raccolti i dati, tramite
//  un pulsante (onClick!) verrà effettuata una chiamata POST per inviare la recensione alle API.



import React, { useState } from 'react';


function AddComment({ asin, refreshComments }) {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);
  
  
  const submitComment = () => {
    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkYmNmZDM4MzRiZjAwMTUwMDBhNWYiLCJpYXQiOjE3NDI1ODUwODUsImV4cCI6MTc0Mzc5NDY4NX0.hvzD-aoHTdHKjeP6dUDWO-eAy5Yp-2zt9SfMP5BqSRI"
      },
      body: JSON.stringify({ comment, rate, elementId: asin })
    })
    .then(() => {
      setComment('');
      setRate(1);
      refreshComments();
    });
  };

  return (
    <div>
      <h5>Aggiungi un commento</h5>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Scrivi un commento..." />
      <select value={rate} onChange={(e) => setRate(e.target.value)}>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <button onClick={submitComment}>Invia</button>
    </div>
  );
}
export default AddComment;