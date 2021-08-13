import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddContact from './AddContact';
import EditContact from './EditContact';

import Contacts from './Contacts';
import Nav from './Nav';



function App() {
    return (

        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/Contact" element={<Contacts />} />
                    <Route path="/add.contact" element={<AddContact />} />
                    <Route path="/edit.contact/:id" element={<EditContact />} />

                </Routes>
            </Router>


        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
