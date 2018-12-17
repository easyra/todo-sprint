import React from 'react';

const NoteCard = ({ note }) => {
  const { title, content } = note;
  return (
    <div className="col s12 m4">
      <div className="card-panel purple z-depth-2">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default NoteCard;
