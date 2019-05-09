
import React, { Component } from 'react';
import TransitionGroup, { CSSTransition } from 'react-transition-group';
import { MDBRow, MDBCol, MDBBtn, MDBInput, MDBContainer, MDBIcon } from "mdbreact";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import './Jumbo.css';
import Background from './Background';




//const Fun = () => <div><Redirect to="/main" /></div>;




class Jumbo extends Component {

    constructor(props) {
      super(props);
      this.state = {
        authorization_url: null,
        authorization_code: null,
        access_main: null,


        input_value: '',
        
        
      }
      
      //this.handleClick = this.handleClick.bind(this);
  
    }

    componentDidMount() {

    axios.get('http://localhost:5000/')
      .then(response => {
        this.setState({ authorization_url: response.data['authorization_url'] });
    })
      .catch(error => {
        console.log(error);
    });

    
    
    console.log(this.state);
    console.log('location:', this.props.location);
  
    

    console.log((this.props.location.search).substring(
      (this.props.location.search).indexOf('?code') + 6,
      (this.props.location.search).indexOf('&state')
    ))
    



    if (this.props.location.search === ''){
      console.log('Sin acceder todavía')
      

    }else if ((this.props.location.search).indexOf('?code') === 0){

    axios.post('http://localhost:5000/authorization-code',
      {authorization_code: (this.props.location.search).substring(
        (this.props.location.search).indexOf('?code') + 6,
        (this.props.location.search).indexOf('&state'))
    })
      .then(response => {
       {/*  this.setState({ access_main: response.data['access_main'] });  */}
    })
      .catch(error => {
        console.log(error);
    });

    console.log(this.state);
    




    }else if ((this.props.location.search).indexOf('?error') === 0){




    }


    }






    
    handleClickButtonLinkedIn = () => {
      
      axios.get('http://localhost:5000/')
      .then(response => {
        this.setState({ authorization_url: response.data['authorization_url'] });
      })
      .catch(error => {
        console.log(error);
      });
  
      console.log('authorization_url:', this.state.authorization_url);

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
      
      /* button = <MDBBtn id="button" outline color="info" onClick={this.handleClickButton}>Lets go!</MDBBtn> */
      
      button = <a href={this.state.authorization_url}>
               <MDBBtn className="mt-3" id="button" outline>
               <MDBIcon fab icon="linkedin" className="pr-3" size="1x" /> Sign In with LinkedIn
               </MDBBtn> 
               </a>

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
                {/* <div>
                  <MDBInput id="linked" hint="https://es.linkedin.com/in/" type="url" 
                  value={this.state.input_value} onChange={this.handleChange} 
                  onClick={this.handleClickInput} />
                </div> */}
                <div>

                  {button}
                  {/* {this.state.access === 'True' ? ( <Redirect to="/main" /> ) : ( null )} */}
                </div>
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        </>
  
      );
    }
  }
  
export default withRouter(Jumbo);




