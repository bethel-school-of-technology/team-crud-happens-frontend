import React from 'react';
import '../App.css';
import axios from 'axios';

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
      const { title, message, name, tags, createdAt } = treatments
      return (
        // <div>{createdAt}</div>
        <tr>
          <td>{title}</td>
          <td>{message}</td>
          <td>{name}</td>
          <td>{tags}</td>
          <td>{createdAt}</td>
        </tr>
      )
    })

  }



  render() {
    return (

      <div>
        <h1 id='title'>Treatments</h1>
        <table id='treatments'>
          <tbody>
            {this.renderTreatmentList()}
          </tbody>
        </table>
      </div>

    )
  }
}

export default TreatmentList;