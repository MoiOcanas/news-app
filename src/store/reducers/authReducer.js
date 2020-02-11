const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('Login success.');
            return { ...state, authError: null }
            /* falls through */
        case 'LOGIN_ERROR':
            console.log('Login error.');
            return { ...state, authError: 'Login error.' }
            /* falls through */
        case 'SIGNUP_SUCCESS':
            console.log('Signup success.');
            return { ...state, authError: null };
            /* falls through */
        case 'SIGNUP_ERROR':
            console.log('Signup error.');
            return { ...state, authError: action.err.message }
            /* falls through */
        case 'SIGNOUT_SUCCESS':
                console.log('Signout success.');
            /* falls through */
        default: 
            return state;
            
    }
}

export default authReducer;