// import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import ClickCounter from "./components/ClickCounter";
import ClickTracker from "./components/ClickTracker";
import InteractiveWelcome from "./components/InteractiveWelcome";
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import "./App.css";
import GithubUser from "./components/GitHubUser";

function App() {
  return (
    <>
      {/* <Welcome name="Jhon" age={18} /> */}
      <InteractiveWelcome />
      <Login />
      <div className="counters">
        <Counter start={10} add={1.5} ms={1000} />
        <ClickCounter />
        <ClickTracker />
      </div>
      <TodoList />
      <div className="github-user">
        <h2>Dettagli Account:</h2>
        <GithubUser username="gabrimarch3" />
      </div>
    </>
  );
}

export default App;
