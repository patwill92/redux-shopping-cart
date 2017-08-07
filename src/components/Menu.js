import React from 'react'
import createReactClass from 'create-react-class';
import {Nav, NavItem, Navbar, MenuItem, NavDropdown, Badge} from 'react-bootstrap';


const Menu = createReactClass({
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">APP</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/about">About</NavItem>
            <NavItem eventKey={2} href="/contact">Contact</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/admin">Admin</NavItem>
            <NavItem eventKey={2} href="/cart">Cart <Badge style={{marginLeft: '3px'}}>{this.props.cartQty > 0 ? this.props.cartQty : 0}</Badge></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
});

export default Menu;