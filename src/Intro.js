import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
  MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer } from "mdbreact";
import './Intro.css';

class Background extends Component {
    
    render() {
      return (
        <div>
        <div className="gradient">
        </div>
        <video className="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline
        autoPlay muted="" loop>
        <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4" />
        </video>
        </div>
    );
  }
}





class Intro extends Component {
  render() {
    return (
      <Background />
    );
  }
}

export default Intro;
