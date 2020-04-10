import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Profile = ({ profile, auth }) => {
    console.log(profile)
    if (!auth.uid) return <Redirect to='/' />

    return (
        <div className="card-secondary text-center">
            <h3>My Profile</h3>
            <div className="m-4">
                <img alt="profile" className="responsive-img" src={profile.photoURL} />
            </div>
            <h6><b>First Name:</b> {profile.firstName}</h6>
            <h6><b>Last Name:</b> {profile.lastName}</h6>
            <h6><b>Email:</b> {auth.email}</h6>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Profile)
