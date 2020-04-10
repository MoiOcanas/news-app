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
            <div className="card-secondary">

                <h4>Login</h4>

                <form className="col s12" onSubmit={this.handleSubmit}>

                    <label htmlFor="email">Email</label>
                    <input className="input" id="email" type="email" onChange={this.handleChange} />

                    <label htmlFor="password">Password</label>
                    <input className="input" id="password" type="password" onChange={this.handleChange} />

                    <button className="submit-button" type="submit" name="action">Login</button>

                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </form>

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