import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="col-lg-3 mt-4">
        <div
          className="card mt-3"
          style={{
            textAlign: "center"
          }}
        >
          <div style={{ backgroundColor: "grey" }}>
            <img
              className="card-img-top"
              alt="Profile_Avatar"
              src={this.props.cardData.avatar}
              style={{ width: "50%", margin: "auto", borderRadius: "50%" }}
            />
          </div>
          <div
            className="d-flex card-body "
            style={{
              height: "250px",
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <h5 className="card-title">{this.props.cardData.name}</h5>
            <p className="card-text">{this.props.cardData.email}</p>
            <button
              name="dummy"
              className="btn btn-primary"
              onClick={this.props.onClick}
            >
              Go somewhere
            </button>
          </div>
        </div>
      </div>
    );
  }
}
