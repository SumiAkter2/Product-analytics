import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/reviews'>Reviews</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        
            
        </nav>
    );
};

export default Navbar;