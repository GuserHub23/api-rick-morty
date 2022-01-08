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

        if(!nombre.trim()){
            return Swal.fire({
                title: 'Error!',
                text: 'Ingrese un personaje',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }

        setNombrePersonaje(nombre.trim().toLowerCase())
        reset(setNombrePersonaje(nombre))
    };

    const reload = () => {
        window.location.reload(true);
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-row form--app">
            <input 
                autoFocus
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
            <button
                className="btn btn-success mb-auto "
                onClick={reload}
            >
                Reload
            </button>
        </form>
    )
}

export default Formulario
