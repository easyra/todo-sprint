import React, { Component } from 'react';
import axios from 'axios';

class NotesForm extends Component {
  state = {
    titleInput: '',
    contentInput: '',
  };

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  submitNote = e => {
    const state = { ...this.state };
    const { postNote } = this.props;

    const title = state.titleInput;
    const content = state.contentInput;

    postNote({ title, content });
  };

  render() {
    const { titleInput, contentInput } = this.state;
    return (
      <div>
        <input
          value={titleInput}
          placeholder="titleInput"
          name="titleInput"
          onChange={this.handleInput}
        />
        <input
          value={contentInput}
          placeholder="contentInput"
          name="contentInput"
          onChange={this.handleInput}
        />
        <button onClick={this.submitNote}>Submit</button>
      </div>
    );
  }
}

export default NotesForm;
