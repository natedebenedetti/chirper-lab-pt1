import React from 'react';
import Jumbo from './Jumbotron';
import Chirps from './Chirps';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Jumbo />
                </div>
            </div>
            <Chirps />
            
            
        </div>
    );
}


export default App;