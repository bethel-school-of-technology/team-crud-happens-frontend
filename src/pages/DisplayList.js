import React from 'react';

import '../App.css';
import axios from 'axios';

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