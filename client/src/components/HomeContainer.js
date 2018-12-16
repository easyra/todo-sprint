import React, { Component } from 'react';
import axios from 'axios';
import NotesForm from './NotesForm';
import NotesList from './NotesList';
import Navigator from './Navigator';

class HomeContainer extends Component {
  state = {
    notes: [],
  };
  render() {
    return (
      <>
        <Navigator />
        <NotesForm />
        <NotesList />
      </>
    );
  }
  componentDidMount = () => {
    axios.get('http://localhost:6666/notes/all').then(res => {
      const notes = res.data;
      this.setState({ notes });
    });
  };
}

export default HomeContainer;
