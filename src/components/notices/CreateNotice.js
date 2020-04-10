import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNotice } from '../../store/actions/noticesActions';
import { Redirect } from 'react-router-dom';

class CreateNotice extends Component {
    state = {
        title: '',
        content: '',
        tags: '',
        image: null,
        photoURL: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createNotice(this.state);
        alert('Notice created');
        this.props.history.push('/home');
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to="/signin" />
        return (
            <div className="card-secondary">
                <h4>Create a notice</h4>
                <form onSubmit={this.handleSubmit} className="col s12">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" className="input" onChange={this.handleChange} />

                    <label htmlFor="tags">Tags</label>
                    <input id="tags" type="text" className="input" onChange={this.handleChange} />

                    <label htmlFor="content">Content</label>
                    <textarea id="content" rows="10" cols="20" className="create-notice-input text-area" onChange={this.handleChange}></textarea>

                    
                    <br />

                    <button className="submit-button" type="submit" name="action">Submit</button>
                </form>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNotice: (notice) => dispatch(createNotice(notice))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNotice);
