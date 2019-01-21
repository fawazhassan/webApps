import React, { Component } from "react";
const axios = require("axios");

class WeatherDisplay extends Component {
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.weatherData !== prevProps.weatherData) {
      this.temp = (this.props.weatherData.main.temp - 273.15).toFixed(1);
      this.temp_min = (this.props.weatherData.main.temp_min - 273.15).toFixed(
        1
      );
      this.temp_max = (this.props.weatherData.main.temp_max - 273.15).toFixed(
        1
      );
      this.pressure = this.props.weatherData.main.pressure;
      this.humidity = this.props.weatherData.main.humidity;
      this.weatherIcon = this.props.weatherData.weather[0].icon;
    }
  }

  render() {
    this.temp = (this.props.weatherData.main.temp - 273.15).toFixed(1);
    this.temp_min = (this.props.weatherData.main.temp_min - 273.15).toFixed(1);
    this.temp_max = (this.props.weatherData.main.temp_max - 273.15).toFixed(1);
    this.pressure = this.props.weatherData.main.pressure;
    this.humidity = this.props.weatherData.main.humidity;

    this.displayWeather = (
      <div
        className="jumbotron text-center mt-5"
        style={{
          backgroundColor: "#3a82b5",
          color: "white"
        }}
      >
        <h1>{this.props.citySearch}</h1>
        <div id="icon">
          <img
            id="wicon"
            src={`https://openweathermap.org/img/w/${
              this.props.weatherData.weather[0].icon
            }.png`}
            alt="Weather icon"
            style={{ width: "10%" }}
          />
        </div>
        <h4>{this.props.weatherData.weather[0].main}</h4>

        <div className=" row">
          <div className="col-lg-4 col-sm-12 mt-4 " id="weather-low-box">
            <div className="weather-low">
              <br />
              <h3>Low</h3>
            </div>
            <div className="weather-low">
              <h5>{this.temp_min}&#8451;</h5>
            </div>
          </div>
          <div className="col-lg-4 ">
            <h2>{this.temp}&#8451;</h2>

            <br />
            <h3>Pressure:</h3>
            <h4>{this.pressure}mbar</h4>
            <br />
            <h3>Humidity:</h3>
            <h4>{this.humidity}%</h4>
          </div>
          <div className="col-lg-4 mt-4" id="weather-high-box">
            <div className="weather-high">
              <br />

              <h3>High</h3>
            </div>
            <div className="weather-high">
              <h5>{this.temp_max}&#8451;</h5>
            </div>
          </div>
        </div>
      </div>
    );
    return <div>{this.displayWeather}</div>;
  }
}

export default class WeatherHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      citySearch: null,
      name: "",
      invalidRequest: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          this.state.name
        }&appid=9ddfd328cdb78e6c26fd1e930c19dd6d`
      )
      .then(res => {
        if (res.data.cod === 200) {
          const response = res.data;
          this.setState({
            invalidRequest: false,
            weatherData: response,
            citySearch: this.state.name
          });
          console.log(this.state.weatherData);
        }
      })
      .catch(error => {
        if (error.response.data.message === "Nothing to geocode") {
          console.log(error.response.data);
          this.displayWeather = (
            <h3 className="text-center mt-4">Please type in a Town or City</h3>
          );
          this.setState({ invalidRequest: true });
        } else if (error.response.data.message === "city not found") {
          console.log(error.response.data);
          this.displayWeather = (
            <h3 className="text-center mt-4">
              Please type in a valid Town or City
            </h3>
          );
          this.setState({ invalidRequest: true });
        }
      });
  }

  render() {
    if (this.state.weatherData != null && !this.state.invalidRequest) {
      this.temp = (this.state.weatherData.main.temp - 273.15).toFixed(1);
      this.temp_min = (this.state.weatherData.main.temp_min - 273.15).toFixed(
        1
      );
      this.temp_max = (this.state.weatherData.main.temp_max - 273.15).toFixed(
        1
      );
      this.pressure = this.state.weatherData.main.pressure;
      this.humidity = this.state.weatherData.main.humidity;

      this.displayWeather = (
        <div>
          <WeatherDisplay
            weatherData={this.state.weatherData}
            weatherDetails={this.state.weatherDetails}
            citySearch={this.state.citySearch}
          />
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <form onSubmit={this.handleSubmit} className="text-center">
              <div className="form-group">
                <label htmlFor="search">Enter a Town or City: </label>
                <input
                  name="search"
                  className="form-control"
                  id="search"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
            {this.displayWeather}
          </div>
        </div>
      </div>
    );
  }
}
