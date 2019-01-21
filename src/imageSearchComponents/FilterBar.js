import React, { Component } from "react";

class FilterBar extends Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-lg-6">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="form-group">
              <label htmlFor="search"> Filter</label>
              <input
                className="form-control"
                name="search"
                type="text"
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value })}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FilterBar;
