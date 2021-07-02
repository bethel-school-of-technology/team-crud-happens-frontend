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
            imageValid: 'true'
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    fileChange = e => {
        this.setState({ file: e.target.files[0] })
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            title: this.state.title,
            message: this.state.message,
            name: this.state.name,
        };
        console.log(data)

        let fileData = new FormData();
        if (!this.state.file) {
            this.setState({ imageValid: false })
            return
        }


        fileData.set(
            'image',
            this.state.file,
            `${this.state.file.lastmodified}-${this.state.file.name}`,
        )
        fileData.set(
            'name',
            this.state.name
        )
        fileData.set(
            'title',
            this.state.title
        )
        fileData.set(
            'message',
            this.state.message
        )


        axios
            .post('http://localhost:5000/testimony', fileData)
            .then(res => {
                console.log(res)
                this.setState({
                    title: '',
                    message: '',
                    name: '',
                    file: '',
                    imageValid: 'true',

                })
                window.location.reload(false)
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
                                        type='file'
                                        placeholder='Image'
                                        name='image_url'
                                        className='form-control'
                                        onChange={this.fileChange}
                                    />
                                    {this.state.imageValid ? false : <p>show your face please</p>}
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

export default CreateTestimony;