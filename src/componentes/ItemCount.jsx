import { useState } from "react";

const ItemCount = ({stock}) => {
    const [items, setItems] = useState (1);
    const [itemStock, setItemStock] = useState (stock)

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

    const onAdd = () => {
        if (itemStock >= items){
            setItemStock(itemStock - items)
            setItems(1);
            console.log("Agregaste: " + items + " Productos al Carrito!");
        }
    }

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
                    <button className="btn btn-success" onClick={onAdd}>Agregar Al Carrito</button>
                </div>
            </div>
        </div>
        
    )
}

export default ItemCount;