import { useState } from "react";
import Welcome from "./Welcome";

const InteractiveWelcome = () => {
    const [name, setName] = useState("")

    const handleName = (event) => {
        setName(event.target.value);
    }
 
    return (
        <div className="welcome-form">
            <input type="text" value={name} onChange={handleName}></input>
            <Welcome name={name} />
        </div>
    )
}

export default InteractiveWelcome;