import React from 'react';
import { Link } from 'react-router-dom';
const NavContainer = ({ titulo,dir}) => {
    return (
        <>
            <li><Link to={dir}>{titulo}</Link></li>
        </>
    )
}

export default NavContainer
