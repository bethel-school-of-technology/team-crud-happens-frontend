import React from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';
import CardColumns from 'react-bootstrap/CardColumns'



class DisplayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/testimony')
      .then(res => {
        this.setState({
          testimonies: res.data

        })
        console.log(res)
      })
      .catch(err => {
        console.log("Error getting testimonies!");
      })
  }


  renderDisplayList() {
    console.log(this.state.testimonies)
    return this.state.testimonies.map((testimony, index) => {
      const { title, message, name, createdAt, image_url } = testimony
      return (

        
        <Card border="dark" 
          bg='light'>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
          <Card.Header>{title}</Card.Header>
            <Card.Text>
              {message}
            </Card.Text>
            <Card.Subtitle className="text-muted">{name}</Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{createdAt}</small>
          </Card.Footer>
        </Card>
        
      )
    })

  }



  render() {
    return (
      <div>
          <h1 id='title'>Testimonies</h1>
        <CardColumns>
          
          {this.renderDisplayList()}
          

        </CardColumns>
      </div>
    )
  }
}

export default DisplayList;