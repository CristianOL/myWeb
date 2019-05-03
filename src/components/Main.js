
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
                <p className="lead text-justify" id="personal-color-grey">
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

            </MDBCol>
            </MDBRow>
        

            <MDBRow>
            <MDBCol lg="5" className="mb-lg-0 mb-5">
                <img
                src={require('../images/DS.jpg')}
                alt=""
                className="img-fluid rounded z-depth-1"
                />
            </MDBCol>
            <MDBCol lg="7">
                <MDBRow className="mb-3">
                <MDBCol md="11" size="10">
                    <h5 className="h5-responsive mt-3 mb-3" id="personal-color-grey">MAY 2018 - MAY 2019</h5>
                    <h5 className="font-weight-bold" id="personal-color-black">Data Scientist</h5>
                    <h5 className="h5-responsive mb-3" id="personal-color-black"><em>BBVA Next Technologies - Madrid</em></h5>
                    <p className="lead text-justify" id="personal-color-grey">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                    </p>
                </MDBCol>
                </MDBRow>
            </MDBCol>
            </MDBRow>
            <hr className="my-5" id="lines-experience" />
            <MDBRow>
            <MDBCol lg="8">
                <MDBRow className="mb-3">
                <MDBCol md="1">
                
                </MDBCol>
                <MDBCol md="11" size="10">
                    <h5 className="h5-responsive mt-3 mb-3" id="personal-color-grey">NOV 2017 - APR 2018</h5>
                    <h5 className="font-weight-bold" id="personal-color-black">Computer Vision Researcher (ROC-SIANI)</h5>
                    <h5 className="h5-responsive mb-3" id="personal-color-black"><em>Universidad de Las Palmas de Gran Canaria</em></h5>
                    <p className="lead text-justify" id="personal-color-grey">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                    </p>
                </MDBCol>              
                </MDBRow>
            </MDBCol>
            <MDBCol lg="4" className="mb-lg-0 mb-5">
                <img
                src={require('../images/glasses.jpg')}
                alt=""
                className="img-fluid rounded z-depth-1"
                />
            </MDBCol>
            </MDBRow>
            <hr className="my-5" id="lines-experience" />
        

            <MDBRow>
            <MDBCol lg="5" className="mb-lg-0 mb-5">
                <img
                src={require('../images/electric.jpg')}
                alt=""
                className="img-fluid rounded z-depth-1"
                />
            </MDBCol>
            <MDBCol lg="7">
                <MDBRow className="mb-3">
                <MDBCol md="11" size="10">
                    <h5 className="h5-responsive mt-3 mb-3" id="personal-color-grey">SEPT 2015 - MAR 2016</h5>
                    <h5 className="font-weight-bold" id="personal-color-black">Indoor Commercial</h5>
                    <h5 className="h5-responsive mb-3" id="personal-color-black"><em>Dielectro Canarias, S.A.U. - Las Palmas de Gran Canaria</em></h5>
                    <p className="lead text-justify" id="personal-color-grey">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                    </p>
                </MDBCol>
                </MDBRow>
            </MDBCol>
            </MDBRow>
            <hr className="my-5" id="lines-experience" />
            <MDBRow>
            <MDBCol lg="7">
                <MDBRow className="mb-3">
                <MDBCol md="1">
                
                </MDBCol>
                <MDBCol md="11" size="10">
                    <h5 className="h5-responsive mt-3 mb-3" id="personal-color-grey">FEB 2015 - APR 2015</h5>
                    <h5 className="font-weight-bold" id="personal-color-black">Industrial Technician</h5>
                    <h5 className="h5-responsive mb-3" id="personal-color-black"><em>Ilustre Ayuntamiento de la Villa de Ingenio - Las Palmas de Gran Canaria</em></h5>
                    <p className="lead text-justify" id="personal-color-grey">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                    </p>
                </MDBCol>              
                </MDBRow>
            </MDBCol>
            <MDBCol lg="5" className="mb-lg-0 mb-5">
                <img
                src={require('../images/plane.jpg')}
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








