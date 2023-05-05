import Welcome from "./components/Welcome";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Welcome name="Jhon" age={18} />
      <Counter start={10} add={2.5} ms={2000} />
    </>
  );
}

export default App;
