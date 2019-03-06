import React from 'react';


const Jumbotron = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid rounded-pill my-2 bg-danger" >
                    <h1 className="display-4  text-dark ml-4 font-weight-bold font-italic">Chirper</h1>
                    <p className="lead text-dark ml-3 font-weight-bold font-italic">A simple app that put's your CHIPPS in the CHAT</p>
                </div>
            </div>
        </div>
    );
}


export default Jumbotron;