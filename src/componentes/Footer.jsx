import insta from "./img/instagram.svg"
import code from "./img/code.svg"
import github from "./img/github.svg"
const Footer = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <a href={"/"} className="ms-3 text-decoration-none"> <img src={insta} alt="insta" width={"24"}/> </a>
                    <img src={code} alt="code" width={"24"} className="ms-3"/> Matias Lechuga
                    <a href={"/"} className="ms-3 text-decoration-none"> <img src={github} alt="github" width={"24"} /></a>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-8">
                    <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href={"/"}>Politica de Privacidad</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href={"/"}>Trabaja con nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href={"/"}>Proteccion de datos personales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href={"/"}>Contacto</a>
                    </li>
                    </ul>
                </div>
                <div className="col-md-4 text-end text-secondary">
                    <p>El Templo del Futbol ©| Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;