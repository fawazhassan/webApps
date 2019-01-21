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
            <button className="mx-3 btn btn-primary">
              <Link to="/timer">
                <a style={{ color: "white" }}>Timer</a>
              </Link>
            </button>
            <button className="mx-3 btn btn-primary">
              <Link to="/weather">
                <a style={{ color: "white" }}>Weather Application</a>
              </Link>
            </button>
            <button className="mx-3 btn btn-primary">
              <Link to="/image-search">
                <a style={{ color: "white" }}>Image Search</a>
              </Link>
            </button>
            <br />
            <br />
            Additionally There is also a simple card set filled using data from
            FakerJs.
            <br />
            <br />
            <button className="mx-3 btn btn-primary">
              <Link to="/cards">
                <a style={{ color: "white" }}>Cards</a>
              </Link>
            </button>
          </p>
        </div>
      </div>
    );
  }
}
