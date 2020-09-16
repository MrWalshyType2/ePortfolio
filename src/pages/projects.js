import React from 'react';
import ProjectTile from '../components/project-tile';

function ProjectPage(props) {

    return (
        <div className="container mt-5 d-flex flex-column h-100">
            <h1>Projects</h1>
            <div className="row justify-content-between mt-5">
                <ProjectTile title="IMS Project" colSize="col-12 col-md-6 col-lg-3" />
                <ProjectTile title="PEP Project" colSize="col-12 col-md-6 col-lg-3" />
                <ProjectTile title="ePortfolio" colSize="col-12 col-md-6 col-lg-3" />
                <ProjectTile title="IMS Project" colSize="col-12 col-md-6 col-lg-3" />
            </div>
            <div className="row justify-content-between mt-5">
                <ProjectTile title="IMS Project" colSize="col-12 col-md-6 col-lg-3" />
                <ProjectTile title="IMS Project" colSize="col-12 col-md-6 col-lg-3" />
                <ProjectTile title="IMS Project" colSize="col-12 col-md-6 col-lg-3" />
                <ProjectTile title="IMS Project" colSize="col-12 col-md-6 col-lg-3" />
            </div>
        </div>
    );
}

export default ProjectPage;