import React from 'react';
import ChirpBox from './ChirpBox';

class Chirps extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chirp: "",
            addedChirps: []
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleInput(e) {
        this.setState({ chirp: e.target.value });
    }

    handleClick(e) {
        e.preventDefault();

        let chirpArray = this.state.addedChirps;
        let newChirp = {
            text: this.state.chirp,
            name: "Whoever I am",
            timeStamp: new Date().toString()
        };
        
        chirpArray.push(newChirp);

        this.setState({
            chirp: "",
            addedChirps: chirpArray
        });

    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-12">
                        <form className="form-group my-2 border border-danger rounded-pill p-4 text-danger">
                            <label>Chirp it loud and Chirp it proud:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="type here ..."
                                value={this.state.chirp}
                                onChange={this.handleInput} />
                            <button
                                className="btn btn-outline-danger"
                                type="button"
                                id="button-addon2"
                                onClick={this.handleClick}
                            >Chirp is cheap</button>
                        </form>
                    </div >
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="my-4 text-warning">CHIRPS:</h4>
                        <ul className="list-group p-4 my-4 border border-danger rounded">
                        <li className="list-group item text-danger border border-danger p-2 m-2">
                        <span className="my-2">{new Date().toString()}</span> 
                        <span className="my-2 font-weight-bold text-info">Some random person chirped:</span> 
                        <span className="text-white">Yo!</span></li>

                        <li className="list-group item text-danger border border-danger p-2 m-2">
                        <span className="my-2">{new Date().toString()}</span> 
                        <span className="my-2 font-weight-bold text-success">Someone else chirped:</span> 
                        <span className="text-white">Hey!!!</span></li>

                        <li className="list-group item text-danger border border-danger p-2 m-2">
                        <span className="my-2">{new Date().toString()}</span> 
                        <span className="my-2 font-weight-bold text-primary">That other person chirped:</span> 
                        <span className="text-white">Whassup!!!!!</span></li>

                            {this.state.addedChirps.map((newChirp, index) => {
                                return <ChirpBox newChirp={newChirp} key={index} />
                            })}
                        </ul>
                    </div>
                </div>
            </>

        );
    }
}

export default Chirps;