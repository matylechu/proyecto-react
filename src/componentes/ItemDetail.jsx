import ItemCount from "./ItemCount"
const ItemDetail = ({item}) => {
    return(
      <div className="container">
        <div className="row my-5">
            <div className="col">
                <img src={item.img} alt={item.nombre} width="300px" />
            </div>
            <div className="col">
                <div>
                  <h1>{item.nombre}</h1>
                  <h5>{item.marca}</h5>
                  <p>{item.descripcion}</p>
                  <p><strong>${item.precio}</strong></p>
                </div>
                <ItemCount stock={item.stock}/>
            </div>
        </div>
      </div>
    )
}
export default ItemDetail