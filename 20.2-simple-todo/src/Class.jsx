import { Component } from "react";

const dataArr = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
];

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      dataArr,
    };
  }

  changeStatus = (index) => {
    const newState = this.state.dataArr.map((todo, i) => {
      return i === index ? { ...todo, completed: !todo.completed } : todo;
    });

    this.setState({ dataArr: newState });
    // console.log(newState);
  };
  render() {
    //   console.log(this.state.dataArr);
    return (
      <>
        {this.state.dataArr.map((todo, i) => {
          return (
            <div className="container" key={i}>
              <div className="stats-container">
                <h1 className={`${todo.completed && "done"}`}>{todo.name}</h1>
                <h1 className="status" onClick={() => this.changeStatus(i)}>
                  {todo.completed ? "V" : "X"}
                </h1>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Todo;
