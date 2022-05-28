const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <a className="navbar-brand" href="#Home">
                                Distributor
                            </a>

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

export default Navbar
