import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
/* import arrayProductos from "./json/productos.json" */
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    const {id} = useParams()

   /*  useEffect (() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
            });
        promesa.then((respuesta) => {
            setItems(respuesta);
        });
    }, [id]) */


    /* useEffect (() => {
        const db = getFirestore()
        const itemsCollection = collection(db,"items")
        arrayProductos.forEach(item => {
            addDoc(itemsCollection, item)
        })
        console.log("Se agregaron los productos")
    }, [])  */

     useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "items")
        const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection
        getDocs(filter).then(elements => {
            setItems(elements.docs.map(element => ({id:element.id, ...element.data()})))
            setLoading(false);

        })
    },[id]) 

    return(
        <div className="container">
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    )
}
export default ItemListContainer;