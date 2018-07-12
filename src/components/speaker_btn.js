import React, { Component } from 'react';
export default class SpeakerButton extends Component {
    render() {
        return (
            <div className="col-sm-6 mb-2 mt-2">
                <button className="card">
                    <div className="card-body">
                        <h4 className="card-title text-left">
                            <i className="fas fa-play"></i>
                            {this.props.type}音楽かけて
                      </h4>
                        <p className="card-text text-left">
                            ランダムで音楽をかけてくれるコマンドです。
                      </p>
                    </div>
                </button>
            </div>
        );
    }
}
