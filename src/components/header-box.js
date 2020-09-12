import React from 'react';

function HeaderBox(props) {

    return (
        <div className={props.colSize}>
            <div class="card border-light p-5">
                <div class="card-body">{props.title}</div>
            </div>
        </div>
    );
}

export default HeaderBox;