import React from 'react';
import axios from 'axios';
import '../App.css';



class CreateTreatments extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            message: '',
            name: '',
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
        };
        console.log(data)

        axios
            .post('http://localhost:5000/treatments', data)
            .then(res => {
                console.log(res)
                this.setState({
                    title: '',
                    message: '',
                    name: '',

                })
                window.location.reload(false)
                
            })
            .catch(err => {
                console.log("Error in CreateTreatments!");
            })
    };



    render() {
        return (
            <div className="CreateTreatments">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">

                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Add Treatment</h1>


                            <form noValidate onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Treatment Title'
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

export default CreateTreatments;