
import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, 
    MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, 
    MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBRow, MDBCol, MDBBtn, 
    MDBInput, MDBContainer, MDBJumbotron, Button, MDBAnimation, MDBView, MDBMask } from 'mdbreact';
import "./Main.css";
import Background from './Background';


import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,    

        }
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {

    const overlay = (
        <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse}
        />
    );

    return (
        <>

        

        <div>
        <MDBNavbar
        id="navbar"
        color={"navbar-color"}
        dark
        expand="md"
        fixed="top"
        scrolling
        transparent
        >
        <MDBContainer>
            <MDBNavbarBrand>
                <strong id="personal-color-white">Cristian Ortega</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                <MDBNavItem active>
                    <MDBNavLink to="#!" id="personal-color-white">Who I am</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="#!" id="personal-color-white">My experience</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="#!" id="personal-color-white">Pricing</MDBNavLink>
                </MDBNavItem> 
                </MDBNavbarNav>
                <MDBNavbarNav right>
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="https://es.linkedin.com/in/cristianortegaleon">
                    <MDBIcon fab icon="linkedin" id="personal-color-white" />
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="#!">
                    <MDBIcon fab icon="github" id="personal-color-white" />
                    </MDBNavLink>
                </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>
        {this.state.isOpen && overlay}
        
        
        <MDBContainer className="mt-5 text-center">
            <MDBRow>
                <MDBCol>
                <MDBJumbotron id="jumbo">
                    <h1 className="h1-responsive display-3" id="cristian">Cristian Ortega</h1>
                    <p className="lead" id="subtitle-main">
                    Data Scientist | Machine Intelligence <br></br>
                    Software Developer | Electrical Engineer
                    </p>
                    <hr className="my-2" id="line" />
                    <p className="lead" id="subsubtitle-main">
                    Go below and explore !
                    </p>
                    <p className="lead">
                        <MDBIcon icon="chevron-down" size="2x" id="personal-color-white" 
                        className="animated pulse fast infinite" />
                    </p>
                </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        </div>


        <MDBContainer className="container-fluid align-items-center justify-content-center h-100">
        
        <section id="who-i-am">
        
            <MDBRow className="first-section d-flex justify-content-center text-center">
            <MDBCol md="12" className="mb-3 text-center">
                <h1 className="h1-responsive" id="personal-color-blue">WHO I AM</h1>
                <hr className="my-3" id="lines" />
                <p className="lead text-justify" id="personal-color-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </MDBCol>
            </MDBRow>
        
        </section>

        <section id="my-experience">

            <MDBContainer id="sections-color"></MDBContainer>

            <MDBRow className="second-section d-flex justify-content-center text-center">
            <MDBCol md="12" className="mb-3 text-center">
                <h1 className="h1-responsive" id="personal-color-blue">MY EXPERIENCE</h1>
                <hr className="my-3" id="lines" />
                <p className="lead text-justify" id="personal-color-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </MDBCol>
            </MDBRow>
        

            
        

            <MDBRow>
            <MDBCol lg="5" className="mb-lg-0 mb-5">
                <img
                src="https://mdbootstrap.com/img/Photos/Others/images/83.jpg"
                alt=""
                className="img-fluid rounded z-depth-1"
                />
            </MDBCol>
            <MDBCol lg="7">
                <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                    <MDBIcon far icon="chart-bar" size="2x" className="indigo-text" />
                </MDBCol>
                <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Marketing</h5>
                    <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                    </p>
                </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                    <MDBIcon icon="music" size="2x" className="pink-text" />
                </MDBCol>
                <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Entertainment</h5>
                    <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                    </p>
                </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                    <MDBIcon far icon="smile" size="2x" className="blue-text" />
                </MDBCol>
                <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Communication</h5>
                    <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                    </p>
                </MDBCol>
                </MDBRow>
            </MDBCol>
            </MDBRow>
            <hr className="my-5" />
            <MDBRow>
            <MDBCol lg="7">
                <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                    <MDBIcon icon="book" size="2x" className="cyan-text" />
                </MDBCol>
                <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Education</h5>
                    <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                    </p>
                </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                    <MDBIcon icon="code" size="2x" className="red-text" />
                </MDBCol>
                <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Technology</h5>
                    <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                    </p>
                </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                    <MDBIcon far icon="money-bill-alt" size="2x" className="deep-purple-text" />
                </MDBCol>
                <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Finance</h5>
                    <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                    </p>
                </MDBCol>
                </MDBRow>
            </MDBCol>
            <MDBCol lg="5">
                <img
                src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg"
                alt=""
                className="img-fluid rounded z-depth-1"
                />
            </MDBCol>
            </MDBRow>
        
            </section>
        

        </MDBContainer>
        </>


        );
    }
}

export default Main;








