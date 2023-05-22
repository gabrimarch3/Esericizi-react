import {Route, Routes } from 'react-router-dom';
import GitHubUserList from './components/GitHubUserList';

function App() {
  return <div>
          <Routes>
            <Route path='user'>
              <Route path='list' element={<GitHubUserList/>}>
                <Route index element={<p>Add a user and select it</p>}/> 
              </Route> 
            </Route> 
          </Routes>
        </div>
}

export default App;