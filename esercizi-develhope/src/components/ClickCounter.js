import { useState } from "react";

const ClickCounter = () => {
    const [counter, setCounter] = useState(0)

    function handleCounter() {
        setCounter(counter + 1)
    }

    return (
        <div className="button-counter">
            <h1>{counter}</h1>
            <button onClick={handleCounter}>Cliccami!</button>
        </div>
    )
}

export default ClickCounter;