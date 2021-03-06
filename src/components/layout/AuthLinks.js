import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const AuthLinks = (props) => {
    return (
        <div>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/create">Create notice</NavLink></li>
            <li><Link to="#" onClick={props.signOut}>Log Out</Link></li>
            {/* <li>
                <NavLink to="/profile">
                    <img alt="profile" className="circle responsive-img" src={props.profile.photoURL} />
                </NavLink>
            </li> */}
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(AuthLinks);