import React, { Component } from 'react';
import './NotesForm.css';
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
    e.preventDefault();

    const state = { ...this.state };
    const { postNote } = this.props;

    const title = state.titleInput;
    const content = state.contentInput;

    postNote({ title, content });
  };

  render() {
    const { titleInput, contentInput } = this.state;
    return (
      <form className="row col s12" onSubmit={this.submitNote}>
        <h2>Notes Form</h2>
        <div className="input-field col s6">
          <input
            id="title"
            type="text"
            value={titleInput}
            name="titleInput"
            onChange={this.handleInput}
          />
          <label for="title">Title</label>
        </div>
        <div className="input-field col s6">
          <input
            id="content"
            type="text"
            value={contentInput}
            name="contentInput"
            onChange={this.handleInput}
          />
          <label for="content">Content</label>
        </div>
        <div>
          <input type="submit" value="Submit Note" class="btn" />
        </div>
      </form>
    );
  }
}

export default NotesForm;
