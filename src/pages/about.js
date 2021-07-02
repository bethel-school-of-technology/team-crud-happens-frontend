import React from 'react';
import juniorPictwo from '../assets/juniorPictwo.jpg';
import johnPictwo from '../assets/johnPictwo.jpg';
import epiPictwo from '../assets/epiPictwo.jpg';
import { Row, Col, } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import '../App.css';

export const About = () => (
        <div>
        <h1>About</h1>

        <Row className="show-grid text-center">
        <Col xs={12} sm={4} className="person-wrapper">
        <Image src= {juniorPictwo} circle className="profile-pic" alt="holder.js/100px250" roundedCircle fluid/>
        <h3>Junior</h3>
        <p>This is Junior. He is amazing!</p>
        </Col>

        <Col xs={12} sm={4} className="person-wrapper">
        <Image src= {johnPictwo} circle className="profile-pic" alt="holder.js/100px250" roundedCircle fluid/>
        <h3>John</h3>
        <p>This is John. He is amazing!</p>
        </Col>

        <Col xs={12} sm={4} className="person-wrapper">
        <Image src= {epiPictwo} circle className="profile-pic" alt="holder.js/100px250" roundedCircle fluid/>
        <h3>John</h3>
        <p>This is Epi. He is amazing!</p>
        </Col> 
        </Row> 
        
        </div>
       

      
    )