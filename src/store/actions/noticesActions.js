export const createNotice = (notice) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('notices').add({
            ...notice,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId,
            createdAt: new Date()

        })
        .then(() => {
            dispatch({ type: 'CREATE_NOTICE', notice })
        }).catch((err) => {
            dispatch({ type: 'CREATE_NOTICE_ERROR', err })
        })
    }
};

export const deleteNotice = (noticeId) => {
    console.log('dispatch', noticeId);
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('notices').doc(noticeId).delete()
        .then(() => {
            dispatch({ type: 'DELETE_NOTICE' });
        }).catch((err) => {
            dispatch({ type: 'DELETE_NOTICE_ERROR' });
        })
    }
};