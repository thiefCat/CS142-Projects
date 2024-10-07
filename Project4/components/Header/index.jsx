import React from "react";
import "./styles.css";


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <span >Hi! My name is Songlin Zhao</span>
        <span>I love hiking and climbing mountains</span>
        <span>I&apos;m currently self-learning CS142 by Stanford</span>
      </div>
    );
  }
}

export default Header;