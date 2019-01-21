import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label className="h3" htmlFor="search">
              {" "}
              Image Search{" "}
            </label>
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
    );
  }
}

export default SearchBar;

// class SearchBar extends Component {
//   onInputChange(event) {
//     console.log(event.target.value);
//   }

//   InputChange = (e) =>{
//     console.log(event.target.value);

//   }
//   render() {
//     return (
//       <div className="ui segment">
//         <form className="ui form">
//           <div className="field">
//             <label htmlFor="search"> Image Search</label>
//             <input name="search" type="text" onChange={this.onInputChange} />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// class SearchBar extends Component {
//   onInputChange(event) {
//     console.log(event.target.value);
//   }

//   render() {
//     return (
//       <div className="ui segment">
//         <form className="ui form">
//           <div className="field">
//             <label htmlFor="search"> Image Search</label>
//             <input
//               name="search"
//               type="text"
//               onChange={event => console.log(event.target.value)}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
