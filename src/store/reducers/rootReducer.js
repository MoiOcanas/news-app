import noticesReducer from './noticesReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import  { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    notice: noticesReducer,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;