import React from 'react';

import '../App.css';

class DisplayList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        testimony: {}
      };
    }
  
    
  
  
    render() {
  
      const testimony = this.state.testimony;
      let TestimonyItem = <div>
        <table className="table table-hover table-dark">
          {/* <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead> */}
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>Title</td>
              <td>{ testimony.title }</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Name</td>
              <td>{ testimony.name }</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Message</td>
              <td>{ testimony.message }</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Tag</td>
              <td>{ testimony.tag }</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      return (
        <div className="DisplayList">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <br /> <br />
                
              </div>
              <br />
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Testimony Record</h1>
                <p className="lead text-center">
                    View Testimony Info
                </p>
                <hr /> <br />
              </div>
            </div>
            <div>
              { TestimonyItem }
            </div>
  
           
              
  
          </div>
        </div>
      );
    }
  }
  
  export default DisplayList;