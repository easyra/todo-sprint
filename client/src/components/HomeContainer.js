import React, { Component } from 'react';
import axios from 'axios';
import NotesForm from './NotesForm';
import NotesList from './NotesList';
import Navigator from './Navigator';

class HomeContainer extends Component {
  state = {
    notes: [],
  };

  postNote = noteObject => {
    axios.post('http://localhost:7000/notes', noteObject).then(res => {
      const notes = res.data;
      this.setState({ notes });
    });
  };

  render() {
    const { notes } = this.state;
    return (
      <>
        <Navigator />
        <NotesForm />
        <NotesList notes={notes} postNote={this.postNote} />
      </>
    );
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:7000/notes/all')
      .then(res => {
        const notes = res.data;
        this.setState({ notes });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default HomeContainer;
