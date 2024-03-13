import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar bg-color sticky-top navbar-expand-lg bg-body-tertiary text-center d-flex">
                <div className="container-fluid">                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collaps navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto text-center">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/skills">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/experience">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/contact">Contact</Link>
                            </li>                          
                            <li className="nav-item">
                                <a href="https://drive.google.com/file/d/1LdSLpDaaKlNcHiMPWBDpQkyLYE2_X90r/view?usp=drive_link" className='nav-link'>Download CV</a>
                            </li>                          
                        </ul>
                      
                    </div>
                </div>
            </nav>

        </>
    )
}
