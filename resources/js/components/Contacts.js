import React, { Component } from 'react';
import axios from 'axios';


class Contacts extends Component {
    state = {
        contacts: [],
    };

    getAllContacts = async () => {
        const res = await axios.get("/contact").then((result) => {
            this.setState({ contacts: result.data.contacts });




        });
    }

    componentDidMount = () => {
        this.getAllContacts();
    }
    render() {
        return (
            <div className="col-md-8 offset-md-2">
                <h1>Contact  </h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map((contact, i) => {
                            return (

                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>
                                        <a className="btn btn-primary">Edit</a>
                                        <a className="btn btn-danger">Delete</a>
                                    </td>


                                </tr>
                            )



                        })}



                    </tbody>
                </table>

            </div>
        );
    }
}

export default Contacts;