import React from 'react';
import CreateTestimony from './CreateTestimony';
import '../App.css';

class DisplayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonies: []
    };
  }




  renderDisplayList() {
    return this.state.testimonies.map((testimony, index) => {
      const { title, message, name, tags } = testimony
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
        <h1 id='title'>Testimonies</h1>
        <table id='testimonies'>
          <tbody>
            {this.renderDisplayList()}
          </tbody>
        </table>
      </div>

    )
  }
}

export default DisplayList;