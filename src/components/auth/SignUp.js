import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to="/home" />
        return (
            <div className="card-new">

                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="text-center">
                        <h4>SignUp</h4>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName" type="text" onChange={this.handleChange} />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName" type="text" onChange={this.handleChange} />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" onChange={this.handleChange} />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" onChange={this.handleChange} />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button className="btn purple darken-1" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
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
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);