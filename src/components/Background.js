
import React, { Component } from 'react';
import './Background.css';


class Background extends Component {

    constructor(props){
      super(props);
      this.state = {
        divStyle: { position: this.props.position, },


      }
    }

    render() {
      
      return (
        <>
        <div className="gradient" style={this.state.divStyle}>
        </div>
        <video className="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" 
        playsInline autoPlay muted="" style={this.state.divStyle} loop>
        <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4" />
        </video>
        </>
        
    );
  }
}

export default Background;




