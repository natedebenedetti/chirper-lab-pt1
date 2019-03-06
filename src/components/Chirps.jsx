import React from 'react';

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
        let newChirp = this.state.chirp;

        chirpArray.unshift(newChirp);

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
                        <ul className="list-group p-4 my-4 border border-danger rounded">
                            {this.state.addedChirps.map((message, index) => {
                                return (
                                    <li key={index} className="list-group item text-danger font-weight-bold border border-dark p-2">{message}</li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </>

        );
    }
}

export default Chirps;