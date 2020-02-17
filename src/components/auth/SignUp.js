import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { storage } from '../../config/fbConfig';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        image: null,
        photoURL: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleChangeImage = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState({ image });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed', (snapshot) => {
            storage.ref('images').child(image.name).getDownloadURL().then(photo => {
                console.log(photo)
                this.setState({ photoURL: photo })
                this.props.signUp(this.state)
            })
        })
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to="/home" />
        return (
            <div className="card-new">
                <div className="card-new-head purple darken-1">
                    <div className="text-center">
                        <h4 className="white-text">SignUp</h4>
                    </div>
                </div>
                <div className="card-new-content">
                    <form className="col s12" onSubmit={this.handleSubmit}>
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
                                <label htmlFor="password">Image</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="file" id="image" onChange={this.handleChangeImage} />
                                <label className="btn purple darken-1 z-depth-0 white-text" style={{ cursor: 'pointer' }} htmlFor="image">Select you profile picture</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" onChange={this.handleChange} />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <button className="btn purple darken-1 z-depth-0" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                        </button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </form>
                </div>
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