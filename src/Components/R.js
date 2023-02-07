import React, { useState, useContext, useEffect } from 'react'
import LogContext from '../Context/logs/logContext'

const R = ({ name }) => {
    const { write } = useContext(LogContext);
    const [cntr, setCntr] = useState(0);

    useEffect(() => {
        write(`${name} Mounted`);
        return () => write(`${name} Unmounted`);
    }, [write, name]);

    useEffect(() => {
        write(`${name} state updated cntr:${cntr}`);
    }, [cntr, write, name])

    return (
        <div className='df'>
            <h1>{name}</h1>
            <button className='btn' onClick={() => setCntr(prev => prev + 1)}>cntr={cntr}</button>
        </div>
    )
}

export default R;