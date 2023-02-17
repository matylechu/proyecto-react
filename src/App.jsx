import NavBar from "./componentes/NavBar";
import PromoApp from "./componentes/PromoApp";
import ItemListContainer from "./componentes/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import Footer from "./componentes/Footer"
import Portada from "./componentes/Portada"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./componentes/Error404";

function App() {
  return (
    <BrowserRouter>
    <div>
     <NavBar />
     <Portada />
     <Routes>
        <Route path={"/"} element={ <ItemListContainer/>}/>
        <Route path={"/category/:id"} element={ <ItemListContainer/>}/>
        <Route path={"/item/:id"} element={ <ItemDetailContainer/>}/>
        <Route path={"*"} element={<Error404/>}/>
     </Routes>
     <PromoApp />
     <Footer />
  </div>
  </BrowserRouter>
  );
}

export default App;
