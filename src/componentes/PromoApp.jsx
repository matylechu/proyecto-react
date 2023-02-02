import logoPromo from "./img/logo-promo.png"
const PromoApp = () => {
    return(
        <div className="container-fluid bg-success py-4">
            <div className="container ">
                
            <div className="row">
                <div className="col-md-6">
                   <div className="row">
                    <div className="col-md-3">
                        <img src={logoPromo} alt="promo" width={123} />
                    </div>
                    <div className="col-md-9 d-flex align-items-center">
                        <div>
                        <h2> UNITE AL CLUB </h2>
                        <p><span>Y CONSEGUÍ UN 15% DE DESCUENTO</span></p>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <button className="btn bg-secondary-subtle"> Registrate Ahora</button>
                </div>
            </div>
        </div>

            </div>
    )
}
export default PromoApp;