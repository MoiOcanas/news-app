import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

//Components
import NewsList from './notices/NewsList';

class HomePage extends Component {
    render() {
        const { notices } = this.props; 
        return (
            <NewsList notices={notices}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notices: state.firestore.ordered.notices,
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'notices', orderBy: ['createdAt', 'desc'] }
    ])
 )(HomePage);
