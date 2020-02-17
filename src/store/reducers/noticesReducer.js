const initState = {
    notices: {},
    comments: []
}

const noticesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_NOTICE':
            console.log('Notice created!', action.notice);
            return state;
        /* falls through */
        case 'CREATE_NOTICE_ERROR':
            console.log('Create notice error: ', action.err);
            return state;
        /* falls through */
        case 'DELETE_NOTICE':
            console.log('Notice deleted!');
            return state;
        /* falls through */
        case 'DELETE_NOTICE_ERROR':
            console.log('Delete notice error: ');
            return state;
        /* falls through */
        case 'COMMENT_SUCCESS':
            console.log('add comment success');
            return {
                comments: [...state.comments, action.comment]
            }
        /* falls through */
        default:
            return state;
    }
}

export default noticesReducer;

