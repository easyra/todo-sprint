import React from 'react';

const NotesList = ({ notes }) => {
  return (
    <div>
      {notes.map(note => (
        <NoteCard note={note} key={note.id} />
      ))}
    </div>
  );
};

export default NotesList;
