import React from 'react';
import NoteCard from './NoteCard';

const NotesList = ({ notes }) => {
  console.log(notes);
  return (
    <div className="row">
      {notes && notes.map(note => <NoteCard note={note} key={note.id} />)}
    </div>
  );
};

export default NotesList;
