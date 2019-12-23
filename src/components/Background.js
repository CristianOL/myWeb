
import React, { Component } from 'react';
import './Background.css';
import Sizes from 'react-sizes';

import { compose } from 'redux';
import { connect } from 'react-redux';
import store from '../store/store';
import { changeHeight } from '../actions/actions';


class Background extends Component {

    constructor(props) {
      super(props);
      this.state = {
        divStyle: { position: this.props.position }

      }
    }

    componentDidMount() {

      console.log(this.props) 

      this.props.changeHeight(this.props.heightVariable)
      console.log(store.getState())

    }

    componentDidUpdate() {

      console.log(this.props)
      
      this.props.changeHeight(this.props.heightVariable)
      console.log(store.getState())
    
    }

    render() {
      
      return (

        <>
        <div className="gradient" style={this.state.divStyle}></div>
        <video className="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" 
        playsInline autoPlay muted="" style={this.state.divStyle} loop>
        <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4" />
        </video>
        </>
        
    );
  }
}

const mapSizesToProps = ({ height }) => ({

  heightVariable: height

});

const mapDispatchToProps = {
  
  changeHeight: changeHeight

};

export default compose (

  Sizes(mapSizesToProps),
  connect(
    null,
    mapDispatchToProps
  )

)(Background);
