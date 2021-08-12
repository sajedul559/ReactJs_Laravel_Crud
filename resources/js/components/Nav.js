import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/home">home4</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link" to="/Contact">Contacts</Link>
                            <Link className="nav-item nav-link" to="/home">home</Link>
                            <Link className="nav-item nav-link " to="/add.contact">AddContacts</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;