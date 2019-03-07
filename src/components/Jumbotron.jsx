import React from 'react';


const Jumbotron = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid rounded-pill my-2 bg-danger" >
                    <h1 className="display-4  text-dark ml-4 font-weight-bold font-italic">Chirper</h1>
                    <p className="lead text-dark ml-3 font-weight-bold">A simple app that put's your 
                    <span className="text-warning font-italic">CHIRPS</span> 
                    in the <span className="text-warning font-italic">CHAT</span></p>
                </div>
            </div>
        </div>
    );
}


export default Jumbotron;