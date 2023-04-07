import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=' items-center font-bold flex gap-4'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/order'}>Order</Link>
        </nav>
    );
};

export default Header;