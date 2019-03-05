import React from 'react';

class Chirps extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chirp: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleInput(e) {
        this.setState({ chirp: e.target.value });
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ chirp: " " });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md">
                    <div className="input-group my-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="to be chirped..."
                            value={this.state.chirp}
                            onChange={this.handleInput} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-danger" 
                                type="button" 
                                id="button-addon2"
                                onClick={this.handleClick}
                                >Chirp is cheap</button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Chirps;