import { Component } from "react";

class ShowTime extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
  }

  convertSeconds = (e) => {
    this.setState({
      seconds: e.target.value,
      minutes: e.target.value / 60,
      hours: e.target.value / 3600,
    });
  };

  convertMinutes = (e) => {
    this.setState({
      seconds: e.target.value * 60,
      minutes: e.target.value,
      hours: e.target.value / 60,
    });
  };

  convertHours = (e) => {
    this.setState({
      seconds: e.target.value * 3600,
      minutes: e.target.value * 60,
      hours: e.target.value,
    });
  };
  render() {
    return (
      <>
        <div className="inputs-container">
          <label htmlFor="seconds">Seconds :</label>
          <input
            type="text"
            name="seconds"
            id="seconds"
            value={this.state.seconds}
            onChange={(e) => this.convertSeconds(e)}
          />
          <label htmlFor="minutes">Minutes :</label>
          <input
            type="text"
            name="minutes"
            id="minutes"
            value={this.state.minutes}
            onChange={(e) => this.convertMinutes(e)}
          />
          <label htmlFor="hours">Hours :</label>
          <input
            type="text"
            name="hours"
            id="hours"
            value={this.state.hours}
            onChange={(e) => this.convertHours(e)}
          />
        </div>
      </>
    );
  }
}

export default ShowTime;
