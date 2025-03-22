// AddComment conterrà un form per raccogliere il testo della recensione e la valutazione da 1 a 5;
//  una volta raccolti i dati, tramite
//  un pulsante (onClick!) verrà effettuata una chiamata POST per inviare la recensione alle API.



import React, { useState } from 'react';

function AddComment({ asin, refreshComments }) {
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(1);
  
  const submitComment = (e) => {
    e.preventDefault();
    
    fetch("https://striveschool-api.herokuapp.com/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkYmNmZDM4MzRiZjAwMTUwMDBhNWYiLCJpYXQiOjE3NDI1ODUwODUsImV4cCI6MTc0Mzc5NDY4NX0.hvzD-aoHTdHKjeP6dUDWO-eAy5Yp-2zt9SfMP5BqSRI"
      },
      body: JSON.stringify({
        comment: commentText,
        rate: rating,
        elementId: asin
      })
    }).then(() => {
      setCommentText('');
      setRating(1);
      refreshComments();
    });
  };
  
  return (
    <form onSubmit={submitComment}>
      <input type="text" value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Write a comment" />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default AddComment;