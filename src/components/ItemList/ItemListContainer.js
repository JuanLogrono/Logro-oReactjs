import ItemCount  from "../ItemCount"

export const ItemListContainer = ({producto, descripcion, precio, stock, initial}) => {
    return (
        <div className="ItemListContainer__items--styles">
            <h3>{producto}</h3>
            <p>{descripcion}</p>
            <p>${precio}</p>
           <ItemCount stock={stock} initial = {initial}/>           
        </div>
    )
}



