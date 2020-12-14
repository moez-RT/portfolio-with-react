import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Navbar = props => {
    const [expanded,setExpanded] = useState(false);
    const collapse = () => {
        document.getElementById('ftco-nav').classList.toggle('show');
        setExpanded(!expanded);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
             id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="/"><span>P</span>ortfolio</a>
                <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" onClick={collapse} aria-expanded={expanded}>
                    <span className="oi oi-menu"/> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav nav ml-auto">
                        <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
                        <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
                        <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
                        <li className="nav-item"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
                        <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

Navbar.propTypes = {

};

export default Navbar;
