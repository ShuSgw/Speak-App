import React, { Component } from 'react';
import { Alexa } from "../const/alexa";
import { Google } from "../const/google";
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: "",
            type: "alexa"
        };
        this.storedTogglebtn = this.togglebtn.bind(this);
        this.storedChangeText = this.changeText.bind(this);
        this.storedSubmit = this.submit.bind(this);
    }
    togglebtn(e) {
        this.setState({ type: e.target.value });
    }
    changeText(e) {
        this.setState({ textValue: e.target.value });
    }
    submit() {
        let ssu = new SpeechSynthesisUtterance();
        let typeFromConst = "";
        switch (this.state.type) {
            case "alexa":
                typeFromConst = Alexa.type;
                break;
            case "google":
                typeFromConst = Google.type;
                break;
            default:
                break;
        }
        ssu.text = typeFromConst + " " + this.state.textValue;
        var voices = window.speechSynthesis.getVoices();
        ssu.voice = voices[0];
        speechSynthesis.speak(ssu);
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
                    <div id="form1">
                        <input type="text" id="sbox" defaultValue={this.state.textValue} onChange={this.storedChangeText} placeholder="Type keywords" />
                        <button id="sbtn" value="" onClick={this.storedSubmit}>
                            <i className="fas fa-microphone fa-2x"></i>
                        </button>
                    </div>
                </header>
            </div>
        );
    }
}

