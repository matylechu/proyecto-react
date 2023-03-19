import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import ItemCount from "./ItemCount"
const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext)  
    const onAdd = (cantidad) => {
      addItem(item, cantidad)
    }

    return(
      <div className="container">
        <div className="row my-5">
            <div className="col">
                <img src={item.img} alt={item.nombre} width="300px" />
            </div>
            <div className="col">
                <div>
                  <h1>{item.nombre}</h1>
                  <img src={item.marca} alt="logo marca" width="42px" />
                  <p>{item.descripcion}</p>
                  <p><strong>${item.precio}</strong></p>
                </div>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
      </div>
    )
}
export default ItemDetail