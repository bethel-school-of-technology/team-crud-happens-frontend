import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';
import { NavDropdown } from 'react-bootstrap';

const Navbar = () => {
    return (
    <>
        <Nav>
            <Bars />

            <NavMenu>
                <NavLink to='/home' activeStyle>
                    Home
                </NavLink>
                <NavLink to='/testimony' activeStyle>
                    Testimony
                </NavLink>
                <NavLink to='/treatments' activeStyle>
                    Treatments
                </NavLink>
                <NavLink to='/about' activeStyle>
                    About
                </NavLink>
                 {/* Second Nav */}
            </NavMenu>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Testimony</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Treatments</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">About</NavDropdown.Item>
      </NavDropdown>
        </Nav>
        </>
    );
};

export default Navbar;