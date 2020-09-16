import React, { useState } from 'react';

function ProjectTile(props) {

    let [title, setTitle] = useState();
    let [description, setDescription] = useState();

    const loadProject = () => {
        console.log(title);
        console.log(description);
    };

    const onLoad = () => {
        setTitle(props.title);
        setDescription(props.description);
    };

    return (
        <div className={props.colSize + " h-100"} onLoad={onLoad}>
            <div className="card border-light mb-3 h-100 project-tile" onClick={loadProject}>
                <div className="card-header">{props.title}</div>
                <img src="https://via.placeholder.com/200" className="card-img-bottom h-100" alt="..." />
            </div>
        </div>
    );
}

export default ProjectTile;