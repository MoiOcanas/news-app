import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const NoticeDetails = (props) => {
    const { notice } = props;
    console.log(notice);
    if (notice) {
        return (
            <div className="card-new">
                <h3>{notice.title}</h3>
                <p>{notice.content}</p>
                <p><strong>By:</strong> <span className="purple-text">{notice.authorFirstName} {notice.authorLastName}</span></p>
                Tags: <strong>{notice.tags}</strong>
            </div>
        );
    } else {
        return (
            <p>Loading notice...</p>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const notices = state.firestore.data.notices;
    const notice = notices ? notices[id] : null;
    return {
        notice: notice
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'notices' }
    ])
)(NoticeDetails);
