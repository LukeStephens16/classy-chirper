import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msgOne: '',
            msgTwo: '',
            chirps: [
                { msgOne: 'My name is', msgTwo: 'what' },
                { msgOne: 'My name is', msgTwo: 'who' },
                { msgOne: 'My name is', msgTwo: 'wika wika Slim Shady' },
            ],
        };

    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            msgOne: '', msgTwo: '',
            chirps: [...this.state.chirps, { msgOne: this.state.msgOne, msgtwo: this.state.msgTwo }]
        });
    }
    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-7">
                        <form className="form-group">
                            <label>Be Quirky:</label>
                            <input
                                className="form-control"
                                value={this.state.msgOne}
                                onChange={(e) => {
                                    this.setState({ msgOne: e.target.value });
                                }}
                            />
                        </form>
                        <form className="form-group">
                            <label>Be Wild:</label>
                            <input
                                className="form-control"
                                value={this.state.msgTwo}
                                onChange={(e) => {
                                    this.setState({ msgTwo: e.target.value });
                                }}
                            />
                        </form>
                        <button onClick={e => this.handleSubmit(e)} className="btn btn-primary mt-3">
                            Add Chirp
                        </button>
                    </div>
                </section>
                <section className="row justify-content-center mt-3">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {this.state.chirps.map(chirp => (
                               
                                <li className="list-group-item" key={`chirp-msgOne${chirp.id}`}>
                                    {chirp.msgOne} {chirp.msgTwo}
                                </li>
                            
                            ))}
                        </ul>
                        </div>
                </section>
            </main>

        );
    }
}

export default App;