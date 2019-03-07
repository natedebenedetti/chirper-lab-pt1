import React from 'react';

const ChirpBox = (props) => {
    return (
            <li className="list-group item text-danger border border-danger p-2 m-2">
            <span className="my-2">{props.newChirp.timeStamp}</span> 
            <span className="my-2 font-weight-bold text-warning">{props.newChirp.name} chirped:</span> 
            <span className="text-white">{props.newChirp.text}</span></li>
    );
}


export default ChirpBox;