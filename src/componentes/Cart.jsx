import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./context/CartContext"
import trash from "./img/trash3.svg"

const Cart = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [orderId, setOrderId] = useState("")
    const {cart, clear, removeItem, cartTotal, cartSuma} = useContext(CartContext)

    const generarOrden = () => {
        const buyer = {name:nombre, email:email, phone:telefono}
        const fecha = new Date()
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        const order = {buyer:buyer, items:{cart}, date:date, total:cartSuma()}

        const db= getFirestore()
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order).then(data =>{
            setOrderId(data.id)
        })
    }

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-warning text-center" role="alert"> No se encontraron productos!
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    return(
       <div className="container my-5">
        <div className="row">
        <h1 className="text-center">Mi Carrito</h1>
            <div className="col-md-3">
            <form>
                <div class="mb-3">
                    <label htmlfor="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)
                    }} />
                </div>

                <div class="mb-3">
                    <label htmlfor="email" class="form-label">Email</label>
                    <input type="text" class="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}}
                    />
                </div>

                <div class="mb-3">
                    <label htmlfor="telefono" class="form-label">Telefono</label>
                    <input type="text" class="form-control" id="telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                </div>
                <button type="button" class="btn btn-primary" onClick={generarOrden}>Finalizar Compra</button>
            </form>

            </div>


            <div className="col-md-9">
               
                <table className="table my-4">
                    <tr>
                        <td></td>
                        <td><b>Nombre</b></td>
                        <td><b>Cantidad</b></td>
                        <td><b>Precio</b></td>
                        <td><button type="button" className="btn btn-outline-dark" onClick={() => {clear()}}>Vaciar Carrito</button></td>
                    </tr>
                    {
                        cart.map(item =>(
                            <tr key={item.index}>
                               <td><img src={item.img} alt={"item.nombre"} width={100}/></td>
                               <td>{item.nombre}</td>     
                               <td>{item.quantity} x  ${item.precio}</td>     
                               <td>${item.quantity * item.precio}</td>     
                               <td><Link onClick={() => {removeItem(item.index)}}><img src={trash} alt={"eliminar producto"} width={22}/></Link></td>     
                            </tr>
                            ))
                    }
                    
                    <tr>
                        <td className="text-end" colSpan={3}>Total a Pagar: </td>
                        <td><b>${cartSuma()}</b> </td>
                    </tr>
                </table>
            </div>
        </div>
            <div className="row my-3">
                <div className="col-md-12">
                    {orderId ? <div className="alert alert-warning text-center" role="alert"> <h3>Gracias por tu Compra!</h3> 
                    <p>Se genero una orden de compra con el ID: <b>{orderId}</b></p>
                    </div> : ""}
                </div>
            </div>
       </div>
    )
}

export default Cart