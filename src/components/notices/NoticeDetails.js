import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { deleteNotice } from '../../store/actions/noticesActions';


//Components
import CreateComments from '../comments/CreateComments';
import CommentsList from '../comments/CommentsList';

const NoticeDetails = (props) => {
    const { notice, dispatchDeleteNotice } = props;
    if (notice) {
        return (
            <div>
                <div className="card-secondary">
                    <h4>{notice.title}</h4>
                    <p>{notice.content}</p>
                    <p><b>By:</b> <span>{notice.authorFirstName} {notice.authorLastName}</span></p>
                    <p><b>Tags:</b> {notice.tags}</p>
                    <button className="delete-button" onClick={(e) => { dispatchDeleteNotice(e, props.id) }}>
                        Delete notice
                    </button>
                </div>
                <CreateComments id={props.match.params.id} />
                <CommentsList id={props.match.params.id} />
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
    const auth = state.firebase.auth;
    return {
        id,
        notice,
        auth
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        dispatchDeleteNotice: (e, noticeId) => {
            e.preventDefault();
            dispatch(deleteNotice(noticeId));
            props.history.push('/home');
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => {
        return [
            { collection: 'notices' }
        ]
    })
)(NoticeDetails);
