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
          this.props.age >= 18 &&
          this.props.age <= 65 &&
          this.props.name == "Jhon" ? (
            <Age age={this.props.age} />
          ) : (
            <p>Mi dispiace, Utente non riconosciuto</p>
          )
        ) : (
          <p>Per favore inserisci il tuo nome e/o la tua età</p>
        )}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "Gabriel",
};

export default Welcome;
