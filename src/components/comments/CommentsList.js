import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import moment from 'moment';

const CommentsList = ({ comments }) => {
    console.log(comments);
    return (
        <div>
            {!comments ? "Loading comments..." : comments.map(comm => {
                return (
                    <div className="card-secondary" key={comm.id}>
                        <div>
                            <p>{comm.comment}</p>
                        </div>
                        <hr />
                            <p><b>Posted by:</b> <span>{comm.authorFirstName} {comm.authorLastName}</span></p>
                        <p><b>On:</b> {comm.createdAt ?
                            moment(comm.createdAt.toDate().toString()).calendar() :
                            null}</p>
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    const comments = state.firestore.ordered.notices
    // const newComments = state.projects.comments[0]
    return {
        comments: comments,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        return [
            {
                collection: 'notices',
                doc: props.id,
                subcollections: [{ collection: "comments" }]
            }
        ]
    })
)(CommentsList)
