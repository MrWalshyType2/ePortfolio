import { configure } from '@testing-library/react';
import React from 'react';
import ProjectTile from '../components/project-tile';

function ProjectPage(props) {
    const colSize = "col-12 col-md-6 col-lg-3";
    const data = [
        {
            title: "IMS Project", description: "testing"
        },
        {
            title: "PEP Project", description: "testing"
    }];

    return (
        <div className="container mt-5 d-flex flex-column h-100">
            <h1>Projects</h1>
            <div className="row justify-content-between mt-5">
                {
                    data.map((data) => {
                        return <ProjectTile title={data.title} description={data.description} colSize={colSize} />
                    })
                }
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