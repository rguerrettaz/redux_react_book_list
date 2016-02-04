// A Container (or Smart Component) is a React Component which has direct access to state (Redux store)
import React, { Component } from 'react';
// React-Redux is the glue between react and redux
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  constructor(props) {
    super(props)
  }

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// This function is the glue between React and Redux
// Anytime state changes, the BookList will re-render, because state will be updated
function mapStateToProps(state) {
  // Whatever is returned from here will show up as props inside BookList
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called the result should be passed to all our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

// connect takes a function and a component and produces a container. A container is a component
// which is aware of the state contained by redux.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);