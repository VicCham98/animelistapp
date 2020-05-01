export const SearchReducer = (state, action) => {
    switch (action.type) {
        case 'ENABLE_SEARCH':
            return {...state, status: true }
        case 'DISABLE_SEARCH':
            return {...state, status: false }
        case 'ADD_SEARCH':
            return action.payload != '' ?
            { ...state, search: action.payload }
            :
            { ...state, search: action.payload }
        case 'CLEAR_SEARCH':
            return { ...state, search: '' }
        default:
            return state;
    }
};