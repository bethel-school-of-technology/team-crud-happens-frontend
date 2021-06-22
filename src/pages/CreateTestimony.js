import React from 'react';
import axios from 'axios';
import '../App.css';



class CreateTestimony extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            message: '',
            name: '',
            tags: '',
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            title: this.state.title,
            message: this.state.message,
            name: this.state.name,
            tags: this.state.tags,
        };
        console.log(data)
                
        axios
      .post('http://localhost:8080/testimony', data)
      .then(res => {
        this.setState({
          title: '',
          message:'',
          name:'',
          tags:'',

        })
        this.props.history.push('/testimony');
      })
      .catch(err => {
        console.log("Error in CreateTestimony!");
      })
  };



        render() {
            return (
                <div className="CreateTestimony">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                            
                            </div>
                            <div className="col-md-8 m-auto">
                                <h1 className="display-4 text-center">Add Testimony</h1>


                                <form noValidate onSubmit={this.onSubmit}>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            placeholder='Testimony Title'
                                            name='title'
                                            className='form-control'
                                            value={this.state.title}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            placeholder='Message'
                                            name='message'
                                            className='form-control'
                                            value={this.state.message}
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            placeholder='Name'
                                            name='name'
                                            className='form-control'
                                            value={this.state.name}
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            placeholder='Tags'
                                            name='Tags'
                                            className='form-control'
                                            value={this.state.tags}
                                            onChange={this.onChange}
                                        />
                                    </div>



                                    <input
                                        type="submit"
                                        className="btn btn-outline-warning btn-block mt-4"
                                        
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
            }
    }

    export default CreateTestimony;