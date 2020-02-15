import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { deleteNotice } from '../../store/actions/noticesActions';
import { Link } from 'react-router-dom';


const NoticeDetails = (props) => {
    const { notice, dispatchDeleteNotice } = props;
    console.log(props);
    if (notice) {
        return (
            <div className="card-new">
                <h3>{notice.title}</h3>
                <p>{notice.content}</p>
                <p><strong>By:</strong> <span className="purple-text">{notice.authorFirstName} {notice.authorLastName}</span></p>
                <p><strong>Tags:</strong> {notice.tags}</p>
                <hr />
                <button className="btn red darken-3" onClick={(e) => { dispatchDeleteNotice(e, props.id) }}>
                    Delete notice
                    </button>
                <Link to={`/edit/${props.match.params.id}`}>
                    <button className="ml-1 btn green">Edit Notice</button>
                </Link>
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
