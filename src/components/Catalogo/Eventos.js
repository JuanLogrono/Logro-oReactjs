import { useState } from "react"

export const AgregarProductos = () => {
    const [contador, setContador] = useState(0)
    const sumarProducto = () => (contador < 10) ?contador + 1 : contador
    const restarProducto = () => (contador > 0 ) ? contador - 1 : contador
    return (
        <div className="eventos__contador--orden">
            <button className="eventos__contador--estilos" onClick={() => setContador(restarProducto)}>-</button>
            <b>{contador}</b>
            <button className="eventos__contador--estilos" onClick={() => setContador(sumarProducto)}>+</button>
        </div>
    )
}