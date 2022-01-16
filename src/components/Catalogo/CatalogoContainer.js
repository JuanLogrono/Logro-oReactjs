import { AgregarProductos } from "./Eventos"



let catalogoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'black 1px solid',
    margin: '20px 8px',
    width: '15rem',
}


export const CatalogoContainer = ({producto, descripcion, precio }) => {
    return (
        <div style={catalogoStyle}>
            <h3>{producto}</h3>
            <p>{descripcion}</p>
            <p>${precio}</p>
            <AgregarProductos/> <button>Agregar al carrito</button>
        </div>
    )
}



