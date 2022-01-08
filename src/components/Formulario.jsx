import { useFormulario } from "../hooks/useFormulario"
import Swal from 'sweetalert2'

const Formulario = ({setNombrePersonaje}) => {

    const [inputs, handleChange, reset] = useFormulario({
        nombre: '',
    })

    const {nombre} = inputs;

    const handleSubmit = e => {
        e.preventDefault()
        console.log(nombre)

        if(!nombre){
            return Swal.fire({
                title: 'Error!',
                text: 'Ingrese un personaje valido',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        };

        setNombrePersonaje(nombre.trim().toLowerCase())
        reset(setNombrePersonaje(nombre))
    };

    const reloadPage = () => {
        window.location.reload(true);
    };

    return (
        <div className="d-flex flex-row form--app">
            <form onSubmit={handleSubmit} className="d-flex flex-row">
                <input 
                    type="text"
                    placeholder="enter character"
                    className="form-control mb-3"
                    value={nombre}
                    onChange={handleChange}
                    name="nombre"
                />

                <button
                    type="submit"
                    className="btn btn-danger mb-auto"
                >
                    Search
                </button>
            </form>
            <a href="/">
                <button
                    className="btn btn-success mb-auto"
                    onClick={reloadPage}
                >
                reload
                </button>
            </a>
        </div>
    )
}

export default Formulario
