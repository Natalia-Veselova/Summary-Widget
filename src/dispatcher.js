import React, { createContext, useReducer } from 'react';

export const DispatcherContext = createContext();

export const DispatcherProvider = ({ reducer, initialState, children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <DispatcherContext.Provider value={{ state, dispatch }}>
            {children}
        </DispatcherContext.Provider>
    );
};



