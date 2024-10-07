import React from "react";
import "./styles.css";
import Header from "../Header";

/**
 * Define States, a React component of CS142 Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      "window.cs142models.statesModel()",
      window.cs142models.statesModel()
    );
    this.state = {
      substring: "",
      result: window.cs142models.statesModel(),
    };
  }

  handleSubstringChange = (event) => {
    let newList = window.cs142models.statesModel().filter(x => this.containsSubstr(x, event.target.value));
    this.setState({substring: event.target.value, result: newList});
  };

  static containsSubstr = (string, substr) => {
    return string.toLowerCase().includes(substr.toLowerCase());
  };

  render() {
    return (
      <div>
        <Header></Header>
        <div className="input-box">
          Input the substring:
          <input 
            type="text"
            value={this.state.substring}
            onChange={this.handleSubstringChange}
          />
          <p className="input-show">
            The substring used to filter is: &quot;{this.state.substring}&quot;
          </p>
        </div>
        <div>
          {this.state.result.map((str, index) => (
            <div className="states" key={index}>
              {str}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default States;
