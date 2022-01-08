import Formulario from "./Formulario"

const Navbar = ({brand, setNombrePersonaje}) => {
    return (
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-center flex-column">
              <a className="navbar-brand text-uppercase mb-2" href="/">{brand}</a>
            <Formulario setNombrePersonaje={setNombrePersonaje}/>
        </nav>
    )
}

export default Navbar
