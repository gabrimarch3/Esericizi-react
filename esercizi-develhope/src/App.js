import { Routes, Route, Link, Outlet } from "react-router-dom";
import GitHubUserList from "./components/GitHubUserList";
import ShowGithubUser from "./components/ShowGithubUser";

function App() {
  return <div>
          <Routes>
            <Route path="list" element={<GitHubUserList/>}>
              <Route path=":username" element={<ShowGithubUser/>}/>
            </Route>
          </Routes>
          <p><Link to="list">Lista</Link></p>
          <p><Link to="list/gabrimarch3">Mio profilo Github</Link></p>
          <Outlet/>
        </div>
}


export default App;