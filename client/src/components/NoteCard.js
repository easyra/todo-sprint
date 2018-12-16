import React from 'react';

const NoteCard = ({ note }) => {
  const { title, content } = note;
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default NoteCard;
