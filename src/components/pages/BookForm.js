import React from 'react'
import createReactClass from 'create-react-class';
import {Well, Button, Panel, FormGroup, FormControl, ControlLabel, Form} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {bookFunctions} from '../../actions/bookActions';

const BookForm = createReactClass({
  getInitialState() {
    return {
      selectValue: '',
      title: '',
      description: '',
      price: ''
    };
  },
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  },
  handleChange(e) {
    this.setState({
      selectValue: e.target.value
    });
  },
  handleSubmit(event) {
    event.preventDefault();
    let book = [this.state];
    this.props.postBook(book)
  },
  handleDelete(event) {
    event.preventDefault();
    console.log(this.state.selectValue);
    this.props.deleteBook({_id: this.state.selectValue});
  },
  render() {
    const bookList = this.props.books.map((book, index) => {
      return (
        <option key={index} value={book._id}
        >{book.title}</option>
      )
    });
    return (
      <Well>
        <Panel>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup controlId="title">
              <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter title"
                ref="title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup controlId="description">
              <ControlLabel>Description</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter description"
                ref="description"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup controlId="price">
              <ControlLabel>Price</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter price"
                ref="price"
                name="price"
                value={this.state.price}
                onChange={this.onChange}
              />
            </FormGroup>
            <Button bsStyle="primary" type="submit">Save book</Button>
          </Form>
        </Panel>
        <Panel style={{marginTop: '25px'}}>
          <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel>Select book</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={this.handleChange}
              name='book'
            >
              <option name="delete">select</option>
              {bookList}
            </FormControl>
          </FormGroup>
          <Button bsStyle="danger" onClick={this.handleDelete}>Remove</Button>
        </Panel>
      </Well>
    )
  }
});

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postBook: bookFunctions.postBooks,
    deleteBook: bookFunctions.deleteBooks
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);