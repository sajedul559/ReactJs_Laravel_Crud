import React, { Component } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

class AddContact extends Component {

    state = {
        name: "",
        email: "",
        phone: ""
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    saveContact = async (e) => {
        e.preventDefault();
        const res = await axios.post("/contact", this.state)
            .then((result) => {
                this.setState({ name: "", email: "", phone: "" })
                this.props.navigate("/Contact");

            }).catch((err) => {

            });
        // console.log(res);
        // if (res.data.status === 200) {

        //     this.setState({ name: "", email: "", phone: "" })
        //     this.props.navigate("/Contact");
        // }

    }
    render() {
        return (
            <div className="row">
                <div className="col-6 offset-md-3  mt-5">
                    <h1>Add Contacts</h1>
                    <hr />
                    <form onSubmit={this.saveContact}>
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
                            <input type="submit" className="btn btn-primary" value="AddContacts" />

                        </div>

                    </form>

                </div>

            </div>
        );
    }
}




const withNavigate = props => {
    let navigate = useNavigate();
    return (


        <AddContact {...props} navigate={navigate} />
    );
};

export default withNavigate;
