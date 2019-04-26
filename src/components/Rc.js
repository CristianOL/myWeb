
import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { Spring } from 'react-spring/renderprops';

import Background from "./Background";
import Jumbo from "./Jumbo";
import Main from "./Main"


class Timer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
  }
  
  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return (
      this.state.redirect ? <Redirect to="/jumbo" /> : null
    );
  }
}





function Rc(props) {
  return (

        <Switch location={props.location}>
          <Route exact path="/" component={() => <div><Timer /></div>} />
          <Route path="/jumbo" component={() => 
            <Spring config={{ duration: 2000 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
              { props => (
                <div style = {props}>
                  <Background />
                  <Jumbo />
                </div>
                )
              }
            </Spring>
            
          } />
          <Route path="/main" component={() => 
          <div>
            <Background />
            <Main />
          </div>
          
          
          } />




        </Switch>

  );
}



export default withRouter(Rc);

