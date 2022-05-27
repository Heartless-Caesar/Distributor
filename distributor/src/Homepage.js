import 'bootstrap/dist/css/bootstrap.css'

const Body = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid">
                <div>
                    <a className="navbar-brand">Distributor</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#Home">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#Catalog">
                                    Catalog
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#About">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Body
