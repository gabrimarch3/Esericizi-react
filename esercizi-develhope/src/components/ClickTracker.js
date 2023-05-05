import { useState } from "react";

const ClickTracker = () => {
  const [lastClick, setLastClick] = useState("↓");

  function handleLastClick(event) {
    setLastClick(event.target.name);
    const coloreBottone = document.querySelector(".colore-bottone");
    if(event.target.name == "bottone-rosso") {
        coloreBottone.style.color = "red"
    } else if (event.target.name == "bottone-blu") {
        coloreBottone.style.color = "blue"
    } else if (event.target.name == "bottone-verde") {
        coloreBottone.style.color = "green"
    }
  }

  return (
    <div className="click-tracker">
      <h1>Hai premuto il <span className="colore-bottone">{lastClick}</span></h1>
      <button name="bottone-rosso" className="red-button" onClick={handleLastClick}>
        Bottone rosso!
      </button>
      <button name="bottone-blu" className="blue-button" onClick={handleLastClick}>
        Bottone blu!
      </button>
      <button name="bottone-verde" className="green-button" onClick={handleLastClick}>
        Bottone verde!
      </button>
    </div>
  );
};

export default ClickTracker;
