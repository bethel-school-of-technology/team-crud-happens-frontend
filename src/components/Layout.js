import React from 'react';
import { Container } from 'react-bootstrap';

//this file is to is to wrap our components with a similar look.
//Props are properties that get passed to the component. 
//Container element from bootstrap centers text on the page, keeps it from touching top/bottom of page.
//props.children means anything we wrap will render right in the middle of page.

export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)