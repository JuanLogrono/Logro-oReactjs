import './navBar.css';
import logo from './navBarAssets/logo.png';
import flecha from './navBarAssets/flecha.png';
import buscar from './navBarAssets/buscar.png'
export const NavBar = () => {
    return (
        <header>
           <img src={logo} alt='nada'/>
            <nav>
                <ul className="ul__items--orden">
                    <li>Mujer<img className='li__flecha--orden' src={flecha} alt='flecha abajo'/>
                        <ul className='ul__lista--mostrar'>
                            <li className='li__opciones--estilos'>Buzo</li>
                            <li className='li__opciones--estilos'>Remera</li>
                            <li className='li__opciones--estilos'>Pantalón</li>
                        </ul>
                    </li>
                    <li>Hombre<img className='li__flecha--orden' src={flecha} alt='flecha abajo'/>
                        <ul className='ul__lista--mostrar'>
                            <li className='li__opciones--estilos'>Buzo</li>
                            <li className='li__opciones--estilos'>Remera</li>
                            <li className='li__opciones--estilos'>Pantalón</li>
                        </ul>
                    </li>
                    <li>Accesorios<img className='li__flecha--orden' src={flecha} alt='flecha abajo'/>
                        <ul className='ul__lista--mostrar'>
                            <li className='li__opciones--estilos'>Guantes</li>
                            <li className='li__opciones--estilos'>Bufandas</li>
                            <li className='li__opciones--estilos'>Gorros</li>
                        </ul>
                    </li>
                    <li className='header__buscador--estilo'><input placeholder="Buscar" name='buscador' />
                        <button><img src={buscar} alt='buscar'/></button>
                    </li>
                </ul>
            </nav>
        </header>
    )
} 