import React, {createContext, useReducer } from 'react';
import { SearchReducer } from '../reducers/SearchReducer'

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
    const [state, dispatch] = useReducer(SearchReducer, { search:'', status: false });
    return (
        <SearchContext.Provider value={{state, dispatch}}>
            {props.children}
        </SearchContext.Provider>
    );
};

export default SearchContextProvider;