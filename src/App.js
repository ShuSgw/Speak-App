import React, { Component } from 'react';
import Header from "./components/header";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-sm-2 col-md-2 py-3">
                <h4 className="text-white">
                  <i className="fas fa-microphone"></i>
                  SSCS
                </h4>
              </div>
              <div className="col-sm-10 col-md-10 py-3">
                <p className="text-white">スマートスピーカーのコマンド発音代行サービス</p>
              </div>
            </div>
          </div>
        </div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
