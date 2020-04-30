export const SearchReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SEARCH':
            return action.payload != '' ?
            { ...state, search: `filter[text]=${action.payload}&` }
            :
            { ...state, search: action.payload }
        case 'CLEAR_SEARCH':
            return { ...state, search: '' }
        default:
            return state;
    }
};