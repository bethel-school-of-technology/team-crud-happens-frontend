import React from 'react';
import communityJoy from '../assets/communityJoy.jpg';
import { Row, Col, } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import '../App.css';


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

    //<Container>
  //<Row>
  //<Col xs={6} md={4}>
  //  <Image src="holder.js/171x180" rounded />
  //</Col>
  //</Row>
//</Container>

//<Container>
//<Row>
//<Col xs={6} md={4}>
//<img src={communityJoy} />
//</Col>
//</Row>
//</Container>
