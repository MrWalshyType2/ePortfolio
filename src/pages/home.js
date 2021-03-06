import React from 'react';

import ProjectTile from '../components/project-tile';
import HeaderBox from '../components/header-box';

function HomePage(props) {

    return (
        <div className="container mt-5 d-flex flex-column h-100">
            <div className="row justify-content-between">
                <ProjectTile title="IMS Project" colSize="col-md-4 col-lg-3" />
                <button className="col-md-4 col-lg-6 mb-3">About Me</button>
                {/* <HeaderBox title="About Me" colSize="col-md-4 col-lg-6" /> */}
                <ProjectTile title="IMS Project" colSize="col-md-4 col-lg-3" />
            </div>
            <div className="row justify-content-between">
                <ProjectTile title="IMS Project" colSize="col-12 col-md-5 col-lg-3" />
                <ProjectTile title="IMS Project" colSize="col-12 col-md-5 col-lg-3" />
                <ProjectTile title="IMS Project" colSize="col-12 col-md-5 col-lg-3" />
                <ProjectTile title="IMS Project" colSize="col-12 col-md-5 col-lg-3" />
            </div>

        </div>
    );
}

export default HomePage;