import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "alexa"
        };
        this.storedTogglebtn = this.togglebtn.bind(this);
    }
    togglebtn(e) {
        this.setState({ type: e.target.value });
    }
    render() {
        return (
            <div className="jumbotron">
                <header className="text-center">
                    <h2>Smart Speaker</h2>
                    <p>Smart Speaker can talk instead of you</p>
                    <div className="radio_button">
                        <input
                            type="radio"
                            value="alexa"
                            name="s2"
                            id="alexa"
                            checked={this.state.type === "alexa"}
                            onChange={this.storedTogglebtn}
                        />
                        <label htmlFor="alexa" className="switch-alexa">Alexa</label>
                        <input
                            type="radio"
                            value="google"
                            name="s2"
                            id="google"
                            checked={this.state.type === "google"}
                            onChange={this.storedTogglebtn}
                        />
                        <label htmlFor="alexa" className="switch-alexa">Google</label>
                    </div>
                    <div>{this.state.type}</div>
                </header>
            </div>
        );
    }
}

