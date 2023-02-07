import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogContext from '../Context/logs/logContext'

const NavBar = () => {
    const navigate = useNavigate();
    const { write } = useContext(LogContext);

    const btnHandler = () => {
        navigate(-1);
        write('Back Btn Pressed');
    }

    return (
        <nav className='nav'>
            <button className='btn' onClick={btnHandler} >Back</button>
            <Link className='btn' to='/'>Home</Link>
            <Link className='btn' to='/r1'>R1</Link>
            <Link className='btn' to='/r2'>R2</Link>
        </nav>
    )
}

export default NavBar;