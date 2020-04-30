import React, {createContext, useReducer } from 'react';
import { ThemeReducer } from './reducers/ThemeReducer'

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [state, dispatch] = useReducer(ThemeReducer, { search:'' });
    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;