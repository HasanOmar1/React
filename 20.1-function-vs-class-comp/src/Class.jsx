import { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    if (this.state.count < 10 && this.state.count >= -10) {
      this.setState((prevCount) => {
        return { count: prevCount.count + 1 };
      });
    }
  };

  decrement = () => {
    if (this.state.count <= 10 && this.state.count > -10) {
      this.setState((prevCount) => {
        return { count: prevCount.count - 1 };
      });
    }
  };

  render() {
    return (
      <>
        <h1
          className={
            this.state.count > 0
              ? "green"
              : this.state.count === 0
              ? "black"
              : "red"
          }
        >
          {this.state.count}
        </h1>
        <div className="btn-container">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </>
    );
  }
}

export default ClassCounter;
