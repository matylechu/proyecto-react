import NavBar from "./componentes/NavBar";
import PromoApp from "./componentes/PromoApp";
import ItemListContainer from "./componentes/ItemListContainer"
import Footer from "./componentes/Footer"
import Portada from "./componentes/Portada"
function App() {
  return (
  <div>
     <NavBar />
     <Portada />
     <ItemListContainer greeting={"Todavia no se encuentran los productos!!"}/>
     <PromoApp />
     <Footer />
  </div>
  );
}

export default App;
