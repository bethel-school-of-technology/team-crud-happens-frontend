import React from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';
import CardColumns from 'react-bootstrap/CardColumns'

class TreatmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treatments: []
    };
  }

componentDidMount() {
  axios
  .get('http://localhost:5000/treatments')
  .then(res => {
      this.setState({
          treatments: res.data

      })
      console.log(res)
  })
  .catch(err => {
      console.log("Error getting treatments!");
  })
}


  renderTreatmentList() {
    console.log(this.state.treatments)
    return this.state.treatments.map((treatments, index) => {
      const { title, message, name, createdAt } = treatments
      return (

        <Card border="dark"
        bg='light'>

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

      )
    })

  }



  render() {
    return (

      <div>
        <h1 id='title'>Treatments</h1>
        <CardColumns>
            {this.renderTreatmentList()}
       </CardColumns>  
      </div>

    )
  }
}

export default TreatmentList;