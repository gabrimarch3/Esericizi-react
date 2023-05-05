import React from "react";

class Age extends React.Component {
  render() {
    return this.props.age >= 18 ? <p>Your age is: <strong>{this.props.age}</strong></p> : <p>You are very young</p>;
  }
}

Age.defaultProps = {
  age: 18,
};

export default Age;
