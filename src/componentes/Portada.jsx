import portada from "./img/portada.webp"
const Portada = () => {
    return(
        <div className="container-fluid my-3">
            <div className="row">
                <div className="col-md-12">
                    <img src={portada} alt="portada" className={"img-fluid"} />
                </div>
            </div>
        </div>

    )
}
export default Portada