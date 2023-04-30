import React from "react";
import Age from "./Age"

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, <strong>{this.props.name}</strong></p>
        <Age />
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "Gabriel",
};

export default Welcome;
