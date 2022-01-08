const Personaje = ({personaje}) => {

    const {name,image,status,species,location} = personaje

    return (
        <div className="col-md-4 mb-2">
            <div className="card border border-dark">
                <img 
                    className="card-img-top"
                    src={image} 
                    alt={`image-${name}`}
                />
                <div className="card-body bg-dark">  
                    <div className="section">
                        <h3>{name}</h3>
                        <span>{status} - {species}</span>
                    </div>
                    <div className="section mt-1">
                        <h5>Last location</h5>
                        <span>{location.name}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personaje
