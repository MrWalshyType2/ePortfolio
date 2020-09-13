import React from 'react';

import ProjectTile from '../components/project-tile';
import { Link } from 'react-router-dom';

function HomePage(props) {

    return (
        <div className="container mt-5 d-flex flex-column h-100">
            <div className="row justify-content-between">
                <ProjectTile title="IMS Project" colSize="col-12 col-md-6 col-lg-3" />
                <div className="col-md-4 col-lg-6 mb-3 d-none d-lg-block">
                    <Link to="/about"><button id="HomeAboutBtn" className="btn btn-light btn-block h-100"><h1 className="display-2">About Me</h1></button></Link>
                </div>
                {/* <HeaderBox title="About Me" colSize="col-md-4 col-lg-6" /> */}
                <ProjectTile title="IMS Project" colSize="col-12 col-md-6 col-lg-3" />
            </div>
            <div className="row justify-content-between">
                <ProjectTile title="IMS Project" colSize="col-12 col-md-6 col-lg-3" />
                <ProjectTile title="IMS Project" colSize="col-12 col-md-6 col-lg-3" />
                <ProjectTile title="IMS Project" colSize="col-12 col-md-6 col-lg-3" />
                <ProjectTile title="IMS Project" colSize="col-12 col-md-6 col-lg-3" />
            </div>

        </div>
    );
}

export default HomePage;