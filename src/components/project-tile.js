import React from 'react';

function ProjectTile(props) {

    return (
        <div className={props.colSize + " h-100"}>
            <div class="card border-light mb-3 h-100">
                <div class="card-header">{props.title}</div>
                <img src="https://via.placeholder.com/200" class="card-img-bottom h-100" alt="..." />
            </div>
        </div>
    );
}

export default ProjectTile;