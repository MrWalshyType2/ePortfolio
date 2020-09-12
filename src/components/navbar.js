import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import ProjectPage from '../pages/projects';

function Navbar(props) {

    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#!">Morgan Walsh</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link">Projects</Link>
                        </li>
                        {/* <li className="nav-item">
                        <a className="nav-link disabled" href="#!" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                    </ul>
                </div>
            </nav>

            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/projects" component={ProjectPage} />
        </BrowserRouter>
    );
}

export default Navbar;