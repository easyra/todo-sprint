import React, { Component } from 'react';
import NotesForm from './NotesForm';

class HomeContainer extends Component {
  render() {
    return (
      <>
        <Navigator />
        <NotesForm />
        <NotesList />
      </>
    );
  }
}

export default HomeContainer;
