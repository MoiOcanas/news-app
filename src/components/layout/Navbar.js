import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Components
import AuthLinks from './AuthLinks';
import NoAuthLinks from './NoAuthLinks';


class Navbar extends Component {

    componentDidMount = () => {
        let sidenav = document.querySelector('#mobile-demo');
        M.Sidenav.init(sidenav, {});
    }

    render() {
        const { auth, profile } = this.props;
        const links = auth.uid ? <AuthLinks profile={profile} /> : <NoAuthLinks />;
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="white">
                        <div className="container">
                            <div className="nav-wrapper">
                                <span className="brand-logo">
                                    <b>News Manager</b>
                                </span>
                                <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                                <ul className="right hide-on-med-and-down">
                                    {links}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <ul className="sidenav" id="mobile-demo">
                    {links}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);
