import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-4">
          <h1 className="display-4">React Mini WebApps</h1>
          <p className="my-4">
            This site contains a small selection of the React Apps I have made
            while learning the technology.
            <br />
            <br /> These range from a simple timer, to a Weather App which
            connects to the <strong>Open Weather Map API</strong> using{" "}
            <strong>Axios</strong> as the HTTP client;
            <br />
            <br /> and lastly an Image Search app which uses the{" "}
            <strong>Unsplash API</strong> and <strong>Axios</strong> for the
            data and data retrieval, respectively.
            <br />
            <br />
            <button className="m-1 btn btn-primary">
              <Link to="/timer" style={{ color: "white" }}>
                Timer
              </Link>
            </button>
            <button className="m-1 btn btn-primary">
              <Link to="/weather" style={{ color: "white" }}>
                Weather Application
              </Link>
            </button>
            <button className="m-1 btn btn-primary">
              <Link to="/image-search" style={{ color: "white" }}>
                Image Search
              </Link>
            </button>
            <br />
            <br />
            Additionally There is also a simple card set filled using data from
            FakerJs.
            <br />
            <br />
            <button className="m-3 btn btn-primary">
              <Link to="/cards" style={{ color: "white" }}>
                Cards
              </Link>
            </button>
          </p>
        </div>
      </div>
    );
  }
}
