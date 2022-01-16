import './style.css';
import { IconoCarrito, IconoLupa } from '../iconos/Iconos'
import logo from './navBarAssets/logo.png';
import NavContainer from './NavContainer';

const NavBar = () => {
    return (
        <>
            <img src={logo} alt='Nala' />
            <nav>
                <ul className="ul__items--orden">
                    <NavContainer titulo='Mujer' productoUno='Buzo' productoDos='Remera' productoTres='Pantalón' />
                    <NavContainer titulo='Hombre' productoUno='Buzo' productoDos='Remera' productoTres='Pantalón' />
                    <NavContainer titulo='Accesorios' productoUno='Guantes' productoDos='Bufandas' productoTres='Gorros' />
                    <li className='header__buscador--estilo'><input placeholder="Buscar" name='buscador' />
                        <button><IconoLupa/></button>
                    </li>
                </ul>
                <IconoCarrito />
            </nav>
        </>
    )
} 
export default NavBar