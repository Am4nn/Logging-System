import React, { useContext, useEffect, useRef, useState } from 'react'
import LogContext from '../Context/logs/logContext'

const Logger = () => {
    const logContext = useContext(LogContext);
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        setLogs(logContext.log);
    }, [logContext]);

    const mounted = useRef(false);
    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
        } else {
            // do componentDidUpdate logic
            btnRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    });

    const btnRef = useRef(null);

    const clearBtnClickHndlr = () => {
        logContext.clear();
        logContext.write('Logs Cleared');
        logContext.pop(900, 'Logs Cleared');
    }

    return (
        <div className='lgr'>
            <h2>LOGS</h2>
            <div className='msgs'>
                {
                    logs.map(log => {
                        return (<div key={log.id}>{log.msg}</div>);
                    })
                }
                <span className='btncntr'>
                    <button className={`btn ${logs.length === 0 && 'disabled'}`} onClick={clearBtnClickHndlr} ref={btnRef}>Clear Logs</button>
                </span>
            </div>
        </div>
    )
}

export default Logger;