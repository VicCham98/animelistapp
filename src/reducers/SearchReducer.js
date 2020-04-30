export const SearchReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SEARCH':
            return { ...state, search: action.payload }
        case 'CLEAR_SEARCH':
            return { ...state, search: '' }
        default:
            return state;
    }
};