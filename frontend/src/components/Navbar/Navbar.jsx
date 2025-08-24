import "../Navbar/Navbar.css"
function Navbar({ scrollToAbout, scrollToSkills, scrollToProjects, scrollToEmail }) {
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-dark navbar-bg-clr">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={scrollToAbout}>About</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={scrollToSkills}>Skills</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={scrollToProjects}>Projects</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={scrollToEmail}>Contact</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
