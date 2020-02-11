const initState = {
    notices: [
        { id: 1, title: 'Notice 1 Title', content: 'Notice 1 Content', tags: 'asd, asd, asd' },
        { id: 2, title: 'Notice 2 Title', content: 'Notice 2 Content', tags: 'asd, asd, asd' },
        { id: 3, title: 'Notice 3 Title', content: 'Notice 3 Content', tags: 'asd, asd, asd' },
    ]
}

const noticesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_NOTICE':
            console.log('Notice created', action.notice);
            return state;
            /* falls through */
        case 'CREATE_NOTICE_ERROR':
            console.log('Create notice error: ', action.err);
            return state;
            /* falls through */
        default: 
            return state;
    }
}

export default noticesReducer;

