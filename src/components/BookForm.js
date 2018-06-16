import React, { Component } from 'react'

export class BookForm extends Component {
  state = {
    title: this.props.book ? this.props.book.title: '',
    author: this.props.book ? this.props.book.author: '',
    description: this.props.book ? this.props.book.description: '',
    published: this.props.book ? this.props.book.published: 0,
    error: ''
  }

  onTitleChange = e => {
    const title = e.target.value;
    this.setState({title})
  }

  onAuthorChange = e => {
    const author = e.target.value;
    this.setState({author})
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState({description})
  }

  onPublishedChange = e => {
    const published = e.target.value;
    this.setState({published})
  }

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.title || !this.state.author || !this.state.published) {
      this.setState({error: 'Please set title, author and published to continue'})
    } else {
      this.setState({error: ''});
      this.props.onSubmitBook({
        title: this.state.title,
        author: this.state.author,
        description: this.state.description,
        published: this.state.published
      })
    }
  }
  
  render() {
    return (
      <div>
          {this.state.error && <p className='error'>{this.state.error}</p>}
          <form onSubmit={this.onSubmit} className='add-book-form'>
            <input type="text" placeholder="title" autoFocus value={this.state.title} onChange={this.onTitleChange}/><br/>
            <input type="text" placeholder="author" value={this.state.author} onChange={this.onAuthorChange}/><br/>
            <input type="text" placeholder="description" value={this.state.description} onChange={this.onDescriptionChange}/><br/>
            <input type="number" placeholder="published" value={this.state.published} onChange={this.onPublishedChange}/><br/>
            <button>Add Book</button>
          </form>
      </div>
    )
  }
}

export default BookForm
