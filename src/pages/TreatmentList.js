import React from 'react';
import '../App.css';
//import TreatmentList from './TreatmentList';

class TreatmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treatments: []
    };
  }




  renderTreatmentList() {
    return this.state.treatments.map((treatments, index) => {
      const { title, message, name, tags } = treatments
      return (
        <tr key={title}>
          <td>{title}</td>
          <td>{message}</td>
          <td>{name}</td>
          <td>{tags}</td>
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