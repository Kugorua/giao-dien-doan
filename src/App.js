import React, { Component } from "react";
import "./App.css";
import ChartHumidity from "./components/chart-humidity/ChartHumidity";
import ChartTemperature from "./components/char-temperature/ChartTemperature";
import TaskBar from "./components/taskbar/TaskBar";
import Control from "./components/control/Control";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOption: "dashboard",
    };
  }
  option = (a) => {
    this.setState({ isOption: a });
  };
  render() {
    return (
      <div className="app">
        <div className="taskbar">
          <TaskBar option={this.option} />
        </div>
        <div className="chart">
          {this.state.isOption === "dashboard" ? (
            <React.Fragment>
              <ChartHumidity />
              <ChartTemperature />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Control />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default App;
