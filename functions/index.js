const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((require, res) => {
    res.send('Hello from firebase');
});

const createNotification = (
    (notification) => {
        return admin.firestore().collection('notifications')
            .add(notification)
            .then(doc => console.log('Notification added: ', doc));
    }
);

exports.noticeCreated = functions.firestore
    .document('notices/{noticeId}')
    .onCreate(doc => {
        const notice = doc.data();
        const notification = {
            content: 'Added a new notice',
            user: `${notice.authorFirstName} ${notice.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
});

exports.userJoined = functions.auth.user().onCreate(user => {
    return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notification = {
            content: 'Joined the party',
            user:`${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
    })
});
