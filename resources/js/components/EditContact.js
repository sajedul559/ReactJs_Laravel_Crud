import React, { Component } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

class EditContact extends Component {

    state = {
        name: "",
        email: "",
        phone: ""
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    UpdateContact = async (e) => {
        e.preventDefault();
        const id = this.props.params.id;
        const res = await axios.patch(`/contact/${id}`, this.state)
            .then((result) => {

                this.props.navigate("/Contact");

            })



    };

    componentDidMount = async () => {

        const id = this.props.params.id;
        const res = await axios.get(`/contact/${id}/edit`).then((result) => {
            this.setState({

                name: result.data.contacts.name,
                email: result.data.contacts.email,

                phone: result.data.contacts.phone


            }
            )


        });
        console.log(id);
    }
    render() {
        return (
            <div className="row">
                <div className="col-6 offset-md-3  mt-5">
                    <h1>Edit  Contacts</h1>
                    <hr />
                    <form onSubmit={this.UpdateContact}>
                        <div className="form-group ">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" className="form-control" value={this.state.name} onChange={(event) => this.handleChange(event)}
                                placeholder="Enter full name " required />

                        </div>
                        <div className="form-group ">
                            <label htmlFor="email">email</label>
                            <input type="email" name="email" className="form-control" value={this.state.email} onChange={(event) => this.handleChange(event)}
                                placeholder="Enter your email  " required />

                        </div>
                        <div className="form-group ">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" name="phone" className="form-control" value={this.state.phone} onChange={(event) => this.handleChange(event)}
                                placeholder="Enter your phone " required />

                        </div>

                        <div className="form-group ml-1">
                            <input type="submit" className="btn btn-primary" value="Update Contacts" />

                        </div>

                    </form>

                </div>

            </div>
        );
    }
}




const withNavigate = props => {
    let navigate = useNavigate();
    let params = useParams();

    return (
        <EditContact {...props} navigate={navigate} params={params} />
    );
};

export default withNavigate;
