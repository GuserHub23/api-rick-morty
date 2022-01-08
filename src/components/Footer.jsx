const Footer = () => {
    return (
        <footer className="bg-dark app--footer">
            <h3 className="d-flex justify-content-center m-auto mt-2">Mis redes</h3>
            <div className="links--footer">
                <a className="footer--links" href="https://www.instagram.com" target="_blank">
                    <i className="fab fa-instagram"></i>
                    Instagram
                </a>
                <a className="footer--links" href="https://github.com/GuserHub23" target="_blank">
                    <i className="fab fa-github"></i>
                    GitHub
                </a>
                <a className="footer--links" href="https://www.linkedin.com/in/juan-pablo-g%C3%B3mez-837a3321a/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                    linked In
                </a>
            </div>
        </footer>
    )
}

export default Footer
