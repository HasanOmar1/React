import React, { Component } from "react";

class DataFetchingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        // Simulating data fetching, you can replace this with your API call
        setTimeout(() => {
            const mockData = "Data fetched successfully!";
            this.setState({ data: mockData });
        }, 2000);
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <h2>Data Fetching Component</h2>
                <p>{data}</p>
            </div>
        );
    }
}

class ToggleApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        };
    }

    handleToggle = () => {
        this.setState((prevState) => ({
            toggle: !prevState.toggle,
        }));
    };

    render() {
        const { toggle } = this.state;

        return (
            <div>
                <h1>Toggle App</h1>
                <button onClick={this.handleToggle}>
                    Toggle Data Fetching Component
                </button>

                {toggle && <DataFetchingComponent />}
            </div>
        );
    }
}

export default ToggleApp;
