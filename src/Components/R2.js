import React, { useState, useContext, useEffect } from 'react'
import LogContext from '../Context/logs/logContext'

const R2 = () => {
    const { write } = useContext(LogContext);
    const [cntr, setCntr] = useState(0);

    useEffect(() => {
        write('R2 Mounted');
        return () => write('R2 Unmounted');
    }, [write]);

    useEffect(() => {
        write(`R2 state updated cntr:${cntr}`);
    }, [cntr, write])

    return (
        <div className='df'>
            <h1>R2</h1>
            <button className='btn' onClick={() => setCntr(prev => prev + 1)}>cntr={cntr}</button>
        </div>
    )
}

export default R2;