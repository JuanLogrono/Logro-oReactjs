import './style.css';
import { IconoCarrito, IconoLupa } from '../iconos/Iconos'
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
                    <NavContainer titulo='Home' dir='/'  />
                    <NavContainer titulo='Nosotros' dir='about' />
                    <NavContainer titulo='Productos' dir='products' />
                    <li className='header__buscador--estilo'><input placeholder="Buscar" name='buscador' />
                        <button><IconoLupa/></button>
                    </li>
                </ul>
                <Link className='link__cart--orden' to='/Cart' ><IconoCarrito/>
                <CartWidget/></Link>
                
            </nav>
        </header>
    )
} 
export default NavBar