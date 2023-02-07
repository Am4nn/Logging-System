import React, { useContext, useEffect } from 'react'
import LogContext from '../Context/logs/logContext'


const Home = () => {
    const { write } = useContext(LogContext);

    useEffect(() => {
        write('Home Mounted');
        return () => write('Home Unmounted');
    }, [write]);

    return (
        <div>{'<HOME />'}</div>
    )
}

export default Home