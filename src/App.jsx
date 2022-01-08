import { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PintarDatos from './components/PintarDatos';

const App = () => {

    const [nombrePersonaje, setNombrePersonaje] = useState('')

    return (
        <div className="d-flex justify-content-between flex-column container--app">
            <Navbar brand="Rick and Morty App" setNombrePersonaje={setNombrePersonaje} />
            <div className='app--api mt-2'>
                <div className="container mb-2">
                    <PintarDatos nombrePersonaje={nombrePersonaje} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App
