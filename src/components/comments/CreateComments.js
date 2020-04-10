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
                    <div className="card-secondary">
                        <h5>Comment:</h5>
                        <textarea name="comment" id="comment" className="comment-input text-area" cols="30" rows="10"
                            onChange={this.handleChange} />

                        <div className="input-field">
                            <button type="submit" className="create-button">Comment</button>
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

