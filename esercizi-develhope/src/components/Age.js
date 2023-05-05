import React from "react";

class Age extends React.Component {
  render() {
    return <p>Your Age is: {this.props.age}</p>;
  }
}

Age.defaultProps = {
  age: 18,
};

export default Age;
