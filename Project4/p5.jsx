import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import States from "./components/States";
import Example from "./components/Example";
import "./components/Header/styles.css";


class View extends React.Component {

  render() {
    return (
      <div>
        <HashRouter>
          <div className="link-container">
            <Link to="/states">States</Link>
            <Link to="/example">Example</Link>
          </div>
          <Route path="/states" component={States} />
          <Route path="/example" component={Example} />
        </HashRouter>
      </div>
    );
  }
}


ReactDOM.render(<View />, document.getElementById("reactapp"));