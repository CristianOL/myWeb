
import React, { Component } from 'react';
import './Background.css';
import Sizes from 'react-sizes';


class Background extends Component {

    constructor(props){
      super(props);
      this.state = {
        divStyle: { position: this.props.position, },

      }
    }

    componentDidUpdate() {

      console.log(this.props) 
      
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

  heightVariable: height,

})

export default Sizes(mapSizesToProps)(Background);
