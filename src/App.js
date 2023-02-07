import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import R1 from './Components/R1';
import R2 from './Components/R2';
import NavBar from './Components/NavBar';
import Logger from './Components/Logger';
import Home from './Components/Home';
import LogContext from './Context/logs/logContext'

function App() {
    const { write } = useContext(LogContext);

    useEffect(() => {
        write('App Mounted');
        return () => write('App Unmounted');
    }, [write]);

    return (
        <div className='df cnt'>
            <NavBar />
            <Logger />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/r1' element={<R1 />} />
                <Route exact path='/r2' element={<R2 />} />
            </Routes>
        </div>
    );
}

export default App;