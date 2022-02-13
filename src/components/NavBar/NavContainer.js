import React from 'react';
import { Link } from 'react-router-dom';
import { IconoFlechaMenu } from '../iconos/Iconos';
const NavContainer = ({ titulo, dir, category1, category2, category3, dir1, dir2, dir3 }) => {   

    return (
            <li className='nav__category--style'><Link to={dir}>{titulo}</Link> <IconoFlechaMenu/>
                <ul >             
                    <li><Link to={dir1}>{category1}</Link></li>
                    <li><Link to={dir2}>{category2}</Link></li>
                    <li><Link to={dir3}>{category3}</Link></li>
                </ul>
            </li>
      

    )
}

export default NavContainer
