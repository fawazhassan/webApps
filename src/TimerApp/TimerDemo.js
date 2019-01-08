import React from "react";
import click1 from "./click1.wav";
class StartStop extends React.Component {
  render() {
    return (
      <div className="buttons">
        <button
          className="btn btn-primary mx-3"
          name="startStop"
          onClick={this.props.onClick}
        >
          {this.props.buttonText}
        </button>
        <button
          className="btn btn-danger mx-3"
          name="Reset"
          onClick={this.props.onClick}
        >
          Reset
        </button>
      </div>
    );
  }
}

class TimerInput extends React.Component {
  render() {
    return (
      <div className="inputFields">
        <label htmlFor="minutes">
          minutes:
          <br />
          <input name="minutes" type="number" onChange={this.props.onChange} />
        </label>
        <br />
        <label htmlFor="seconds">
          seconds:
          <br />
          <input name="seconds" type="number" onChange={this.props.onChange} />
        </label>
      </div>
    );
  }
}

class TimerCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ringColor: "blue"
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.buttonText !== prevProps.buttonText) {
      if (this.props.buttonText === "Stop") {
        this.setState({ ringColor: "green" });
      } else {
        this.setState({ ringColor: "blue" });
      }
    }
  }

  render() {
    return (
      <div>
        <div className="circle">
          <div
            className="timerCircle"
            style={{ borderColor: this.state.ringColor }}
          >
            <div className="timerCounter">
              {this.props.minutes}: {this.props.seconds}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class TimerDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: null,
      seconds: null,
      displayStartOrStop: "Start"
    };

    this.click1 = new Audio(click1);

    this.onChange.bind(this);
    this.onClick.bind(this);
    this.tick.bind(this);
    this.startCountDown.bind(this);
  }

  startCountDown = () => {
    this.timeRemaining =
      Number(this.state.minutes * 60) + Number(this.state.seconds);
    this.intervalStart = setInterval(this.tick, 1000);
  };

  onChange = e => {
    if (e.target.name === "minutes") {
      this.setState({ minutes: e.target.value });
    }
    if (e.target.name === "seconds") {
      this.setState({ seconds: e.target.value });
    }
  };

  onClick = e => {
    if (e.target.name === "startStop") {
      if (this.state.displayStartOrStop === "Start") {
        this.setState({ displayStartOrStop: "Stop" });

        this.startCountDown();
      } else {
        this.setState({ displayStartOrStop: "Start" });
        clearInterval(this.intervalStart);
      }
    }

    if (e.target.name === "Reset") {
      this.setState({
        minutes: 1,
        seconds: 0,
        displayStartOrStop: "Start"
      });

      clearInterval(this.intervalStart);
    }
  };

  tick = () => {
    console.log(this.state.minutes);

    var min = Math.floor(this.timeRemaining / 60);
    var sec = this.timeRemaining - min * 60;

    this.setState({
      minutes: min,
      seconds: sec
    });

    if (this.state.seconds < 10) {
      this.setState({ seconds: "0" + this.state.seconds });
    }

    if (sec === 0 && min === 0) {
      clearInterval(this.intervalStart);
      this.setState({ displayStartOrStop: "Start" });
    } else {
    }

    console.log(this.timeRemaining);
    this.timeRemaining--;
    this.click1.play();
  };

  render() {
    return (
      <div className="mt-5">
        <TimerCounter
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          buttonText={this.state.displayStartOrStop}
        />
        <TimerInput onChange={this.onChange} />
        <StartStop
          buttonText={this.state.displayStartOrStop}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default TimerDemo;
