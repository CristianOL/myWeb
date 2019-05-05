
import React, { Component } from 'react';
import TransitionGroup, { CSSTransition } from 'react-transition-group';
import { MDBRow, MDBCol, MDBBtn, MDBInput, MDBContainer, MDBJumbotron, Button } from "mdbreact";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import './Jumbo.css';
import Background from './Background';




//const Fun = () => <div><Redirect to="/main" /></div>;




class Jumbo extends Component {

    constructor(props) {
      super(props);
      this.state = {
        access: 'False',
        input_value: '',
        
        
      }
      
      //this.handleClick = this.handleClick.bind(this);
  
    }
  
    
    handleClickButton = () => {
      
      axios.post('http://localhost:5000/',
        {linkedIn: this.state.input_value
      })
      .then(response => {
        this.setState({ access: response.data['access'] });
      })
      .catch(error => {
        console.log(error);
      });
  
      console.log('access:', this.state.access);

    }

      
    handleClickInput = (event) => {
      if (event.target.value === '') {
  
        this.setState({ input_value: "https://es.linkedin.com/in/"});
  
      }
      console.log(this.state.input_value)
    }
  

    handleChange = (event) => {
      this.setState({ input_value: event.target.value });
      console.log(this.state.input_value)
    }
  
  
      
    render() {
      
      let button;
      button = <MDBBtn id="button" outline color="info" onClick={this.handleClickButton}>Lets go!</MDBBtn>

      return ( 
        <>

        
      
        <MDBContainer className="container-fluid align-items-center justify-content-center h-100 text-center">
          <MDBRow className="main-section d-flex justify-content-center text-center">
            <MDBCol md="12" className="mb-3 text-center" id="intro">
            
                <h1 className="h1-responsive display-3" id="cristian">Cristian Ortega</h1>
                <p className="lead" id="subtitle">
                  Because learn-by-doing is my philosophy
                </p>
                <hr className="my-2" id="line" />
                <p className="lead" id="subsubtitle">
                  Put your LinkedIn below and enjoy my web
                </p>
                <div>
                  <MDBInput id="linked" hint="https://es.linkedin.com/in/" type="url" 
                  value={this.state.input_value} onChange={this.handleChange} 
                  onClick={this.handleClickInput} />
                </div>
                <p className="lead">
                  {button}
                  {this.state.access === 'True' ? ( <Redirect to="/main" /> ) : ( null )}
                </p>
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        </>
  
      );
    }
  }
  
export default Jumbo;




