
import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect, Link } from "react-router-dom";
import TransitionGroup, { CSSTransition } from "react-transition-group";

import Background from "./Background";
import Jumbo from "./Jumbo";
import Main from "./Main"

import store from '../store/store';


class Rc extends Component {

  constructor(props) {
    super(props);
  
  }

  componentDidUpdate() {

    console.log(this.props)
    console.log(store.getState())

  }

  render() {

    return (

      <Switch location={this.props.location}>

        <Route exact path="/" component={() =>
        <>
          <Background position={'fixed'} />
          <Jumbo />
        </>
        } />
        
        <Route path="/main" component={() => 
        <>
          
          <Background position={'absolute'} />  
          <Main />          
        
        </>
        } />

      </Switch>
        
    );
  }
}

export default withRouter(Rc);






/* 


<Spring config={{ duration: 1500 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
{ props => (
  <div style = {props}>
    <Background />
    <Jumbo />
  </div>
  )
}
</Spring>




<Transition
  items={toggle}
  from={{ position: 'absolute', opacity: 0 }}
  enter={{ opacity: 1 }}
  leave={{ opacity: 0 }}>
  {toggle =>
    toggle
      ? props => <div style={props}>😄</div>
      : props => <div style={props}>🤪</div>
  }
</Transition>

 */


 /* 

<React.Fragment>
      <div>
      <Route render={( location ) => 
      
         <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={{ enter: 300, exit: 300 }}
              >

              <Switch location={location}>
   
                <Route exact path="/" component={() => <div><Timer /></div>} />

                <Route exact path="/" component={() =>
                  <Jumbo />

                } />
                <Route path="/main" component={() => 
                  <Main />          
              
                } />


              </Switch>
            </CSSTransition>
          </TransitionGroup>
          
      } />
      </div>
    </React.Fragment>

 */

