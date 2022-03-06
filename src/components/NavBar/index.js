import './style.css';
import { IconoCarrito} from '../iconos/Iconos'
import logo from '../iconos/imagenes/logo.png';
import NavContainer from './NavContainer';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';

const NavBar = () => {
    return (
        <header>
            <Link className='nav__link--size' to="/"><img className='nav__link--imgSize' src={logo} alt='Nala' /></Link>
            <nav>
                <ul className="ul__items--orden">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='about'>Nosotros</Link></li>
                    <NavContainer titulo='Productos' dir='products' category1='Mujer' dir1='category/mujer' category2='Hombre' dir2='category/hombre' category3='Accesorios' dir3='category/accesorios' />
                </ul>
                <Link className='link__cart--orden' to='/Cart' ><IconoCarrito /><CartWidget /></Link>

            </nav>
        </header>
    )
}
export default NavBar