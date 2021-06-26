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
      const { title, message, name, tags, createdAt } = testimony
      return (
        <CardColumns>
          <Card
            bg='dark'>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Header>{title}</Card.Header>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {message}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{createdAt}</small>
            </Card.Footer>
          </Card>
        </CardColumns>
      )
    })

  }



  render() {
    return (

      <div>
        <h1 id='title'>Testimonies</h1>
        {this.renderDisplayList()}
      </div>

    )
  }
}

export default DisplayList;