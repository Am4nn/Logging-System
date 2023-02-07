import React, { useState, useContext, useEffect } from 'react'
import LogContext from '../Context/logs/logContext'

const R1 = () => {
    const { write } = useContext(LogContext);
    const [cntr, setCntr] = useState(0);

    useEffect(() => {
        write('R1 Mounted');
        return () => write('R1 Unmounted');
    }, [write]);

    useEffect(() => {
        write(`R1 state updated cntr:${cntr}`);
    }, [cntr, write])

    return (
        <div className='df'>
            <h1>R1</h1>
            <button className='btn' onClick={() => setCntr(prev => prev + 1)}>cntr={cntr}</button>
        </div>
    )
}

export default R1;