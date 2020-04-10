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
            <div className="card-secondary">

                <h4>SignUp</h4>

                <form className="col s12" onSubmit={this.handleSubmit}>

                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" className="input" type="text" onChange={this.handleChange} />

                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" className="input" type="text" onChange={this.handleChange} />
                    
                    <label htmlFor="email">Email</label>
                    <input id="email" className="input" type="email" onChange={this.handleChange} />
                    
                    <label htmlFor="password">Password</label>
                    <input id="password" className="input" type="password" onChange={this.handleChange} />

                    <button className="signup" type="submit" name="action">Submit</button>
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