import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import ClickCounter from "./components/ClickCounter";
import ClickTracker from "./components/ClickTracker";
import "./App.css"

function App() {
  return (
    <>
      <Welcome name="Jhon" age={18} />
      <div className="counters">
      <Counter start={10} add={2} ms={2000} />
      <ClickCounter />
      <ClickTracker />
      </div>
    </>
  );
}

export default App;
