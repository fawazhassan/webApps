import React, { Component } from "react";
import { Link } from "react-router-dom";

class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Fawaz Hassan | Mini Web Apps
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/timer">
                  Timer <span className="sr-only" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/weather">
                  Weather
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cards">
                  Cards
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="http://fawazhassan.com">
                  Back to Portfolio Site
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default navbar;
