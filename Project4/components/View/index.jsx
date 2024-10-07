import React from "react";
import "./styles.css";
import States from "../States";
import Example from "../Example";

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayStates: true,
    };
  }

  handleButton = () => {
    this.setState({displayStates: !this.state.displayStates});
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleButton}>Switch to {this.state.displayStates ? "Example" : "States"}</button>
        {this.state.displayStates ? <States /> : <Example />}
      </div>
    );
  }
}

export default View;