import React from 'react';
import communityJoy from '../assets/communityJoy.jpg';
import { Row, Col, } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import '../App.css';


//using the fat arrow syntax in my function so it help in decreasing line of code. 
//<Row> is a component that will display picture image in the form of a row.
//<Col> is a component that will display picture image in the form of a column.
//<Image> is a component that will put my image in my home page. 
//Fluid- is a prop that scales the image to the size of the page.


export const Home = () => (
        <div>
        <h1>Welcome To Our Community!</h1>
        <Row className="show-grid text-center">
        <Col xs={12} sm={12} className="">
        <Image src= {communityJoy} alt="holder.js/100px250" fluid>
        </Image>
        </Col>
        </Row>
        
      <p>
      Stroke Survivors are living testimonies. They have endured much and came out on the otherside victorious! 
      </p>
      </div>
    )

