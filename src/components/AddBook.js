import React from 'react'
import BookForm from './BookForm'
import {connect} from 'react-redux'
import {addBook} from '../actions/books'

const AddBook = (props) => {
  return (
    <div>
      <h3>Set Book Information</h3>
      <BookForm onSubmitBook ={book => {props.dispatch(addBook(book)); props.history.push('/')}} />
    </div>
  )
}

export default connect()(AddBook)
