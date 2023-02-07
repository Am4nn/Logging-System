import React, { useCallback, useReducer } from 'react';
import LogContext from './logContext';
import LogReducer from './logReducer';
import { SET_LOG, REMOVE_LOG, CLEAR_LOG } from './types';

const initialState = [];

const LogState = props => {

    const [log, dispatch] = useReducer(LogReducer, initialState);

    const write = useCallback((msg) => {
        dispatch({
            type: SET_LOG,
            payload: msg
        });
    }, [])

    const pop = useCallback((afterms = 0, msg) => {
        setTimeout(() => {
            dispatch({
                type: REMOVE_LOG,
                payload: { msg }
            });
        }, afterms);
    }, [])

    const clear = useCallback(() => {
        dispatch({
            type: CLEAR_LOG
        });
    }, [])

    return (
        <LogContext.Provider
            value={{
                log,
                write,
                pop,
                clear
            }}
        >
            {props.children}
        </LogContext.Provider>
    );
};

export default LogState;