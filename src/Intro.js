
import React, { Component } from 'react';
import { ReactCSSTransitionGroup } from 'react-transition-group';
import { MDBRow, MDBCol, MDBBtn, MDBInput, MDBContainer, MDBJumbotron} from "mdbreact";
import './Intro.css';
import 'mdbreact/dist/css/mdb.css';
import axios from 'axios';

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

  constructor(props) {
    super(props);
    this.state = {
      access: '',
      input_value: '',
      
      
    }
    
    //this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {

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
                <MDBInput id="linked" hint="https://es.linkedin.com/in/" type="email" 
                value={this.state.input_value} onChange={this.handleChange} 
                onClick={this.handleClickInput} />
              </div>
              <p className="lead">
                <MDBBtn id="button" outline color="info" onClick={this.handleClickButton}>Lets go!</MDBBtn>
              </p>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    );
  }
}


class Intro extends Component {

  constructor(props) {
    super(props);
  }

  hola = () =>{

    console.log("hola")


  }

  render() {
    return (
      <div>
      <Background />
      <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>{
      <Main />}
      </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Intro;





