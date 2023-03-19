import NavBar from "./componentes/NavBar";
import PromoApp from "./componentes/PromoApp";
import ItemListContainer from "./componentes/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import Footer from "./componentes/Footer"
import Portada from "./componentes/Portada"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./componentes/Error404";
import CartContextProvider from "./componentes/context/CartContext";
import Cart from "./componentes/Cart";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
      <div>
      <NavBar />
      <Portada />
      <Routes>
          <Route path={"/"} element={ <ItemListContainer/>}/>
          <Route path={"/category/:id"} element={ <ItemListContainer/>}/>
          <Route path={"/item/:id"} element={ <ItemDetailContainer/>}/> 
          <Route path={"/cart"} element={ <Cart/>}/> 
          <Route path={"*"} element={<Error404/>}/>
      </Routes>
      <PromoApp />
      <Footer />
    </div>
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
