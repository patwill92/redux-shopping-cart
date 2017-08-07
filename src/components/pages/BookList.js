import React from 'react'
import createReactClass from 'create-react-class';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Col, Row} from 'react-bootstrap';

import {bookFunctions} from '../../actions/bookActions';

import BookItem from './BookItem';
import BookForm from './BookForm';
import Cart from './Cart';

const BookList = createReactClass({
  componentDidMount() {
    this.props.getBook();
  },
  render() {
    const bookList = this.props.books.map((books, index) => {
      return (
        <Col xs={12} sm={6} md={4} key={index}>
          <BookItem
            title={books.title}
            description={books.description}
            price={books.price}
            _id={books._id}
          />
        </Col>
      )
    });
    return (
      <Grid>
        <Row>
          <Cart />
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <BookForm/>
          </Col>
          {bookList}
        </Row>
      </Grid>
    )
  }
});

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getBook: bookFunctions.getBooks}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);