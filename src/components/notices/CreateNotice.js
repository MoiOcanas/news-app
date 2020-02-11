import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNotice } from '../../store/actions/noticesActions';
import { Redirect } from 'react-router-dom';

class CreateNotice extends Component {
    state = {
        title: '',
        content: '',
        tags: ''
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
        if(!auth.uid) return <Redirect to="/signin" />
        return (
            <div className="card-new">
                <form onSubmit={this.handleSubmit} className="col s12 p-3">
                    <div className="text-center">
                        <h4>Create a notice</h4>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="title" type="text" onChange={this.handleChange} />
                            <label htmlFor="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="content" type="text" onChange={this.handleChange}/>
                            <label htmlFor="content">Content</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="tags" type="text" onChange={this.handleChange}/>
                            <label htmlFor="tags">Tags</label>
                        </div>
                    </div>
                    <button className="btn purple darken-1" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
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
