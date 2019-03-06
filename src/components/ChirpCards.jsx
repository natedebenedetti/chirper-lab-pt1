import React from 'react';

const ChirpCards = (props) => {
    return (
        <li className="list-group item text-danger font-weight-bold border border-danger p-2 m-2">{props.message}</li>
    );
}


export default ChirpCards;