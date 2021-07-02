import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

//This file is for navigation bar with style. 



const Styles = styled.div`
.navbar {
    background-color: #282c34;
}

a, .navbar-brand, .navbar-nav .nav-link {
    color: white;

    &:hover {
        color: white;
    }
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Stroke Survivors</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link><Link to="/">Home</Link></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link><Link to="/testimony">Testimony</Link></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link><Link to="/treatments">Treatments</Link></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link><Link to="/about">About</Link></Nav.Link></Nav.Item>
                </Nav>
                 </Navbar.Collapse>
        </Navbar>
    </Styles>

)