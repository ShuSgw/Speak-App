import React, { Component } from 'react';
import SpeakerButton from "./speaker_btn";
export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
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
                </div>
            </div>
        );
    }
}
