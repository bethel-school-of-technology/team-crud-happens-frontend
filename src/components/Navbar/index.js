import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';

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
        </Nav>
        </>
    );
};

export default Navbar;