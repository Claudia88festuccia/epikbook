// . CommentsList riceverà la lista di recensioni da CommentArea con una prop,
//  e dovrà renderizzare la lista utilizzando un componente SingleComment.


import React from 'react';
import SingleComment from './SingleComment';


function CommentList({ comments, refreshComments }) {
  return (
    <div>
    {comments.map((comment) => (
      <SingleComment key={comment._id} comment={comment} refreshComments={refreshComments} />
    ))}
  </div>
);
}
export default CommentList;