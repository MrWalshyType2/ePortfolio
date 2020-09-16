import React from 'react';

function ProjectCard(props) {

    return (
        <div className="container h-50 mt-5">
            <div className="row justify-content-around">
                <div className="jumbotron col-12">
                    {/* <h1 class="display-4">Hello, world!</h1> */}
                    <img src="https://via.placeholder.com/75x25" className="img-fluid w-100" alt="Responsive image" />
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg" href="#!" role="button">Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;