import { Component } from "react";

class Boxes extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      box.current.classList.add("slide");

      setTimeout(() => {
        box.current.style.visibility = "hidden";
      }, 4000);
    }, 1000);
  }

  render() {
    return (
      <div
        // ref={box}
        style={
          {
            //   width: `${width}px`,
            //   height: `${height}px`,
            //   background: color,
          }
        }
      ></div>
    );
  }
}

export default Boxes;
