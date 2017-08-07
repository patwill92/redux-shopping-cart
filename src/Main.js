import React from 'react'
import createReactClass from 'create-react-class';
import Menu from './components/Menu'
import Footer from './components/Footer'
import {connect} from 'react-redux'


const Main = createReactClass({
  render() {
    return (
      <div>
        <Menu cartQty={this.props.totalQty}/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
});

function mapStateToProps(state){
  return{
    totalQty: state.cart.totalQty
  }
}

export default connect(mapStateToProps)(Main);