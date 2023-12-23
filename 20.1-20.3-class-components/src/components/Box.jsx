import "./Box.css";
import React from "react";

class Box extends React.Component {
    constructor() {
        super();
        this.state = {
            boxNum: 0,
        };
    }
    componentDidMount() {
        // Set up an interval to increase the state every 5 seconds
        this.intervalId = setInterval(() => {
          this.setState((prevState) => {
            const newNumber = prevState.boxNum + 1;
    
            if (newNumber <= 3) {
              return {
                boxNum: newNumber,
              };
            } else {
              // Clear the interval if yourNumber reaches 3
              clearInterval(this.intervalId);
              return null;
            }
          });
        }, 5000); // 5000 milliseconds = 5 seconds
      }
    
      componentWillUnmount() {
        // Clear the interval to avoid memory leaks
        clearInterval(this.intervalId);
      }
    
    render(prevProps,prevState) {
       
        return (
            <div className="BoxAnimation">
                {/* <div className="box"></div> */}
                {this.state.boxNum === 0 ? <div className="box"></div> : ""}
                {this.state.boxNum === 1 ? <div className="box"></div> : ""}
                {this.state.boxNum === 2 ? <div className="box"></div> : ""}
            </div>
        );
    }
}

export default Box;
