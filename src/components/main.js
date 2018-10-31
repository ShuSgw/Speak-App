import React, { Component } from 'react';
import SpeakerButton from "./speaker_btn";
import { Alexa } from "../const/alexa";
import { Google } from "../const/google";
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "alexa"
        };
        this.storedMainToggleBtn = this.storedMainToggleBtn.bind(this);
    }
    storedMainToggleBtn(e) {
        this.setState({ type: e.target.value })
    }
    render() {
        // console.log(Alexa.commands[0].title)
        return (
            <div>
                <div className="container">
                    <div className="container">
                        <div className="tabs">
                            <input
                                type="radio"
                                value="alexa"
                                name="tabItem"
                                id="mainAlexa"
                                checked={this.state.type === "alexa"}
                                onChange={this.storedMainToggleBtn}
                            />
                            <label className="tabItem" htmlFor="mainAlexa"><i className="fab fa-amazon"></i>Alexa</label>
                            <input
                                type="radio"
                                value="google"
                                name="tabItem"
                                id="mainGoogle"
                                checked={this.state.type === "google"}
                                onChange={this.storedMainToggleBtn}
                            />
                            <label className="tabItem" htmlFor="mainGoogle"><i className="fab fa-google"></i>Google</label>

                            {/* <div className="row">
                                <div className="col-sm-6 mb-2 mt-2">
                                    <h2><i className="fab fa-amazon"></i> Alexa</h2>
                                    <div className="row">
                                        <SpeakerButton type="Alexa" />
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-2 mt-2">
                                    <h2><i className="fab fa-google"></i> Google Home</h2>
                                    <div className="row">
                                        <SpeakerButton type="Google" />
                                    </div>
                                </div>
                            </div> */}

                            <div className="tabContent" id="alexa_content">
                                <div className="row">
                                    {Alexa.commands.map((command, i) => {
                                        return (
                                            <div>
                                                <SpeakerButton
                                                    key={command.title}
                                                    title={command.title}
                                                    description={command.description}
                                                    pronoun={command.pronoun}
                                                    type={Alexa.type}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="tabContent" id="alexa_content">
                                <div className="row">
                                    {Alexa.commands.map((command, i) => {
                                        return (
                                            <div>
                                                <SpeakerButton
                                                    key={command.title}
                                                    title={command.title}
                                                    description={command.description}
                                                    pronoun={command.pronoun}
                                                    type={Google.type}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
