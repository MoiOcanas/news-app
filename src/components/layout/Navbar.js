import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Components
import AuthLinks from './AuthLinks';
import NoAuthLinks from './NoAuthLinks';


class Navbar extends Component {
    state = {}

    componentDidMount = () => {
        var elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        const { auth, profile } = this.props;
        const links = auth.uid ? <AuthLinks profile={profile} /> : <NoAuthLinks />;
        console.log(profile);
        return (
            <div className="navbar-fixed">
                <nav className="grey darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <span className="brand-logo">
                                <i className="large material-icons">language</i>
                                News Manager
                            </span>
                            <Link data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                            <ul className="right hide-on-med-and-down">
                                { links }
                            </ul>
                        </div>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    { links }
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
