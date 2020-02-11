import React from 'react';
import { NavLink } from 'react-router-dom';

const NoAuthLinks = () => {
    return (
        <div>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/signin">Login</NavLink></li>
            <li><NavLink to="/signup">SignUp</NavLink></li>
        </div>
    );
}

export default NoAuthLinks;
