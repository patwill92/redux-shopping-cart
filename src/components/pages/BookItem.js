import React from 'react'
import createReactClass from 'create-react-class';
import {Well, Col, Row, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import {addToCart, updateCart} from "../../actions/cartActions"

const BookItem  = createReactClass({
  handleCart(){
    const book = [...this.props.cart,{
      _id: this.props._id,
      title: this.props.title,
      description: this.props.description,
      price: this.props.price,
      quantity: 1
    }];
    console.log(book);
    if(this.props.cart.length > 0){
      let index = _.findIndex(this.props.cart, ['_id', this.props._id]);
      console.log(index);
      if(index >= 0){
        this.props.updateCart(this.props._id, 1)
      } else {
        this.props.addToCart(book);
      }
    } else {
      this.props.addToCart(book)
    }
  },
  render() {
    return (
      <Well>
        <Row>
          <Col xs={12} sm={6}>
            <h6>{this.props.title}</h6>
            <p>{this.props.description}</p>
            <h6>$ {this.props.price}</h6>
            <Button onClick={this.handleCart} bsStyle='primary'>Buy</Button>
          </Col>
        </Row>
      </Well>
    )
  }
});

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addToCart,
    updateCart
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);