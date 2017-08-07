import React from 'react'
import createReactClass from 'create-react-class';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Modal, Panel, Col, Row, Well, Button, ButtonGroup, Label} from 'react-bootstrap';

import {deleteItem, updateCart} from "../../actions/cartActions"

const Cart = createReactClass({
  getInitialState() {
    return {showModal: false};
  },

  close() {
    this.setState({showModal: false});
  },

  open() {
    this.setState({showModal: true});
  },
  onDelete(id) {
    let arr = [];
    this.props.cart.forEach((item) => {
      if (item._id !== id) {
        arr = [...arr, item];
        return arr;
      }
    });
    this.props.deleteItem(arr)
  },
  onIncrement(id) {
    this.props.updateCart(id, 1)
  },
  onDecrement(id, qty) {
    if (qty > 1) {
      this.props.updateCart(id, -1)
    } else {
      this.onDelete(id);
    }
  },
  render() {
    const cartItemsList = this.props.cart.map((cartItem, index) => {
      return (
        <Panel key={index}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cartItem.title}</h6><span>     </span>
            </Col>
            <Col xs={12} sm={2}>
              <h6>$ {cartItem.price}</h6>
            </Col>
            <Col xs={12} sm={2}>
              <h6>qty <Label bsStyle="primary">{cartItem.quantity}</Label></h6>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{minWidth: '300px'}}>
                <Button bsStyle="default" bsSize="small"
                        onClick={this.onDecrement.bind(this, cartItem._id, cartItem.quantity)}>-</Button>
                <Button bsStyle="default" bsSize="small" onClick={this.onIncrement.bind(this, cartItem._id)}>+</Button>
                <Button onClick={this.onDelete.bind(this, cartItem._id)} bsStyle="danger"
                        bsSize="small">Delete</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>
      )
    }, this);
    const filledList = this.props.cart.length > 0 ?
      <Panel header="Cart" bsStyle="primary">
        {cartItemsList}
        <Row>
          <Col xs={12}>
            <h5>Total $ {this.props.totalAmount}</h5>
            <Button bsStyle="success" bsSize="small" onClick={this.open}>Checkout</Button>
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Thank You</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h6>Your order has been saved</h6>
                <p>You will receive an email confirmation soon</p>
              </Modal.Body>
              <Modal.Footer>
                <Col xs={6}>
                  <h6>Total $ {this.props.totalAmount}</h6>
                </Col>
                <Button onClick={this.close}>Close</Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Panel> : <div></div>
    return (
      <div>{filledList}</div>
    )
  }
});

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount,
    totalQty: state.cart.totalQty
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteItem,
    updateCart
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);