import React, {useContext} from 'react';
import {NavLink,useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <div>
            <nav>
                <div className="nav-wrapper teal lighten-2" style={{padding: '0 2rem'}}>
                    <span className="brand-logo black-text">Short URL</span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to='/create' className="black-text">Create</NavLink></li>
                        <li><NavLink to='/links' className="black-text">Links</NavLink></li>
                        <li><a href='/' onClick={logoutHandler} className="black-text">Logout</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;