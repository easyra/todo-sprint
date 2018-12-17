import React from 'react';

const NoteCard = ({ note }) => {
  const { title, content } = note;
  return (
    <div className="col l3 s6 m4">
      <div className="card purple z-depth-2">
        <div className="card-content white-text">
          <span className="card-title">{title}</span>
          <p className="white-text">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
