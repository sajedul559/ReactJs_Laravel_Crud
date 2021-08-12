import React, { Component } from 'react';

class AddContact extends Component {

    state = {
        name: "sadd",
        email: "sajedul@gmail.com ",
        phone: "01765 "
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    saveContact = async (e) => {
        e.preventDefault();
        // const res = await axios.post("/contact", this.state);
        // console.log(res);

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
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email " className="form-control"
                                value={this.state.email} onChange={(event) => this.handleChange(event)} placeholder="Enter your Email  " required />

                        </div>
                        <div className="form-group ">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" name="phone " className="form-control"
                                value={this.state.phone} onChange={(event) => this.handleChange(event)} placeholder="Enter Your Phone " required />

                        </div>

                    </form>

                </div>

            </div>
        );
    }
}

export default AddContact;