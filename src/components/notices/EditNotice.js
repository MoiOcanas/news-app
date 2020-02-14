import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class EditNotice extends Component {
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

    }

    componentDidMount = () => {
    }

    render() {
        const { notice } = this.props;
        if(notice) {
            return (
                <div className="card-new">
                    <form onSubmit={this.handleSubmit} className="col s12 p-3">
                        <div className="text-center">
                            <h4>Edit notice</h4>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="title" type="text" value={notice.title} onChange={this.handleChange} />
                                <label htmlFor="title">Title</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="content" type="text" value={notice.content}  onChange={this.handleChange} />
                                <label htmlFor="content">Content</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="tags" type="text" value={notice.tags} onChange={this.handleChange} />
                                <label htmlFor="tags">Tags</label>
                            </div>
                        </div>
                        <button className="btn purple darken-1" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <h3>Loading new...</h3>
                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const notices = state.firestore.data.notices;
    const notice = notices ? notices[id] : null;
    return {
        notice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'notices' }
    ])
)(EditNotice);
