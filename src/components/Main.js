
import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from 'mdbreact';
import "./Main.css";

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

        return (
            <MDBNavbar color="transparent" dark expand="md" id="navbar">
                <MDBNavbarBrand>
                    <strong id="personal-color">Cristian Ortega</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                    <MDBNavItem active>
                        <MDBNavLink to="#!" id="personal-color">Home</MDBNavLink>
                    </MDBNavItem>
                    {/* <MDBNavItem>
                        <MDBNavLink to="#!">Features</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#!">Pricing</MDBNavLink>
                    </MDBNavItem> */}
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBNavLink className="waves-effect waves-light" to="#!">
                        <MDBIcon fab icon="linkedin" id="personal-color" />
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink className="waves-effect waves-light" to="#!">
                        <MDBIcon fab icon="github" id="personal-color" />
                        </MDBNavLink>
                    </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default Main;



