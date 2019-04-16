
import React, { Component, Fragment } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
  MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput, MDBView, MDBContainer, MDBJumbotron } from "mdbreact";
import './Intro.css';
import 'mdbreact/dist/css/mdb.css'

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

class Main extends Component {
    
  render() {
    return (

      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron id="jumbo">
              <h1 className="h1 display-3 cristian">Cristian Ortega</h1>
              <p className="lead subtitle">
                Because learn-by-doing is my philosophy
              </p>
              <hr className="my-2" id="line" />
              <p className="subsubtitle">
                Put your LinkedIn below and enjoy my web
              </p>
              <div>
                <MDBInput id="linked" hint="LinkedIn" type="email" />
              </div>
              <p className="lead">
                <MDBBtn id="button" outline color="info">Lets go!</MDBBtn>
              </p>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    );
  }
}


class Intro extends Component {
  render() {
    return (
      <div>
      <Background />
      <Main />
      </div>
    );
  }
}

export default Intro;
