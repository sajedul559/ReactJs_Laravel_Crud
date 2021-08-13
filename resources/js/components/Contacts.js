import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class Contacts extends Component {
    state = {
        contacts: [],
    };

    getAllContacts = async () => {
        const res = await axios.get("/contact").then((result) => {
            this.setState({ contacts: result.data.contacts });




        });
    }
    deleteContact = async (id) => {
        const res = await axios.delete(`/contact/${id}`).then((result) => {

            this.getAllContacts();


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
                                        <a onClick={() => this.deleteContact(contact.id)} className="btn btn-danger">Delete</a>
                                        <Link to={`/edit.contact/${contact.id}`} className="btn btn-primary">Edit</Link>
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