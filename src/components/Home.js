import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

//Components
import NoticeList from './notices/NoticeList';
import AdtionalInformation from './layout/AdtionalInformation';

class Home extends Component {
    render() {
        const { notices, auth, notifications } = this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        
        return (
            <div>
                <div className="row">
                    <div className="col s12 m6">
                        <NoticeList notices={notices} />
                    </div>
                    <div className="col s12 m6">
                        <AdtionalInformation notifications={notifications}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notices: state.firestore.ordered.notices,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'notices', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
 )(Home);