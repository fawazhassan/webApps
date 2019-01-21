import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./common/navbar";
import TimerDemo from "./TimerApp/TimerDemo";
import Home from "./Home/Home";
import WeatherHome from "./Weather/WeatherHome";
import Cards from "./Cards/Cards";
import imageSearch from "./imageSearchComponents/ImageSearchApp";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/weather" component={WeatherHome} />
          <Route exact path="/image-search" component={imageSearch} />
          <Route exact path="/cards/:pageNumber?" component={Cards} />

          <Route exact path="/timer" component={TimerDemo} />
        </div>
      </Router>
    );
  }
}

export default App;
