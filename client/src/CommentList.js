import React from 'react';

export default ({ comments }) => {
  const renderedComments = comments.map(comment => {
    let content;

    if(comment.status === 'approved'){
      content = comment.content;
    } else {
      content = 'This comment is in moderation';
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
