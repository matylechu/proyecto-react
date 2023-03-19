import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stock, onAdd}) => {
    const [items, setItems] = useState (1);
    const [itemStock, setItemStock] = useState (stock)
    const [itemAdded, setItemAdded] = useState (false)
    

    const sumarStock = () => {
        if (items < itemStock ){
            setItems(items + 1);
        }
    }
    const restarStock = () => {
        if (items > 1){
            setItems(items - 1);
        }
    }

    const addToCart = () => {
        if (itemStock >= items){
            setItemStock(itemStock - items)
            setItems(1);
            console.log("Agregaste: " + items + " Productos al Carrito!");
        }
        setItemAdded(true)
        onAdd(items)
    }
    useEffect(() => {
        setItemStock(stock)
    },[stock])

    return(
        <div className="container">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group">
                        <button className="btn btn-success" onClick={restarStock}>-</button>
                        <button className="btn btn-success">{items}</button>
                        <button className="btn btn-success" onClick={sumarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-success">Terminar mi Compra!</Link> :
                    <button className="btn btn-success" onClick={addToCart}>Agregar Al Carrito</button>}
                </div>
            </div>
        </div>
        
    )
}

export default ItemCount;