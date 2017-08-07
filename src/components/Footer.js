import React from 'react'
import createReactClass from 'create-react-class';



const Footer = createReactClass({
  render() {
    return (
      <footer className="footer text-center">
        <div className="container">
          <p className="footer-text">
            Copyright 2017
          </p>
        </div>
      </footer>
    )
  }
});

export default Footer;