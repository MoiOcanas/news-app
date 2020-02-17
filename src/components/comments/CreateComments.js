import React, { Component } from 'react';
import { addComment } from '../../store/actions/noticesActions';
import { connect } from 'react-redux'

class CreateComments extends Component {
    state = {
        comment: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const id = this.props.id
        this.props.addCommentDispatch(this.state, id);
        this.setState({
           comment: '' 
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="card-noti">
                        <div className="row">
                            <h5 className="grey-text text-darken-3">Comment:</h5>
                            <div className="input-field col s12">
                                <textarea name="comment" id="comment" className="materialize-textarea" cols="30" rows="10"
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="input-field">
                            <button type="submit" className="btn purple darken-1 z-depth-0">Comment</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCommentDispatch: (comment, id) => dispatch(addComment(comment, id))
    }
}

export default connect(null, mapDispatchToProps)(CreateComments);

