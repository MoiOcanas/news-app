import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = {
        email: '',
        pasword: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to="/home" />
        return (
            <div className="col s12 m8">
                <div className="card-new">
                    <div className="card-new-head purple darken-1">
                        <div className="text-center">
                            <h4 className="white-text">Login</h4>
                        </div>
                    </div>
                    <div className="card-new-content">
                        <form className="col s12" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" onChange={this.handleChange} />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" onChange={this.handleChange} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <button className="btn purple darken-1 z-depth-0" type="submit" name="action">Login</button>
                            <div className="red-text center">
                                {authError ? <p>{authError}</p> : null}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);