import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{display:'flex', gap:'20px', justifyContent:'center', marginBottom:'40px', marginTop:'10px'}}>
            <Link to='/'>Home</Link>      
            <Link to='/add'>Add</Link>      
            <Link to='/manage'>Manage</Link>      
        </div>
    );
};

export default Header;