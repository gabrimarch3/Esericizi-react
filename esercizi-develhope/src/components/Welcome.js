import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome, <strong>{this.props.name}</strong>
        </p>
        {this.props.age ? (
          this.props.age >= 18 ? (
            <Age age={this.props.age} />
          ) : (
            <p>Mi dispiace, non sei ancora maggiorenne</p>
          )
        ) : (
          <p>Per favore inserisci la tua età.</p>
        )}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "Gabriel",
};

export default Welcome;
